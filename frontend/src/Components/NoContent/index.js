import React from 'react';
import { Container, Content, Button } from './style';

function NoContent() {
    return (
        <Container>
            <Content>
                <h1>SEU CARRINHO ESTÁ VAZIO</h1>
                <p>
                    Para inserir produtos em seu carrinho, basta navegar pela
                    Loja Virtual ou utilizar a busca acima, e ao encontrar os
                    produtos desejados, clique no botão
                </p>
                <Button to="/">Voltar a navegar</Button>
            </Content>
        </Container>
    );
}

export default NoContent;
