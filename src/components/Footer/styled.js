import styled from "styled-components";

import {
  screenLt_360,
  screenLt_480,
  screenLt_640,
  screenLt_768,
} from "@globalStyle";

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

    ${screenLt_768} {
      font-size: 14px;
    }

    ${screenLt_640} {
    }

    ${screenLt_480} {
    }

    ${screenLt_360} {
    }
  }

  ${screenLt_768} {
    gap: 30px;
  }

  ${screenLt_640} {
    flex-direction: column;
  }

  ${screenLt_480} {
  }

  ${screenLt_360} {
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

  ${screenLt_768} {
    padding: 35px 20px 40px;
  }

  ${screenLt_640} {
    padding: 35px 20px 40px;
  }

  ${screenLt_480} {
  }

  ${screenLt_360} {
  }
`;

export const ContactsBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 65px 35px;

  ${screenLt_768} {
    padding: 30px 20px;
    flex-direction: column;
  }

  ${screenLt_640} {
    padding: 30px 20px;
    flex-direction: column;
  }

  ${screenLt_480} {
  }

  ${screenLt_360} {
  }
`;

export const LogoBox = styled.div`
  ${screenLt_768} {
    margin-bottom: 20px;
  }

  ${screenLt_640} {
    margin-bottom: 20px;
  }

  ${screenLt_480} {
  }

  ${screenLt_360} {
  }
`;
