import React from 'react';
import PropTypes from 'prop-types';
import { CardImg, CardText, Container, CardPrice } from './style';

export default function Card({ name, price, url, id }) {
    const Number = () => {
        const newValor = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(price);
        return <CardPrice>{newValor}</CardPrice>;
    };

    return (
        <Container to={`/product/${id}`}>
            <CardImg src={url} />
            <CardText>{name}</CardText>
            <Number />
        </Container>
    );
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};
