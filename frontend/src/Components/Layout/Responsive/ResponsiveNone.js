import React from 'react';
import PropTypes from 'prop-types';
import { ContainerNone } from './style';

export default function ResponsiveNone({ children }) {
    return <ContainerNone>{children}</ContainerNone>;
}

ResponsiveNone.propTypes = {
    children: PropTypes.element.isRequired,
};
