import type { Config } from '@netlify/functions';
import { desc } from 'drizzle-orm';
import { db } from '../../db/index';
import { posts as postsTable } from '../../db/schema';

type PostBody = {
  title?: unknown;
  content?: unknown;
};

type PostRecord = {
  id: number;
  title: string;
  content: string;
};

function toPostResponse(post: PostRecord) {
  return {
    id: post.id,
    title: post.title,
    content: post.content,
  };
}

function json(data: unknown, init: ResponseInit = {}) {
  return Response.json(data, {
    ...init,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...(init.headers ?? {}),
    },
  });
}

export default async (req: Request) => {
  switch (req.method) {
    case 'GET': {
      const rows = await db.select().from(postsTable).orderBy(desc(postsTable.id));
      return json({ posts: rows.map(toPostResponse) });
    }
    case 'POST': {
      const body = (await req.json().catch(() => null)) as PostBody | null;
      const title = typeof body?.title === 'string' ? body.title.trim() : '';
      const content = typeof body?.content === 'string' ? body.content.trim() : '';

      if (!title) {
        return json({ error: 'Title is required.' }, { status: 400 });
      }

      const [created] = await db
        .insert(postsTable)
        .values({
          title,
          content,
        })
        .returning();

      return json({ post: toPostResponse(created) }, { status: 201 });
    }
    default:
      return json({ error: 'Method not allowed.' }, { status: 405 });
  }
};

export const config: Config = {
  path: '/api/posts',
  method: ['GET', 'POST'],
};
