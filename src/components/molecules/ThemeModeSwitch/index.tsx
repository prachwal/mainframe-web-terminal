import { Button, Text } from '@/components/atoms';
import type { ThemeMode } from '@/theme';
import './styles.scss';

const OPTIONS: Array<{ mode: ThemeMode; label: string }> = [
  { mode: 'light', label: 'Light' },
  { mode: 'dark', label: 'Dark' },
  { mode: 'system', label: 'System' },
];

export interface ThemeModeSwitchProps {
  value: ThemeMode;
  onChange: (mode: ThemeMode) => void;
  className?: string;
}

export function ThemeModeSwitch({ value, onChange, className = '' }: ThemeModeSwitchProps) {
  return (
    <div className={`theme-mode-switch ${className}`.trim()}>
      <Text variant="label" as="span" className="theme-mode-switch__label">
        Theme mode
      </Text>
      <div className="theme-mode-switch__group" role="group" aria-label="Theme mode">
        {OPTIONS.map((option) => (
          <Button
            key={option.mode}
            type="button"
            variant={value === option.mode ? 'secondary' : 'outline'}
            size="sm"
            aria-pressed={value === option.mode}
            onClick={() => onChange(option.mode)}
            className="theme-mode-switch__button"
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
