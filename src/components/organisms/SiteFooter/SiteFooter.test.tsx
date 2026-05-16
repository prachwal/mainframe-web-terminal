import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { SiteFooter } from './SiteFooter';

describe('SiteFooter', () => {
  it('renders grouped links and responsive social links', () => {
    render(
      <MemoryRouter>
        <SiteFooter />
      </MemoryRouter>,
    );

    expect(screen.getByText('Mainframe Web Terminal')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com',
    );
    expect(
      screen
        .getAllByRole('link', { name: 'Docs' })
        .find((link) => link.getAttribute('href') === 'https://vite.dev'),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Community' })).toHaveAttribute(
      'href',
      'https://react.dev',
    );
    expect(screen.getByText('GitHub')).toHaveClass('social-links__label');
  });
});
