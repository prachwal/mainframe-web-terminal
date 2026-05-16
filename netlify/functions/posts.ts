import type { Config } from '@netlify/functions';
import pg from 'pg';
import { z } from 'zod';

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

export default async (req: Request) => {
  const url = process.env.NETLIFY_DB_URL!;
  const pool = new pg.Pool({
    connectionString: url,
    max: 1,
    idleTimeoutMillis: 5000,
  });

  try {
    switch (req.method) {
      case 'GET': {
        const { rows } = await pool.query(
          'SELECT id, title, content FROM posts ORDER BY id DESC',
        );
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
        const { rows } = await pool.query(
          'INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING id, title, content',
          [title, content],
        );
        return json({ post: toPostResponse(rows[0]) }, { status: 201 });
      }
      default:
        return json({ error: 'Method not allowed.' }, { status: 405 });
    }
  } catch (err) {
    const message = err instanceof Error ? `${err.name}: ${err.message}` : String(err);
    console.error('[posts:err]', message);
    return json({ error: 'Internal server error.' }, { status: 500 });
  } finally {
    await pool.end().catch(() => {});
  }
};

export const config: Config = {
  path: '/api/posts',
  method: ['GET', 'POST'],
};
