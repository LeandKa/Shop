import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    font-family: 'Saira', sans-serif;
    box-sizing: border-box;
    font-style:normal;
  }
  *:focus{
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {

    background-color: rgba(238, 238, 238, 1);
    font-family: 'Saira', sans-serif;
  }
  a {
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #7d40e7;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #4409b4;
  }
`;

const ThemeProps = {
    colors: {
        white: 'white',
        darkgrey: '#41414d',
        lightgrey: '#737380',
        blue: '#115d8c',
    },
};

export default function Theme({ children }) {
    return (
        <ThemeProvider theme={ThemeProps}>
            {children}
            <GlobalStyle />
        </ThemeProvider>
    );
}

Theme.propTypes = {
    children: PropTypes.element.isRequired,
};
