import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { MoralisProvider } from 'react-moralis';


const theme = extendTheme({
  config: {
    initialColorMode: 'dark' ,
  },
});

const appId = 'RQX9IMYIMZBJWZX41J8nQW4LKBQCga9HVQM4EC8s';
const serverUrl = 'https://y21dwudfcvlu.usemoralis.com:2053/server';

ReactDOM.render(
  <React.StrictMode>
  <MoralisProvider appId={appId} serverUrl={serverUrl}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);