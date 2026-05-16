import { Heading, Text } from '@/components/atoms';
import { PageShell } from '@/components/templates/PageShell';
import './styles.scss';

const contactChannels = [
  'Open a repository issue for bug reports and feature requests.',
  'Use the documentation site for implementation and setup guidance.',
  'Check the status page for operational updates and planned maintenance.',
];

export function ContactPage() {
  return (
    <PageShell className="contact-page">
      <section className="contact-page__hero" aria-labelledby="contact-title">
        <Heading level="h1">
          <span id="contact-title">Contact</span>
        </Heading>
        <Text variant="body" className="contact-page__description">
          Reach the project through the channels below.
        </Text>
      </section>

      <section className="contact-page__panel" aria-labelledby="contact-channels-title">
        <Heading level="h2">
          <span id="contact-channels-title">Channels</span>
        </Heading>
        <ul className="contact-page__list">
          {contactChannels.map((item) => (
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
