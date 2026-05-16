import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { SiteHeader } from './SiteHeader';
import { themeReducer } from '@/store/themeSlice';

function renderHeader() {
  const store = configureStore({
    reducer: {
      theme: themeReducer,
    },
  });

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <SiteHeader />
      </MemoryRouter>
    </Provider>,
  );
}

describe('SiteHeader', () => {
  it('opens and closes the mobile drawer', async () => {
    renderHeader();

    const trigger = screen.getByRole('button', { name: 'Open menu' });
    fireEvent.click(trigger);

    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('navigation', { name: 'Mobile primary' })).toBeInTheDocument();

    fireEvent.keyDown(window, { key: 'Escape' });

    await waitFor(() => expect(trigger).toHaveAttribute('aria-expanded', 'false'));
    expect(trigger).toHaveFocus();
  });

  it('switches theme from the drawer', () => {
    renderHeader();

    fireEvent.click(screen.getAllByRole('button', { name: 'Open menu' })[0]);
    fireEvent.click(within(screen.getAllByRole('dialog')[0]).getByRole('button', { name: 'Dark' }));

    expect(document.documentElement.dataset.themeMode).toBe('dark');
    expect(document.documentElement.dataset.theme).toBe('dark');
  });
});
