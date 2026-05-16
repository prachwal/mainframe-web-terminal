import type { Config } from '@netlify/functions';
import { drizzle } from 'drizzle-orm/netlify-db';
import { desc } from 'drizzle-orm';
import { z } from 'zod';
import { posts as postsTable } from '../../db/schema';
import * as schema from '../../db/schema';

const PostSchema = z.object({
  title: z.string().trim().min(1, 'Title is required.'),
  content: z.string().trim().optional().default(''),
});

type PostRecord = {
  id: number;
  title: string;
  content: string;
};

function toPostResponse(post: PostRecord) {
  return { id: post.id, title: post.title, content: post.content };
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

const db = drizzle({ schema });

export default async (req: Request) => {
  try {
    switch (req.method) {
      case 'GET': {
        const rows = await db.select().from(postsTable).orderBy(desc(postsTable.id));
        return json({ posts: rows.map(toPostResponse) });
      }
      case 'POST': {
        let body: unknown;
        try {
          body = await req.json();
        } catch {
          return json({ error: 'Invalid JSON in request body.' }, { status: 400 });
        }
        const result = PostSchema.safeParse(body);
        if (!result.success) {
          return json({ error: result.error.issues[0].message }, { status: 400 });
        }
        const { title, content } = result.data;
        const [created] = await db.insert(postsTable).values({ title, content }).returning();
        return json({ post: toPostResponse(created) }, { status: 201 });
      }
      default:
        return json({ error: 'Method not allowed.' }, { status: 405 });
    }
  } catch (err) {
    const message = err instanceof Error ? `${err.name}: ${err.message}` : String(err);
    console.error('[posts:err]', message);
    return json({ error: 'Internal server error.' }, { status: 500 });
  }
};

export const config: Config = {
  path: '/api/posts',
  method: ['GET', 'POST'],
};
