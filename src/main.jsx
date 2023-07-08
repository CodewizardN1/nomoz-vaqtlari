import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
        <ChakraProvider>
            <App />
        </ChakraProvider>
)