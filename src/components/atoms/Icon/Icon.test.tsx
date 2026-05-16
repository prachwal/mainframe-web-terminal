import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Icon } from './index';

describe('Icon', () => {
  it('is decorative by default', () => {
    const { container } = render(<Icon name="github" />);

    const icon = container.querySelector('svg');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('aria-hidden', 'true');
    expect(icon).toHaveAttribute('focusable', 'false');
  });

  it('exposes an accessible name when requested', () => {
    render(<Icon name="arrow-right" ariaLabel="Next step" />);

    const icon = screen.getByRole('img', { name: 'Next step' });

    expect(icon).toHaveAttribute('aria-label', 'Next step');
    expect(icon).not.toHaveAttribute('aria-hidden', 'true');
  });
});
