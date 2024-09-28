import { render, fireEvent, screen, waitFor } from '@testing-library/react';

import App from './App';

// Verificar a renderização inicial do componente.
// Simular eventos de entrada de texto e clique nos botões.
// Verificar se o componente está atualizando o estado corretamente.
// Verificar se os valores do campo de texto estão refletindo o estado após os eventos.

describe('App Component', () => {

  // Teste de renderização inicial do componente
  test('Deve renderizar o campo textarea com o placeholder correto', () => {
    render(<App />);

    const campoTextarea = screen.getByPlaceholderText('Digite seu texto');
    
    expect(campoTextarea).toBeInTheDocument();
    expect(campoTextarea).toHaveAttribute('placeholder', 'Digite seu texto');
  });

  // Teste de erro para campo vazio
  test('Deve mostrar mensagem de erro quando o campo de entrada estiver vazio', async () => {
    render(<App />);

    const campoTextarea = screen.getByPlaceholderText('Digite seu texto');
    
    // Simula o clique no botão de criptografar com campo vazio
    fireEvent.change(campoTextarea, { target: { value: '' } });
    fireEvent.click(screen.getByText('Criptografar'));

    // Verifica se a mensagem de erro aparece
    const mensagemErro = await screen.findByText('Campo de entrada está vazio!');
    expect(mensagemErro).toBeInTheDocument();
  });

  // Teste de erro para letras maiúsculas
  test('Deve mostrar mensagem de erro quando o texto contiver letras maiúsculas', async () => {
    render(<App />);

    const campoTextarea = screen.getByPlaceholderText('Digite seu texto');
    
    // Simula a entrada de um texto inválido (letras maiúsculas)
    fireEvent.change(campoTextarea, { target: { value: 'HELLO' } });
    fireEvent.click(screen.getByText('Criptografar'));

    // Verifica se a mensagem de erro aparece
    const mensagemErro = await screen.findByText('Texto para decodificação inválido!');
    expect(mensagemErro).toBeInTheDocument();
  });

  // Teste de erro para letras com acentos
  test('Deve mostrar mensagem de erro quando o texto contiver letras com acentos', async () => {
    render(<App />);

    const campoTextarea = screen.getByPlaceholderText('Digite seu texto');
    
    // Simula a entrada de um texto com acento
    fireEvent.change(campoTextarea, { target: { value: 'olá mundo' } });
    fireEvent.click(screen.getByText('Criptografar'));

    // Verifica se a mensagem de erro aparece
    const mensagemErro = await screen.findByText('Texto para decodificação inválido!');
    expect(mensagemErro).toBeInTheDocument();
  });

  // Teste de criptografia (entrada válida)
  test('Deve criptografar o texto corretamente quando o campo de entrada for válido', () => {
    render(<App />);

    const campoTextarea = screen.getByPlaceholderText('Digite seu texto');
    
    // Simula a entrada de um texto válido
    fireEvent.change(campoTextarea, { target: { value: 'hello world' } });
    fireEvent.click(screen.getByText('Criptografar'));

    // Verifica se o texto criptografado é exibido no Decoder
    const textoCriptografado = screen.getByDisplayValue('ifmmp!xpsme');
    expect(textoCriptografado).toBeInTheDocument();
  });

// Teste de descriptografia (entrada válida)
  test('Deve descriptografar o texto corretamente quando o campo de entrada for válido', async () => {
    render(<App />);

    const campoTextarea = screen.getByPlaceholderText('Digite seu texto');
    
    // Simula a entrada de um texto criptografado
    fireEvent.change(campoTextarea, { target: { value: 'ifmmp!xpsme' } });
    
    // Simula o clique no botão de descriptografar usando data-testid
    fireEvent.click(screen.getByText('Descriptografar'));

    // Aguarda que o texto descriptografado apareça no campo de saída
    await waitFor(() => {
      const textoDescriptografado = screen.getByDisplayValue('hello world');
      expect(textoDescriptografado).toBeInTheDocument();
    });
  });
});