import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import myFont from '../static/fonts/PIXEL.TTF';

const GlobalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing:border-box;
    };
    @font-face {
        font-family: "PIXEL";
        src: url(${myFont});
    }
    body{
        font-family: DungGeunMo, 'Press Start 2P';
    };
    button{
        font-family: DungGeunMo, 'Press Start 2P';
    }
`;

export default GlobalStyles;
