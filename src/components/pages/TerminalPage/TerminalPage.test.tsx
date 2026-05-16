import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { store } from '@/store';
import { TerminalPage } from './index';

describe('TerminalPage', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          posts: [
            { id: 1, title: 'Hello', content: 'World' },
            { id: 2, title: 'Second', content: '' },
          ],
        }),
      }),
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('renders the post creator and recent posts list', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <TerminalPage />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByRole('heading', { name: 'Terminal' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Post creator' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Recent posts' })).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Hello')).toBeInTheDocument();
    });

    expect(screen.getByText('World')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
  });
});
