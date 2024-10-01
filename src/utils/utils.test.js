import { encryptText, decryptText } from './decodeUtil';

describe('Funções de Criptografia e Descriptografia', () => {
  
  test('Deve criptografar o texto corretamente', () => {
    const textoCriptografado = encryptText('hello world');
    expect(textoCriptografado).toBe('ifmmp!xpsme');
  });

  test('Deve descriptografar o texto corretamente', () => {
    const textoDescriptografado = decryptText('ifmmp!xpsme');
    expect(textoDescriptografado).toBe('hello world');
  });

});
