import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Icon, Text } from './style';

export default function BackButton() {
    const history = useHistory();

    return (
        <Container onClick={() => history.goBack()}>
            <Icon />
            <Text>Voltar</Text>
        </Container>
    );
}
