import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(document.body).toBeTruthy();
  });

  it('renders header component', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    // El header debería estar presente
    const header = document.querySelector('header');
    expect(header).toBeTruthy();
  });

  it('renders footer component', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    // El footer debería estar presente
    const footer = document.querySelector('footer');
    expect(footer).toBeTruthy();
  });
});
