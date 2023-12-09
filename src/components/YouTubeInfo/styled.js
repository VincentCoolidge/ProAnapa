import styled from "styled-components";

import { screenLt_360, screenLt_480 } from "@globalStyle";

export const Section = styled.div`
  ${screenLt_480} {
    padding: 0 20px;
  }

  ${screenLt_360} {
  }
`;

export const Box = styled.div`
  padding-top: 25px;
  display: flex;
  gap: 42px;
  justify-content: space-around;

  ${screenLt_480} {
    padding-top: 30px;
    flex-direction: column;
    gap: 30px;
  }

  ${screenLt_360} {
  }
`;

export const Video = styled.iframe`
  height: 455px;
  width: 502px;

  ${screenLt_480} {
    width: 100%;
    height: 305px;
  }

  ${screenLt_360} {
  }
`;
