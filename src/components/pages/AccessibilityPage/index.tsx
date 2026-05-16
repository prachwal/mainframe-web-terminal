import { Heading, Text } from '@/components/atoms';
import { PageShell } from '@/components/templates/PageShell';
import './styles.scss';

const accessibilityPoints = [
  'Semantic HTML is preferred for structure and navigation.',
  'Interactive controls must expose keyboard support and visible focus states.',
  'Color contrast should stay readable in both light and dark themes.',
];

export function AccessibilityPage() {
  return (
    <PageShell className="accessibility-page">
      <section className="accessibility-page__hero" aria-labelledby="accessibility-title">
        <Heading level="h1">
          <span id="accessibility-title">Accessibility</span>
        </Heading>
        <Text variant="body" className="accessibility-page__description">
          The interface is built to stay readable, keyboard-friendly, and theme-aware.
        </Text>
      </section>

      <section className="accessibility-page__panel" aria-labelledby="accessibility-principles-title">
        <Heading level="h2">
          <span id="accessibility-principles-title">Practices</span>
        </Heading>
        <ul className="accessibility-page__list">
          {accessibilityPoints.map((item) => (
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
