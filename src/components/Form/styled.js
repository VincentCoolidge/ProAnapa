import styled from "styled-components";
import { screenLt_1587, screenLt_1366, screenLt_1024 } from "@globalStyle";

import InputMask from "react-input-mask";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;

  ${(props) =>
    props.isLoading &&
    `pointer-events: none;  
   `};

  ${screenLt_1366} {
    flex-direction: column;
  }
`;

export const DescriptionVisible = styled.span`
  display: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;

  ${screenLt_1366} {
    display: block;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 15px;
  padding: 40px 0 70px;

  ${screenLt_1366} {
    padding: 15px 0 25px;
  }

  ${screenLt_1024} {
    flex-direction: column;
  }
`;

export const Description = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  margin-top: 20px;

  ${screenLt_1587} {
    margin-top: 0px;
  }

  ${screenLt_1366} {
    display: none;
  }
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
  width: 20%;

  ${screenLt_1587} {
    width: 30%;
  }

  ${screenLt_1024} {
    width: 100%;
  }
`;

export const BoxPhone = styled.div`
  width: 20%;

  ${screenLt_1587} {
    width: 30%;
  }

  ${screenLt_1024} {
    width: 100%;
  }
`;

export const BoxName = styled.div`
  width: 20%;

  ${screenLt_1587} {
    width: 30%;
  }

  ${screenLt_1024} {
    width: 100%;
  }
`;
