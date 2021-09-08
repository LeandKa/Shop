import React from 'react';
import PropTypes from 'prop-types';
import { ContainerShow } from './style';

export default function ResponsiveShow({ children, color }) {
    return <ContainerShow color={color}>{children}</ContainerShow>;
}

ResponsiveShow.propTypes = {
    children: PropTypes.element.isRequired,
    color: PropTypes.string.isRequired,
};
