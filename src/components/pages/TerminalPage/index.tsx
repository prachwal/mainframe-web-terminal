import { Heading, Text } from '@/components/atoms';
import { PageShell } from '@/components/templates/PageShell';
import './styles.scss';

export function TerminalPage() {
  return (
    <PageShell className="terminal-page">
      <section className="terminal-page__hero" aria-labelledby="terminal-title">
        <Heading level="h1">
          <span id="terminal-title">Terminal</span>
        </Heading>
        <Text variant="body">
          Placeholder for the terminal workspace. This route is ready for future command execution and live panes.
        </Text>
      </section>

      <div className="terminal-page__mock" aria-label="Terminal preview">
        <Text variant="label" as="span">System status</Text>
        <pre className="terminal-page__code">
{`> mainframe ready
> theme loaded
> awaiting commands`}
        </pre>
      </div>
    </PageShell>
  );
}
