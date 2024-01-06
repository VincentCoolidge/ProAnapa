import styled from "styled-components";

import { screenLt_1366 } from "@globalStyle";

export const Container = styled.div``;

export const Link = styled.a`
  ${({ data_is_burger_menu }) =>
    data_is_burger_menu === "true" ? `color: #18161A;` : `color: #fffdf9;`}
  font-family: Nunito Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  position: relative;

  ${screenLt_1366} {
    font-size: 18px;
  }
`;

export const Circle = styled.div`
  background: #fdbd21;
  border-radius: 50%;
  bottom: 8px;
  height: 5px;
  position: absolute;
  right: -7px;
  width: 5px;

  ${screenLt_1366} {
    height: 4px;
    width: 4px;
    bottom: 6.5px;
    right: -5.5px;
  }
`;
