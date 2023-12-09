import styled from "styled-components";
import { screenLt_360, screenLt_480 } from "@globalStyle";

export const Section = styled.section`
  ${screenLt_480} {
    padding: 0 20px;
  }

  ${screenLt_360} {
  }
`;

export const Desc = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  width: 1046px;
  padding: 25px 0 10px;

  ${screenLt_480} {
    width: 100%;
    font-size: 14px;
    padding: 30px 0 10px;
  }

  ${screenLt_360} {
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 42px;
  padding-top: 10px;

  ${screenLt_480} {
    padding: 10px 0 20px;
    flex-direction: column;
    gap: 30px;
  }

  ${screenLt_360} {
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CEOImg = styled.img`
  padding-bottom: 10px;

  ${screenLt_360} {
    // height: 310px;
  }
`;

export const CEOTitle = styled.span`
  color: #18161a;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  padding-bottom: 4px;

  ${screenLt_480} {
    padding-bottom: 5px;
  }

  ${screenLt_360} {
  }
`;

export const CEODesc = styled.span`
  color: #18161a;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  padding-top: 4px;

  ${screenLt_480} {
    padding-top: 0px;
  }

  ${screenLt_360} {
  }
`;
