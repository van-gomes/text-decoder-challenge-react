import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {

  test('Deve renderizar o campo textarea com o placeholder correto', () => {
    render(<App />);
    const campoTextarea = screen.getByPlaceholderText('Digite seu texto');
    expect(campoTextarea).toBeInTheDocument();
    expect(campoTextarea).toHaveAttribute('placeholder', 'Digite seu texto');
  });
});