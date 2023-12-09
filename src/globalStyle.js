import "the-new-css-reset/css/reset.css";
import { createGlobalStyle } from "styled-components";

export const screenLt_1650 = `@media
  only screen and
  (max-width: 1649px)
`;

export const screenLt_1587 = `@media
  only screen and
  (max-width: 1586px)
`;

export const screenLt_1366 = `@media
  only screen and
  (max-width: 1365px)
`;

export const screenLt_1024 = `@media
  only screen and
  (max-width: 1023px)
`;

export const screenLt_768 = `@media
  only screen and
  (max-width: 767px)
`;

export const screenLt_640 = `@media
  only screen and
  (max-width: 639px)
`;

export const screenLt_480 = `@media
  only screen and
  (max-width: 479px)
`;

export const screenLt_360 = `@media
  only screen and
  (max-width: 359px)
`;

const GlobalStyle = createGlobalStyle`
* {
    font-family: Nunito Sans;
}

  .app {
    background-color: #fffdf9;
  }
  
  a {
    text-decoration: none;
  }
    
  .heading_1 {
    font-size: 90px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;

    ${screenLt_480} {
      font-size: 40px;
    }

    ${screenLt_360} {
    }
  }
  
  .heading_1_circle {
    color: #fdbd21;
    font-size: 35px;
    position: relative;
    top: 3px;

    ${screenLt_480} {
      font-size: 18px;
      top: 2.2px;
    }

    ${screenLt_360} {
    }
  }
  
  .heading_3 {
    font-size: 40px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;

    ${screenLt_480} {
      font-size: 30px;
    }

    ${screenLt_360} {
    }
  }
  
  .heading_3_circle {
    color: #fdbd21;
    font-size: 17px;
    position: relative;
    top: 3px;
    left: 3px;

    ${screenLt_480} {
    top: 2.5px;
    left: 1.5px;
    }
  }
  
`;

export default GlobalStyle;
