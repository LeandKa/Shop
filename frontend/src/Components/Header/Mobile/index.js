import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';

export default function Mobile({ children, color }) {
    return <Container color={color}>{children}</Container>;
}

Mobile.propTypes = {
    children: PropTypes.element.isRequired,
    color: PropTypes.string.isRequired,
};
