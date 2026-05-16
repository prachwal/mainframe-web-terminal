import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Button } from './index';

describe('Button', () => {
  it('renders a native button with default props', () => {
    render(<Button>Save</Button>);

    const button = screen.getByRole('button', { name: 'Save' });

    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveClass('button', 'button--primary', 'button--md');
  });

  it('forwards native button attributes and handles clicks', () => {
    const onClick = vi.fn();

    render(
      <Button
        aria-label="Confirm action"
        data-testid="confirm-button"
        disabled={false}
        onClick={onClick}
        size="lg"
        variant="outline"
        type="submit"
      >
        Confirm
      </Button>,
    );

    const button = screen.getByTestId('confirm-button');

    expect(button).toHaveAttribute('type', 'submit');
    expect(button).toHaveClass('button--outline', 'button--lg');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('prevents clicks when disabled', () => {
    const onClick = vi.fn();

    render(<Button disabled onClick={onClick}>Disabled</Button>);

    const button = screen.getByRole('button', { name: 'Disabled' });

    expect(button).toBeDisabled();

    fireEvent.click(button);

    expect(onClick).not.toHaveBeenCalled();
  });
});
