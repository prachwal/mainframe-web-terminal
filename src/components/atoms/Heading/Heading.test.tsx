import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Heading } from './index';

describe('Heading', () => {
  it('renders an h1 by default', () => {
    render(<Heading>Welcome</Heading>);

    const heading = screen.getByRole('heading', { level: 1, name: 'Welcome' });

    expect(heading.tagName).toBe('H1');
  });

  it('renders the requested semantic level', () => {
    render(<Heading level="h3">Section title</Heading>);

    const heading = screen.getByRole('heading', { level: 3, name: 'Section title' });

    expect(heading.tagName).toBe('H3');
  });
});
