import { Heading, Text } from '@/components/atoms';
import { PageShell } from '@/components/templates/PageShell';
import './styles.scss';

const privacyPoints = [
  'Theme preference may be stored locally so the interface stays consistent.',
  'No personal data should be collected beyond what is required to operate the app.',
  'Any future analytics or telemetry should be documented before release.',
];

export function PrivacyPage() {
  return (
    <PageShell className="privacy-page">
      <section className="privacy-page__hero" aria-labelledby="privacy-title">
        <Heading level="h1">
          <span id="privacy-title">Privacy</span>
        </Heading>
        <Text variant="body" className="privacy-page__description">
          This page summarizes the default privacy posture for the interface.
        </Text>
      </section>

      <section className="privacy-page__panel" aria-labelledby="privacy-principles-title">
        <Heading level="h2">
          <span id="privacy-principles-title">Principles</span>
        </Heading>
        <ul className="privacy-page__list">
          {privacyPoints.map((item) => (
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
