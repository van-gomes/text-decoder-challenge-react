import { render, screen } from '@testing-library/react';
import App from './App';

// Verificar a renderização inicial do componente.
// Simular eventos de entrada de texto e clique nos botões.
// Verificar se o componente está atualizando o estado corretamente.
// Verificar se os valores do campo de texto estão refletindo o estado após os eventos.

describe('App Component', () => {

  test('Deve renderizar o campo textarea com o placeholder correto', () => {
    render(<App />);
    const campoTextarea = screen.getByPlaceholderText('Digite seu texto');
    expect(campoTextarea).toBeInTheDocument();
    expect(campoTextarea).toHaveAttribute('placeholder', 'Digite seu texto');
  });
});