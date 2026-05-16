import { Heading, Text } from '@/components/atoms';
import { PageShell } from '@/components/templates/PageShell';
import './styles.scss';

export function NotFoundPage() {
  return (
    <PageShell className="not-found-page">
      <section className="not-found-page__content" aria-labelledby="not-found-title">
        <Heading level="h1">
          <span id="not-found-title">Page not found</span>
        </Heading>
        <Text variant="body">
          The requested route does not exist. Use the navigation to return to a valid section.
        </Text>
      </section>
    </PageShell>
  );
}
