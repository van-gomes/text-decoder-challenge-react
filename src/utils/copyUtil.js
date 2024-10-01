// copyUtil.test.js
import { copyTextToClipboard } from './copyUtil';

describe('copyTextToClipboard', () => {
  beforeAll(() => {
    // Mockando a API de clipboard
    global.navigator.clipboard = {
      writeText: jest.fn(),
    };
  });

  it('deve copiar o texto para a área de transferência com sucesso', async () => {
    const showMessageMock = jest.fn();

    // Simulando sucesso ao copiar o texto
    navigator.clipboard.writeText.mockResolvedValueOnce();

    await copyTextToClipboard('uftufopwp', showMessageMock);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('uftufopwp');
    expect(showMessageMock).toHaveBeenCalledWith('Texto copiado com sucesso!');
  });

  it('deve exibir mensagem de erro ao falhar na cópia do texto', async () => {
    const showMessageMock = jest.fn();

    // Simulando falha ao copiar o texto
    navigator.clipboard.writeText.mockRejectedValueOnce(new Error('Erro'));

    await copyTextToClipboard('testenovo', showMessageMock);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('testenovo');
    expect(showMessageMock).toHaveBeenCalledWith('Ops, ocorreu um erro ao copiar o texto!');
  });
});