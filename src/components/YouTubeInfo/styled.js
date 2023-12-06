import styled from "styled-components";

import { screenLt_360 } from "@globalStyle";

export const Section = styled.div`
  ${screenLt_360} {
    padding: 0 20px;
  }
`;

export const Box = styled.div`
  padding-top: 25px;
  display: flex;
  gap: 42px;
  justify-content: space-around;

  ${screenLt_360} {
    padding-top: 30px;
    flex-direction: column;
    gap: 30px;
  }
`;

export const Video = styled.iframe`
  height: 455px;
  width: 502px;

  ${screenLt_360} {
    width: 100%;
    height: 305px;
  }
`;
