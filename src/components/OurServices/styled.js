import styled from "styled-components";
import {
  screenLt_360,
  screenLt_480,
  screenLt_640,
  screenLt_768,
  screenLt_1024,
  screenLt_1366,
  screenLt_1650,
} from "@globalStyle";

import Services01 from "@assets/ourServices/services-01.jpg";
import Services02 from "@assets/ourServices/services-02.jpg";
import Services03 from "@assets/ourServices/services-03.jpg";
import Services04 from "@assets/ourServices/services-04.jpg";
import Services05 from "@assets/ourServices/services-05.jpg";
import Services06 from "@assets/ourServices/services-06.jpg";
import Services07 from "@assets/ourServices/services-07.jpg";
import Services08 from "@assets/ourServices/services-08.jpg";

import svgArrow from "@assets/arrow.svg";
import svgArrowHover from "@assets/arrowHover.svg";

const handleImgType = (id) => {
  switch (id) {
    case 1:
      return `background-image: url(${Services01})`;
    case 2:
      return `background-image: url(${Services02})`;
    case 3:
      return `background-image: url(${Services03})`;
    case 4:
      return `background-image: url(${Services04})`;
    case 5:
      return `background-image: url(${Services05})`;
    case 6:
      return `background-image: url(${Services06})`;
    case 7:
      return `background-image: url(${Services07})`;
    case 8:
      return `background-image: url(${Services08})`;
    default:
      return "";
  }
};

export const Container = styled.div`
  ${screenLt_1650} {
    padding: 0 20px;
  }
`;

export const Grid = styled.div`
  padding: 10px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  ${screenLt_1650} {
    justify-content: space-between;
    gap: 30px;
  }

  ${screenLt_768} {
    padding-top: 5px;
    gap: 15px;
    justify-content: space-between;
  }

  ${screenLt_640} {
    padding-top: 0px;
    gap: 20px;
  }
`;

export const BoxInfoFirst = styled.div`
  width: 503px;
  height: 546px;
  padding-top: 156px;

  ${screenLt_1650} {
    width: 31%;
  }

  ${screenLt_1366} {
    width: 47%;
  }

  ${screenLt_1024} {
    padding-top: 40px;
    height: 100%;
  }

  ${screenLt_768} {
    padding-top: 40px;
    height: 100%;
    width: 50%;
  }

  ${screenLt_640} {
    padding-top: 30px;
    height: 100%;
    width: 100%;
  }

  ${screenLt_480} {
  }

  ${screenLt_360} {
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  ${screenLt_768} {
    font-size: 14px;
    line-height: 130%;
  }

  ${screenLt_640} {
    font-size: 16px;
    line-height: 140%;
  }
`;

export const Pre = styled.div`
  height: 22.4px;

  ${screenLt_768} {
    height: 20px;
  }

  ${screenLt_640} {
    height: 22.4px;
  }
`;

export const SvgArrow = styled.div`
  background-image: url(${svgArrow});
  width: 35px;
  height: 35px;

  ${screenLt_1024} {
    transform: scale(0.9);
  }
`;

export const Box = styled.div`
  background: #fff;
  box-shadow: 0px 0px 12px 0px rgba(59, 58, 61, 0.1);
  height: 546px;
  position: relative;
  width: 502px;
  z-index: 10;

  &:hover {
    box-shadow: 0px 0px 15px 0px rgba(59, 58, 61, 0.3);
  }

  &:hover ${SvgArrow} {
    background-image: url(${svgArrowHover});
  }

  ${screenLt_1650} {
    width: 31%;
  }

  ${screenLt_1366} {
    width: 47%;
  }

  ${screenLt_1024} {
    height: 520px;
  }

  ${screenLt_768} {
    height: 464px;
  }

  ${screenLt_640} {
    height: 464px;
    width: 100%;
  }

  ${screenLt_480} {
  }

  ${screenLt_360} {
  }
`;

export const BoxBackgroundImg = styled.div`
  width: 100%;
  height: 340px;
  ${({ id }) => handleImgType(id)};

  ${screenLt_1366} {
    background-size: cover;
    background-repeat: no-repeat;
  }

  ${screenLt_768} {
    height: 230px;
    width: 100%;
  }

  ${screenLt_640} {
    background-size: cover;
    background-repeat: no-repeat;
    height: 230px;
    width: 100%;
  }
`;

export const Title = styled.div`
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  width: 202px;
  height: 55px;
  position: relative;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
  top: -30px;
  background: #fff;
  padding: 14px 0 15px;

  ${screenLt_640} {
    height: 40px;
    padding: 10px 0 15px;
  }
`;

export const Desc = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  padding: 0px 31px 0 30px;
  position: relative;
  top: -24px;

  ${screenLt_1024} {
    top: -34px;
    padding: 0px 20px;
  }

  ${screenLt_640} {
    top: -24px;
  }
`;

export const BoxArrowLink = styled.div`
  align-items: center;
  bottom: 30px;
  display: flex;
  position: absolute;
  right: 31px;
  gap: 10px;

  ${screenLt_1024} {
    bottom: 10px;
    right: 10px;
    gap: 5px;
  }

  ${screenLt_640} {
    bottom: 20px;
    right: 23px;
  }
`;

export const More = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  color: #18161a;
`;
