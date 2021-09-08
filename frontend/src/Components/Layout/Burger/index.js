import React, { useState } from 'react';
import BurgerNav from '../BurgerNav';
import { BurgerStyle } from './style';

export default function Burger() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <BurgerStyle open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </BurgerStyle>
            <BurgerNav open={open} />
        </>
    );
}
