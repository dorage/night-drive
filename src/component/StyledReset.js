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
        font-family: DungGeunMo;
    };
    button{
        font-family: DungGeunMo;
    }
`;

export default GlobalStyles;
