import { copyTextToClipboard } from './copyUtil';

test('Deve chamar showMessage com sucesso ao copiar o texto', async () => {
  const mockShowMessage = jest.fn();

  // Sobrescreve o clipboard com uma implementação mockada
  // Simula falha ao copiar o texto
  navigator.clipboard = {
    writeText: jest.fn().mockResolvedValue(),
  };

  await copyTextToClipboard('textoacopiar', mockShowMessage);

  expect(navigator.clipboard.writeText).toHaveBeenCalledWith('textoacopiar');

  expect(mockShowMessage).toHaveBeenCalledWith('Texto copiado com sucesso!');
});
