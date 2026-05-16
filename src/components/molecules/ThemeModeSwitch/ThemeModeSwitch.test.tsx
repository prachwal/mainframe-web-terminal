import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ThemeModeSwitch } from './index';

describe('ThemeModeSwitch', () => {
  it('marks the active mode and dispatches changes', () => {
    const onChange = vi.fn();

    render(<ThemeModeSwitch value="dark" onChange={onChange} />);

    expect(screen.getByRole('button', { name: 'Dark' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: 'Light' })).toHaveAttribute('aria-pressed', 'false');

    fireEvent.click(screen.getByRole('button', { name: 'Light' }));

    expect(onChange).toHaveBeenCalledWith('light');
  });
});
