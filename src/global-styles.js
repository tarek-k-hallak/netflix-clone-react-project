import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
        html, body {
            font-family:'Helvtica Neue' , Arial, Helvetica, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            background-color: #000000;
            color:gray;
            columns: #333333;
            font-size: 16px;
            margin: 0;
        }
        *{
            margin:0;
            padding:0;
        }
`;