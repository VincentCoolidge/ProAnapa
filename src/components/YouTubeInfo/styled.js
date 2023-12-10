import styled from "styled-components";

import {
  screenLt_360,
  screenLt_480,
  screenLt_640,
  screenLt_768,
} from "@globalStyle";

export const Section = styled.div`
  ${screenLt_768} {
    padding: 0 20px;
  }
`;

export const Box = styled.div`
  padding-top: 25px;
  display: flex;
  gap: 42px;
  justify-content: space-around;

  ${screenLt_768} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }

  ${screenLt_640} {
    flex-direction: column;
  }

  ${screenLt_480} {
  }

  ${screenLt_360} {
  }
`;

export const Video = styled.iframe`
  height: 455px;
  width: 502px;

  ${screenLt_768} {
    width: 45%;
    height: 230px;
  }

  ${screenLt_640} {
    width: 100%;
    height: 355px;
  }

  ${screenLt_480} {
    height: 275px;
  }

  ${screenLt_360} {
  }
`;
