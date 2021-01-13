import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        padding: 20px 80px;

        @media screen and (max-width: 800px) {
            padding: 10px;
            font-size: 14px
        }
    }

    a { 
        text-decoration: none;
        color: rgb(11, 11, 11);
    }
`