import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Deve renderizar o campo textarea com o placeholder correto', () => {
  render(<App />);

  const campoTextarea = screen.getByPlaceholderText('Digite seu texto');

  expect(campoTextarea).toBeInTheDocument();

  expect(campoTextarea).toHaveAttribute('placeholder', 'Digite seu texto');
});

test('Deve mostrar mensagem quando campo de entrada for letra maíscula', () => {
  const handleEncrypt = jest.fn();
  const feedbackErro = 'Texto para decodificação inválido!';

  render(<App />);
  
  const campoTextarea = screen.getByPlaceholderText('Digite seu texto');

  fireEvent.change(campoTextarea, {target: {value: 'ddddAAAAABBBBBCCCCCChhhh'}});

  fireEvent.click(screen.getByText('Criptografar'));

  expect(handleEncrypt).not.toHaveBeenCalled;
  expect(feedbackErro).toBeInTheDocument;
});

test('Deve mostrar mensagem quando campo de entrada for letra com acento', () => {
  const handleEncrypt = jest.fn();
  const feedbackErro = 'Texto para decodificação inválido!';

  render(<App />);
  
  const campoTextarea = screen.getByPlaceholderText('Digite seu texto');

  fireEvent.change(campoTextarea, {target: {value: 'ggggverônicaaaaa'}});

  fireEvent.click(screen.getByText('Criptografar'));

  expect(handleEncrypt).not.toHaveBeenCalled;
  expect(feedbackErro).toBeInTheDocument;
});