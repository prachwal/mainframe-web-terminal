import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SocialLinks } from './index';

describe('SocialLinks', () => {
  it('renders accessible links and responsive label mode', () => {
    render(
      <SocialLinks
        labelMode="responsive"
        links={[
          { name: 'GitHub', href: 'https://github.com', iconName: 'github' },
          { name: 'Docs', href: 'https://vite.dev', iconName: 'documentation' },
        ]}
      />,
    );

    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com',
    );
    expect(screen.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', 'https://vite.dev');
    expect(screen.getByText('GitHub')).toHaveClass('social-links__label');
    expect(screen.getByText('Docs')).toHaveClass('social-links__label');
  });
});
