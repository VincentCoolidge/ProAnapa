import styled from "styled-components";

import { screenLt_1650 } from "@globalStyle";
import { screenLt_360 } from "../../globalStyle";

export const Pre = styled.div`
  height: 160px;

  ${screenLt_1650} {
    height: 110px;
  }

  ${screenLt_360} {
    height: 80px;
  }
`;
