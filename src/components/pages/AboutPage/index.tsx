import { Heading, Text } from '@/components/atoms';
import { PageShell } from '@/components/templates/PageShell';
import './styles.scss';

const principles = [
  'Atomic Design with bottom-up dependencies',
  'Redux-driven theme persistence',
  'Accessible, theme-aware surfaces',
];

export function AboutPage() {
  return (
    <PageShell className="about-page">
      <section className="about-page__hero" aria-labelledby="about-title">
        <Heading level="h1">
          <span id="about-title">About</span>
        </Heading>
        <Text variant="body">
          Mainframe Web Terminal is a design-system-driven interface for operator-focused workflows.
        </Text>
      </section>

      <section className="about-page__principles" aria-labelledby="principles-title">
        <Heading level="h2">
          <span id="principles-title">Principles</span>
        </Heading>
        <ul className="about-page__list">
          {principles.map((item) => (
            <li key={item}>
              <Text variant="body" as="span">{item}</Text>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
