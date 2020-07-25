import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing:border-box;
    };
    body{
        font-family: 'Press Start 2P';
    };
    button{
        font-family: 'Press Start 2P';
    }
`;

export default GlobalStyles;
