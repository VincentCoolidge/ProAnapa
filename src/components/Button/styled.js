import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Button = styled.button`
  height: 63px;
  width: 244px;
  cursor: pointer;
  background: linear-gradient(135deg, #ffd901 0%, #fdbd21 95.26%);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
  color: ${(props) => props.color};
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  animation: ${spinAnimation} 1s linear infinite;
`;
