import { Heading, Text } from '@/components/atoms';
import { PageShell } from '@/components/templates/PageShell';
import './styles.scss';

const termsPoints = [
  'The interface is provided as part of the project workspace.',
  'Route content may change as the product evolves.',
  'Contributions should follow the repository workflow and coding rules.',
];

export function TermsPage() {
  return (
    <PageShell className="terms-page">
      <section className="terms-page__hero" aria-labelledby="terms-title">
        <Heading level="h1">
          <span id="terms-title">Terms</span>
        </Heading>
        <Text variant="body" className="terms-page__description">
          These terms describe how the interface should be used inside the project.
        </Text>
      </section>

      <section className="terms-page__panel" aria-labelledby="terms-points-title">
        <Heading level="h2">
          <span id="terms-points-title">Usage</span>
        </Heading>
        <ul className="terms-page__list">
          {termsPoints.map((item) => (
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
