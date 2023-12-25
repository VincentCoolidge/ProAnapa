import styled from "styled-components";
import { screenLt_768 } from "@globalStyle";

import InputMask from "react-input-mask";

export const Overlay = styled.div`
  align-items: center;
  backdrop-filter: blur(8px);
  background-color: rgba(15, 23, 42, 0.6);
  display: flex;
  inset: 0;
  position: fixed;
  z-index: 2000;
  overflow-y: hidden;
`;

export const Container = styled.div`
  background: #fff;
  height: 100%;
  margin: 0 auto;
  max-height: 530px;
  max-width: 687px;
  width: 100%;
  padding: 50px 60px 45px;

  ${screenLt_768} {
    max-width: 100%;
    margin: 0 10px;
  }
`;

export const Form = styled.form``;

export const Heading = styled.h3`
  color: #18161a;
  font-size: 40px;
  font-weight: 600;
`;

export const Description = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  margin-top: 14px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  height: 62px;
  font-size: 16px;
  font-weight: 400;
  padding: 21px 20px 19px;
  width: 100%;
  border: 1px solid ${(props) => (props.isError ? "red" : "#cdcdcd")};
  cursor: pointer;

  &::-webkit-input-placeholder {
    color: #7a7f86;
  }

  &::-moz-placeholder {
    color: #7a7f86;
    opacity: 1;
  }

  &::-moz-placeholder {
    color: #7a7f86;
    opacity: 1;
  }

  &::-ms-input-placeholder {
    color: #7a7f86;
  }

  &::-ms-input-placeholder {
    color: #7a7f86;
  }

  &::placeholder {
    color: #7a7f86;
  }
`;

export const InputPhone = styled(InputMask)`
  height: 62px;
  font-size: 16px;
  font-weight: 400;
  padding: 21px 20px 19px;
  width: 100%;
  cursor: pointer;

  border: 1px solid ${(props) => (props.isError ? "red" : "#cdcdcd")};

  &::-webkit-input-placeholder {
    color: #7a7f86;
  }

  &::-moz-placeholder {
    color: #7a7f86;
    opacity: 1;
  }

  &::-moz-placeholder {
    color: #7a7f86;
    opacity: 1;
  }

  &::-ms-input-placeholder {
    color: #7a7f86;
  }

  &::-ms-input-placeholder {
    color: #7a7f86;
  }

  &::placeholder {
    color: #7a7f86;
  }
`;

export const BoxEmail = styled.div`
  margin: 15px 0 0;
`;

export const BoxPhone = styled.div``;

export const BoxName = styled.div`
  margin: 15px 0;
`;

export const PrivacyPolicy = styled.div`
  color: #18161a;
  font-family: Nunito Sans;
  font-size: 13px;
  font-weight: 400;
  margin: 10px 0 18px;
`;

export const Link = styled.span`
  text-decoration-line: underline;
  cursor: pointer;
`;

export const Close = styled.img`
  cursor: pointer;
  position: absolute;
  right: -30px;
  top: -15px;
`;
