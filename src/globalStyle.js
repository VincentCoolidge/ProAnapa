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
  }
  
  .heading_1_circle {
    color: #fdbd21;
    font-size: 35px;
    position: relative;
    top: 3px;
  }
  
  .heading_3 {
    font-size: 40px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;

    ${screenLt_360} {
      font-size: 30px;
    }
  }
  
  .heading_3_circle {
    color: #fdbd21;
    font-size: 17px;
    position: relative;
    top: 3px;
    left: 3px;
  }
  
`;

export default GlobalStyle;
