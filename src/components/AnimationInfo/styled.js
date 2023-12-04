import styled from "styled-components";
import background from "@assets/animationInfo_bg.png";

export const Container = styled.div`
  height: 824px;
  background-color: #fffdf9;
  position: relative;
  z-index: 10;

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
  }

  &:hover::before {
    width: 100%;
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
`;

export const BoxHeading1 = styled.div`
  display: flex;
`;

export const Desc = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #18161a;
  width: 80%;
  margin: 29px 0 19px;
`;

export const BoxSocialLinks = styled.div`
  position: absolute;
  right: 23px;
  bottom: 12px;
`;
