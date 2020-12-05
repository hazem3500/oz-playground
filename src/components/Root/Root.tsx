import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import theme from '../../theme';

export default function Root({ children }) {
    return (
        <ChakraProvider theme={theme} resetCSS>
            {children}
        </ChakraProvider>
    );
}
