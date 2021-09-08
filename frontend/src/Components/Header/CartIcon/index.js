import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Icon, QtyDiv } from './style';

export default function CartIcon() {
    const { cartQty } = useSelector((state) => state.cart);

    return (
        <Container to="/cart">
            <Icon />
            <QtyDiv>{cartQty ? <span>{cartQty}</span> : <span>0</span>}</QtyDiv>
        </Container>
    );
}
