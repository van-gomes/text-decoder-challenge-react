import { render, fireEvent, screen, waitFor, getByRole } from '@testing-library/react';
import { Decoder } from './Decoder';

describe('Decoder Component', () => {
    test('Deve renderizar o título padrão quando não há texto decodificado', () => {
        render(<Decoder outputValue="" />);

        const title = screen.getByRole('heading');
        expect(title).toHaveTextContent('Nenhuma mensagem encontrada');
    });

    test('Não deve renderizar o título padrão quando há texto decodificado', () => {
        render(<Decoder outputValue="testenovo" />);
    
        const title = screen.queryByRole('heading');
        expect(title).not.toBeInTheDocument();
    });

    test('Deve renderizar a imagem quando não há texto decodificado', () => {
        render(<Decoder outputValue="" />);
    
        const image = screen.getByAltText('Decodificador de Texto');
        expect(image).toBeInTheDocument();
    });
    
    test('Não deve renderizar a imagem quando há texto decodificado', () => {
        render(<Decoder outputValue="testenovo" />);

        const image = screen.queryByAltText('Decodificador de Texto');
        expect(image).not.toBeInTheDocument();
    });
    
    test('Deve renderizar o input com o seu placeholder quando não há texto decodificado', () => {
        render(<Decoder outputValue="" />);
        
        const inputPlaceholder = screen.getByPlaceholderText('Digite um texto que você deseja criptografar ou descriptografar.');
        expect(inputPlaceholder).toBeInTheDocument();
    });

    test('Deve renderizar o input com o texto criptografado', () => {
        render(<Decoder outputValue="uftufopwp" />);
        
        const input = screen.getByDisplayValue('uftufopwp');
        expect(input).toBeInTheDocument();
    });
    
    test('Deve renderizar o input com o texto descriptografado', () => {
        render(<Decoder outputValue="testenovo" />);
        
        const input = screen.getByDisplayValue('testenovo');
        expect(input).toBeInTheDocument();
    });

    test('Deve renderizar o botão copiar', () => {
        render(<Decoder />);

        const buttonCopiar = screen.getByRole('button', { name: /copiar/i });
        expect(buttonCopiar).toBeInTheDocument();
    });
    
    test('Deve copiar o texto criptografado', async () => {
        // Mock da API clipboard
        Object.assign(navigator, {
            clipboard: {
                writeText: jest.fn().mockImplementation(() => Promise.resolve())
            }
        });
    
        render(<Decoder outputValue="uftufopwp" />);
    
        fireEvent.click(screen.getByText('Copiar'));
    
        await waitFor(() => {
            expect(navigator.clipboard.writeText).toHaveBeenCalledWith('uftufopwp');
            expect(screen.getByText('Texto copiado com sucesso!')).toBeInTheDocument();
        });
    
        await waitFor(() => {
            expect(screen.queryByText('Texto copiado com sucesso!')).not.toBeInTheDocument();
        }, { timeout: 3500 });
    });

    test('Deve copiar o texto descriptografado', async () => {
        // Mock da API clipboard
        Object.assign(navigator, {
            clipboard: {
                writeText: jest.fn().mockImplementation(() => Promise.resolve())
            }
        });
    
        render(<Decoder outputValue="testenovo" />);
            
        fireEvent.click(screen.getByText('Copiar'));
    
        await waitFor(() => {
            expect(navigator.clipboard.writeText).toHaveBeenCalledWith('testenovo');
            expect(screen.getByText('Texto copiado com sucesso!')).toBeInTheDocument();
        });
    
        await waitFor(() => {
            expect(screen.queryByText('Texto copiado com sucesso!')).not.toBeInTheDocument();
        }, { timeout: 3500 });
    });

    test('Deve exibir uma mensagem de erro ao falhar em copiar o texto', async () => {
        // Mock da API clipboard para simular erro
        Object.assign(navigator, {
            clipboard: {
                writeText: jest.fn().mockImplementation(() => Promise.reject(new Error('Erro ao copiar')))
            }
        });

        render(<Decoder outputValue="testenovo" />);

        fireEvent.click(screen.getByText('Copiar'));

        await waitFor(() => {
            expect(screen.getByText('Ops, ocorreu um erro ao copiar o texto!')).toBeInTheDocument();
        });
    });
});
