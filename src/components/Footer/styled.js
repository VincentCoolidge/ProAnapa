import styled from "styled-components";

import { screenLt_360 } from "@globalStyle";

export const FooterRoot = styled.footer`
  background-color: #18161a;
  color: #fffcf7;
`;

export const Container = styled.div`
  max-width: 1587px;
  margin: 0 auto;
`;

export const BoxInfo = styled.div`
  display: flex;
  gap: 100px;

  a,
  span {
    color: #fffcf7;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    ${screenLt_360} {
      font-size: 14px;
    }
  }

  ${screenLt_360} {
    gap: 30px;
    flex-direction: column;
  }
`;

export const AddressInfo = styled.address`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AddressTel = styled.a`
  font-weight: 800;
`;

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const LegalAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FormBox = styled.div`
  border-bottom: 1px solid #898883;
  padding: 50px 65px 40px;

  ${screenLt_360} {
    padding: 35px 20px 40px;
  }
`;

export const ContactsBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 65px 35px;

  ${screenLt_360} {
    padding: 30px 20px;
    flex-direction: column;
  }
`;

export const LogoBox = styled.div`
  ${screenLt_360} {
    margin-bottom: 20px;
  }
`;
