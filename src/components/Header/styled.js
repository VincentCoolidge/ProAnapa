import styled from "styled-components";

import {
  screenLt_1650,
  screenLt_1587,
  screenLt_1366,
  screenLt_1024,
} from "@globalStyle";

export const Container = styled.header`
  background-color: #18161a;
  height: 76px;
`;

export const Navigation = styled.nav`
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

export const LaptopScreenNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  ${screenLt_1024} {
    display: none;
  }
`;

export const MobileScreenNavigation = styled.div`
  display: none;

  ${screenLt_1024} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
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

export const Element = styled.li`
  ${screenLt_1024} {
    > a {
      color: #18161a;
      font-size: 18px;
      font-weight: 600;
      text-shadow: none;
    }
  }
`;

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

export const LogoMobileBox = styled.div`
  text-align: center;
`;

export const Burger = styled.img`
  cursor: pointer;
`;

export const Phone = styled.img`
  cursor: pointer;
`;

export const BurgerMenu = styled.div`
  background-color: #fff;
  z-index: 1000;
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const ContainerBurger = styled.div`
  padding: 20px 20px 25px 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BurgerHeader = styled.div`
  height: 50px;
  display: flex;
  justify-content: end;
`;

export const BurgerList = styled.ul`
  gap: 12px;
  display: flex;
  flex-direction: column;
`;

export const BurgerFooter = styled.div``;
