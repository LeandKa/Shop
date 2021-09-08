import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCartQty } from '~/Store/modules/Cart/action';
import Burger from '../Layout/Burger';
import CartIcon from './CartIcon';
import Mobile from './Mobile';
import SearchBar from './SearchBar';
import { Container, Options, TextLogo } from './style';

export default function Header() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartQty());
    }, []);

    return (
        <Container>
            <Burger />
            <TextLogo to="/">LogoTest</TextLogo>
            <Options>
                <SearchBar />
                <CartIcon />
            </Options>
            <Mobile>
                <CartIcon />
            </Mobile>
        </Container>
    );
}
