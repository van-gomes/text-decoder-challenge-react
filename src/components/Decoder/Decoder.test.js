import { render, screen } from '@testing-library/react';
import { Decoder } from './Decoder';

describe('Decoder Component', () => {
    test('Deve renderizar o título padrão quando não há texto decodificado', () => {
        render(<Decoder outputValue="" />);

        const title = screen.getByRole('heading');
        expect(title).toHaveTextContent('Nenhuma mensagem encontrada');
    });

    test('Deve renderizar o input com o seu placeholder quando não há texto decodificado', () => {
        render(<Decoder outputValue="" />);
        
        const inputPlaceholder = screen.getByPlaceholderText('Digite um texto que você deseja criptografar ou descriptografar.');
        expect(inputPlaceholder).toBeInTheDocument();
    });
});
