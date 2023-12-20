import styled from "styled-components";
import {
  screenLt_640,
  screenLt_768,
  screenLt_1024,
  screenLt_1366,
} from "@globalStyle";

export const Container = styled.div`
  ${screenLt_1366} {
    padding: 0 20px;
  }
`;

export const Box = styled.div`
  width: 700px;
  height: 800px;
  overflow: hidden;
  position: relative;

  ${screenLt_1366} {
    margin: 0 auto;
    height: 900px;
  }

  ${screenLt_1024} {
    height: 600px;
    width: 100%;
    display: flex;
  }

  ${screenLt_640} {
    width: 100%;
    height: 700px;
  }
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;

  ${screenLt_1024} {
    width: 500px;
    margin: 0 auto;
  }

  ${screenLt_640} {
    width: 100%;
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

export const Block = styled.div`
  ${screenLt_768} {
    margin: 0 auto;
  }
`;
