import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Ul, LiA } from './style';

export default function BurgerNav({ open }) {
    useEffect(() => {}, []);

    return (
        <Ul open={open}>
            <li>
                <LiA href="https://github.com/LeandKa">GitHub</LiA>
            </li>
            <li>
                <LiA href="/">Home</LiA>
            </li>
        </Ul>
    );
}

BurgerNav.propTypes = {
    open: PropTypes.bool.isRequired,
};
