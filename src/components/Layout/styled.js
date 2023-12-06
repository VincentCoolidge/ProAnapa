import styled from "styled-components";

import { screenLt_1650 } from "@globalStyle";

export const Main = styled.main`
  margin: 0 auto;
  max-width: 1587px;
  color: #18161a;

  ${screenLt_1650} {
    max-width: 100%;
  }
`;
