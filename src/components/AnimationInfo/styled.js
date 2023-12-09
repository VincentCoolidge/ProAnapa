import styled from "styled-components";
import background from "@assets/animationInfo_bg.png";

import { screenLt_360, screenLt_480 } from "@globalStyle";

export const Container = styled.div`
  height: 824px;
  background-color: #fffdf9;
  position: relative;
  z-index: 10;

  ${screenLt_480} {
    height: 100vh;
  }

  ${screenLt_360} {
  }

  &:before {
    content: "";
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    height: 824px;
    position: absolute;
    width: 35%;
    position: absolute;
    -webkit-transition: width 1s ease-out;
    -moz-transition: width 1s ease-out;
    -o-transition: width 1s ease-out;
    transition: width 1s ease-out;

    ${screenLt_480} {
      height: 100vh;
      width: 100%;
      animation-play-state: paused;
      background-position: center;
    }

    ${screenLt_360} {
    }
  }

  &:hover::before {
    width: 100%;

    ${screenLt_360} {
    }
  }
`;

export const Box = styled.div`
  z-index: 1;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 47%;
  top: 169px;
  right: 150px;

  ${screenLt_480} {
    width: 100%;
    right: 0px;
    top: 25vh;
  }

  ${screenLt_360} {
  }
`;

export const BoxHeading1 = styled.div`
  display: flex;

  ${screenLt_480} {
    padding-left: 20px;
  }

  ${screenLt_360} {
  }
`;

export const Heading1 = styled.h1`
  ${screenLt_360} {
  }
`;

export const Heading3 = styled.h3`
  ${screenLt_480} {
    font-size: 20px;
    width: 90%;
    font-weight: 700;
    line-height: 120%;
    padding-top: 10px;
    padding-left: 20px;
  }

  ${screenLt_360} {
    width: 100%;
  }
`;

export const Desc = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #18161a;
  width: 80%;
  margin: 29px 0 19px;

  ${screenLt_480} {
    width: 80%;
    padding-left: 20px;
    font-size: 14px;
    margin: 10px 0 0;
  }

  ${screenLt_360} {
    width: 100%;
  }
`;

export const BoxSocialLinks = styled.div`
  position: absolute;
  right: 23px;
  bottom: 12px;

  ${screenLt_480} {
    display: none;
  }

  ${screenLt_360} {
  }
`;

export const BoxButton = styled.div`
  z-index: 1;
  position: relative;

  ${screenLt_480} {
    margin-top: 25px;
    padding-left: 20px;
  }

  ${screenLt_360} {
    margin-top: 25px;
    padding-left: 20px;
  }
`;
