import { Heading, Text } from '@/components/atoms';
import { PageShell } from '@/components/templates/PageShell';
import './styles.scss';

const statusPoints = [
  'Theme persistence and route rendering are available in the current build.',
  'The status page is ready for future monitoring and release notes.',
  'If live health checks are added later, this page can surface them here.',
];

export function StatusPage() {
  return (
    <PageShell className="status-page">
      <section className="status-page__hero" aria-labelledby="status-title">
        <Heading level="h1">
          <span id="status-title">Status</span>
        </Heading>
        <Text variant="body" className="status-page__description">
          Operational updates and build health live here.
        </Text>
      </section>

      <section className="status-page__panel" aria-labelledby="status-notes-title">
        <Heading level="h2">
          <span id="status-notes-title">Current notes</span>
        </Heading>
        <ul className="status-page__list">
          {statusPoints.map((item) => (
            <li key={item}>
              <Text variant="body" as="span">
                {item}
              </Text>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
