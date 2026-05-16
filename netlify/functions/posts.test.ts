import { beforeEach, describe, expect, it, vi } from 'vitest';

const selectFromMock = vi.fn();
const orderByMock = vi.fn();
const insertValuesMock = vi.fn();
const returningMock = vi.fn();

vi.mock('../../db/index', () => ({
  db: {
    select: vi.fn(() => ({
      from: selectFromMock,
    })),
    insert: vi.fn(() => ({
      values: insertValuesMock,
    })),
  },
}));

vi.mock('../../db/schema', () => ({
  posts: {
    id: 'posts.id',
  },
}));

describe('posts function', () => {
  beforeEach(() => {
    vi.resetModules();
    selectFromMock.mockReset();
    orderByMock.mockReset();
    insertValuesMock.mockReset();
    returningMock.mockReset();
  });

  it('returns posts for GET requests', async () => {
    selectFromMock.mockReturnValue({
      orderBy: orderByMock.mockResolvedValue([
        { id: 2, title: 'Second', content: 'World' },
        { id: 1, title: 'First', content: 'Hello' },
      ]),
    });

    const { default: handler } = await import('./posts');
    const response = await handler(new Request('http://localhost/api/posts', { method: 'GET' }), {} as never);

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      posts: [
        { id: 2, title: 'Second', content: 'World' },
        { id: 1, title: 'First', content: 'Hello' },
      ],
    });
  });

  it('creates a post for POST requests', async () => {
    insertValuesMock.mockReturnValue({
      returning: returningMock.mockResolvedValue([{ id: 3, title: 'New', content: 'Post' }]),
    });

    const { default: handler } = await import('./posts');
    const response = await handler(
      new Request('http://localhost/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title: '  New  ', content: ' Post ' }),
      }),
      {} as never,
    );

    expect(response.status).toBe(201);
    await expect(response.json()).resolves.toEqual({
      post: { id: 3, title: 'New', content: 'Post' },
    });
  });

  it('rejects empty titles', async () => {
    const { default: handler } = await import('./posts');
    const response = await handler(
      new Request('http://localhost/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title: '   ', content: 'Ignored' }),
      }),
      {} as never,
    );

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toEqual({
      error: 'Title is required.',
    });
  });
});
