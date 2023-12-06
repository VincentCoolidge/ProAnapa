import styled from "styled-components";
import { screenLt_360 } from "@globalStyle";

export const Container = styled.div`
  ${screenLt_360} {
    padding: 0 20px;
  }
`;

export const Box = styled.div`
  width: 700px;
  height: 800px;
  overflow: hidden;
  position: relative;

  ${screenLt_360} {
    width: 100%;
    height: 700px;
  }
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;

  ${screenLt_360} {
  }
`;

export const Link = styled.a`
  box-sizing: border-box;
  text-decoration: none;
  color: #b3b3b3;
  font-size: 10px;
  font-family: YS Text, sans-serif;
  padding: 0 20px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
  left: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  max-height: 14px;
  white-space: nowrap;
  padding: 0 16px;
  box-sizing: border-box;
`;
