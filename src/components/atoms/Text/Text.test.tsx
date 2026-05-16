import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Text } from './index';

describe('Text', () => {
  it('renders body text as a paragraph by default', () => {
    render(<Text>Plain body copy</Text>);

    const text = screen.getByText('Plain body copy');

    expect(text.tagName).toBe('P');
    expect(text).toHaveClass('text', 'text--body');
  });

  it('supports inline variants and custom elements', () => {
    render(
      <Text variant="label" as="span">
        Status
      </Text>,
    );

    const text = screen.getByText('Status');

    expect(text.tagName).toBe('SPAN');
    expect(text).toHaveClass('text--label');
  });
});
