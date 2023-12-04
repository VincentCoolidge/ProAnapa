import styled from "styled-components";

import { screenLt_1650, screenLt_1587, screenLt_1366 } from "@globalStyle";

export const Container = styled.header`
  background-color: #18161a;
  height: 76px;
`;

export const Navigation = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 100%;
  max-width: 1587px;
  margin: 0 auto;

  ${screenLt_1650} {
    max-width: 100%;
    width: 100%;
    padding: 0 40px;
  }

  ${screenLt_1587} {
    padding: 0 20px;
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  height: 100%;
  gap: 30px;

  ${screenLt_1587} {
    gap: 20px;
  }

  ${screenLt_1366} {
    gap: 12px;
  }
`;

export const Element = styled.li``;

export const Link = styled.a`
  color: #fffdf9;
  font-family: Nunito Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    color: #fdbd21;
  }

  ${screenLt_1366} {
    font-size: 11px;
  }
`;

export const ElementPhone = styled.div``;

export const ElementPhoneLink = styled.a`
  color: #fffdf9;
  font-family: Nunito Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  ${screenLt_1366} {
    font-size: 13px;
  }
`;
