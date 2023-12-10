import styled from "styled-components";

import {
  screenLt_640,
  screenLt_768,
  screenLt_1650
} from "@globalStyle";

export const Pre = styled.div`
  height: 160px;

  ${screenLt_1650} {
    height: 110px;
  }

  ${screenLt_768} {
    height: 60px;
  }

  ${screenLt_640} {
    height: 80px;
  }
`;
