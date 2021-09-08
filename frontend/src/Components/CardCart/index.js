import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { addQty, getCarts } from '~/Store/modules/Cart/action';
import {
    CardCartDetails,
    CardCartImg,
    Container,
    DisplayFlex,
    CartText,
    Icon,
    CartPrice,
} from './style';

export default function CardCart({ name, price, url, id, OnClick }) {
    const [qty, setQty] = React.useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cartsItens'));
        cart.forEach((element) => {
            if (element.product.id === id) {
                setQty(element.qty);
            }
        });
    }, []);

    const handleChange = (event) => {
        setQty(event.target.value);
        dispatch(addQty(id, event.target.value));
        dispatch(getCarts());
    };

    const Number = () => {
        const newValor = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(price);
        return <CartPrice>{newValor}</CartPrice>;
    };

    return (
        <Container>
            <CardCartImg src={url} />
            <CardCartDetails>
                <DisplayFlex onClick={() => OnClick(id)}>
                    <CartText>{name}</CartText>
                    <Icon />
                </DisplayFlex>
                <p>
                    Aqui vem um texto descritivo do produto, esta caixa de texto
                    servirá apenas de exemplo para que simule algum texto que
                    venha a ser inserido nesse campo, descrevendo tal produto.
                </p>
                <DisplayFlex>
                    <Select value={qty} onChange={handleChange}>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                    </Select>
                    <Number />
                </DisplayFlex>
            </CardCartDetails>
        </Container>
    );
}

CardCart.propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    OnClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};
