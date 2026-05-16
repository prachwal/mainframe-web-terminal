import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { runtimeConfig } from '@/config/runtimeConfig';
import { SiteFooter } from './SiteFooter';

describe('SiteFooter', () => {
  it('renders support and legal links plus icon-only social links', () => {
    const { container } = render(
      <MemoryRouter>
        <SiteFooter />
      </MemoryRouter>,
    );
    const socialLinks = container.querySelector('.site-footer__social');

    expect(screen.getByText('Mainframe Web Terminal')).toBeInTheDocument();
    expect(
      screen
        .getAllByRole('link', { name: 'GitHub' })
        .find((link) => link.getAttribute('href') === runtimeConfig.githubUrl),
    ).toBeInTheDocument();
    expect(
      screen
        .getAllByRole('link', { name: 'Docs' })
        .find((link) => link.getAttribute('href') === runtimeConfig.docsUrl),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact');
    expect(screen.getByRole('link', { name: 'Accessibility' })).toHaveAttribute(
      'href',
      '/accessibility',
    );
    expect(screen.getByRole('link', { name: 'Privacy' })).toHaveAttribute('href', '/privacy');
    expect(screen.getByRole('link', { name: 'Terms' })).toHaveAttribute('href', '/terms');
    expect(screen.getByRole('link', { name: 'Status' })).toHaveAttribute('href', '/status');
    expect(screen.queryByRole('link', { name: 'Home' })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Terminal' })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Settings' })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'About' })).not.toBeInTheDocument();
    expect(socialLinks).not.toBeNull();
    expect(within(socialLinks as HTMLElement).queryByText('GitHub')).not.toBeInTheDocument();
  });
});
