import styled from "styled-components";

import { screenLt_360, screenLt_480, screenLt_1650 } from "@globalStyle";

export const Pre = styled.div`
  height: 160px;

  ${screenLt_1650} {
    height: 110px;
  }

  ${screenLt_480} {
    height: 80px;
  }

  ${screenLt_360} {
  }
`;
