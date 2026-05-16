import { useEffect, useState, type FormEvent } from 'react';
import { Button, Heading, Text } from '@/components/atoms';
import { PageShell } from '@/components/templates/PageShell';
import './styles.scss';

type Post = {
  id: number;
  title: string;
  content: string;
};

export function TerminalPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [status, setStatus] = useState('Ready to create a post.');
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadPosts() {
      try {
        const response = await fetch('/api/posts', { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`Failed to load posts (${response.status})`);
        }

        const data = (await response.json()) as { posts: Post[] };
        setPosts(data.posts);
        setStatus(data.posts.length ? 'Loaded posts from Netlify Database.' : 'No posts yet.');
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return;
        }

        setStatus('Unable to load posts from the API.');
      } finally {
        setIsLoading(false);
      }
    }

    void loadPosts();

    return () => controller.abort();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error ?? 'Unable to create post.');
      }

      const payload = (await response.json()) as { post: Post };
      setPosts((current) => [payload.post, ...current]);
      setTitle('');
      setContent('');
      setStatus(`Created post "${payload.post.title}".`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Unable to create post.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <PageShell className="terminal-page">
      <section className="terminal-page__hero" aria-labelledby="terminal-title">
        <Heading level="h1">
          <span id="terminal-title">Terminal</span>
        </Heading>
        <Text variant="body">
          Create and preview posts through the Netlify Database API.
        </Text>
      </section>

      <div className="terminal-page__grid">
        <section className="terminal-page__panel" aria-labelledby="post-creator-title">
          <Heading level="h2">
            <span id="post-creator-title">Post creator</span>
          </Heading>
          <Text variant="body" className="terminal-page__panelCopy">
            This form writes directly to the database through the API.
          </Text>

          <form className="terminal-page__form" onSubmit={handleSubmit}>
            <label className="terminal-page__field">
              <Text variant="label" as="span" className="terminal-page__fieldLabel">
                Title
              </Text>
              <input
                className="terminal-page__input"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                name="title"
                placeholder="New post title"
                required
                maxLength={255}
              />
            </label>

            <label className="terminal-page__field">
              <Text variant="label" as="span" className="terminal-page__fieldLabel">
                Content
              </Text>
              <textarea
                className="terminal-page__textarea"
                value={content}
                onChange={(event) => setContent(event.target.value)}
                name="content"
                placeholder="Short content summary"
                rows={4}
              />
            </label>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Saving...' : 'Save post'}
            </Button>
          </form>

          <Text variant="caption" as="span" className="terminal-page__status">
            {status}
          </Text>
        </section>

        <section className="terminal-page__panel" aria-labelledby="post-list-title">
          <Heading level="h2">
            <span id="post-list-title">Recent posts</span>
          </Heading>
          <Text variant="body" className="terminal-page__panelCopy">
            {isLoading ? 'Loading posts...' : 'Live data from Netlify Database.'}
          </Text>

          {posts.length > 0 ? (
            <ul className="terminal-page__posts">
              {posts.map((post) => (
                <li key={post.id} className="terminal-page__post">
                  <Text variant="label" as="span" className="terminal-page__postTitle">
                    {post.title}
                  </Text>
                  {post.content ? (
                    <Text variant="body" className="terminal-page__postContent">
                      {post.content}
                    </Text>
                  ) : null}
                </li>
              ))}
            </ul>
          ) : (
            <Text variant="body" className="terminal-page__empty">
              No posts yet. Create the first one above.
            </Text>
          )}
        </section>
      </div>
    </PageShell>
  );
}
