import styled from "styled-components";
import background from "@assets/animationInfo_bg.png";

import {
  screenLt_360,
  screenLt_480,
  screenLt_640,
  screenLt_768,
  screenLt_1024,
} from "@globalStyle";

export const Container = styled.div`
  height: 824px;
  background-color: #fffdf9;
  position: relative;
  z-index: 10;

  ${screenLt_768} {
    height: 700px;
  }

  ${screenLt_640} {
    height: 100vh;
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

    ${screenLt_1024} {
      width: 100%;
      animation-play-state: paused;
      background-position: center;
    }

    ${screenLt_768} {
      height: 700px;
      width: 100%;
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

  ${screenLt_1024} {
    width: 90%;
    right: 58px;
  }

  ${screenLt_768} {
    width: 65%;
    right: 243px;
  }

  ${screenLt_640} {
    width: 100%;
    right: 0px;
    top: 30%;
  }

  ${screenLt_480} {
    top: 15vh;
  }

  ${screenLt_360} {
    top: 25vh;
  }
`;

export const BoxHeading1 = styled.div`
  display: flex;

  ${screenLt_640} {
    padding-left: 20px;
  }
`;

export const Heading1 = styled.h1``;

export const Heading3 = styled.h3`
  ${screenLt_768} {
    font-size: 20px;
    font-weight: 700;
    line-height: 120%;
  }

  ${screenLt_640} {
    width: 80%;
    padding-top: 10px;
    padding-left: 20px;
  }

  ${screenLt_480} {
    width: 90%;
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

  ${screenLt_640} {
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

  ${screenLt_1024} {
    display: none;
  }
`;

export const BoxButton = styled.div`
  z-index: 1;
  position: relative;

  ${screenLt_640} {
    margin-top: 25px;
    padding-left: 20px;
  }
`;
