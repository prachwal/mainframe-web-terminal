import { render, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SocialLinks } from './index';

describe('SocialLinks', () => {
  it('renders accessible links and responsive label mode', () => {
    const { container } = render(
      <SocialLinks
        labelMode="responsive"
        links={[
          { name: 'GitHub', href: 'https://github.com', iconName: 'github' },
          { name: 'Docs', href: 'https://vite.dev', iconName: 'documentation' },
        ]}
      />,
    );
    const scoped = within(container);

    expect(scoped.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com',
    );
    expect(scoped.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', 'https://vite.dev');
    expect(scoped.getByText('GitHub')).toHaveClass('social-links__label');
    expect(scoped.getByText('Docs')).toHaveClass('social-links__label');
  });

  it('renders icon-only links without visible labels', () => {
    const { container } = render(
      <SocialLinks
        labelMode="icon-only"
        links={[
          { name: 'GitHub', href: 'https://github.com', iconName: 'github' },
          { name: 'Docs', href: 'https://vite.dev', iconName: 'documentation' },
        ]}
      />,
    );
    const scoped = within(container);

    expect(scoped.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com',
    );
    expect(scoped.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', 'https://vite.dev');
    expect(scoped.queryByText('GitHub')).not.toBeInTheDocument();
    expect(scoped.queryByText('Docs')).not.toBeInTheDocument();
  });
});
