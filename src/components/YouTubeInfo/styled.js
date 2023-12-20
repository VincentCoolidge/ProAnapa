import styled from "styled-components";

import {
  screenLt_480,
  screenLt_640,
  screenLt_768,
  screenLt_1024,
  screenLt_1366,
  screenLt_1650,
} from "@globalStyle";

export const Section = styled.div`
  ${screenLt_1650} {
    padding: 0 20px;
  }
`;

export const Box = styled.div`
  padding-top: 25px;
  display: flex;
  gap: 42px;
  justify-content: space-around;

  ${screenLt_1366} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }

  ${screenLt_640} {
    flex-direction: column;
  }
`;

export const Video = styled.iframe`
  height: 455px;
  width: 502px;

  ${screenLt_1366} {
    width: 47%;
    height: 350px;
  }

  ${screenLt_1024} {
    width: 70%;
    height: 350px;
  }

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
`;
