import styled from "styled-components";
import {
  screenLt_640,
  screenLt_768,
  screenLt_1024,
  screenLt_1366,
  screenLt_1650,
} from "@globalStyle";

export const Section = styled.section`
  ${screenLt_1650} {
    padding: 0 20px;
  }
`;

export const Desc = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  width: 1046px;
  padding: 25px 0 10px;

  ${screenLt_1366} {
    width: 100%;
    padding: 15px 0 10px;
  }

  ${screenLt_1024} {
    font-size: 15px;
    padding: 10px 0 10px;
  }

  ${screenLt_640} {
    font-size: 14px;
    padding: 30px 0 5px;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 42px;
  padding-top: 10px;

  ${screenLt_768} {
    padding: 5px 0 10px;
    gap: 15px;
  }

  ${screenLt_640} {
    padding: 10px 0 20px;
    flex-direction: column;
    gap: 30px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CEOImg = styled.img`
  padding-bottom: 10px;
`;

export const CEOTitle = styled.span`
  color: #18161a;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  padding-bottom: 4px;

  ${screenLt_768} {
    font-size: 15px;
    padding-bottom: 2px;
  }

  ${screenLt_640} {
    font-size: 16px;
    padding-bottom: 5px;
  }
`;

export const CEODesc = styled.span`
  color: #18161a;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  padding-top: 4px;

  ${screenLt_768} {
    font-size: 15px;
    padding-top: 2px;
  }

  ${screenLt_640} {
    font-size: 16px;
    padding-top: 0px;
  }
`;
