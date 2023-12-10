import styled from "styled-components";

import { screenLt_640, screenLt_768 } from "@globalStyle";

import Arrow from "@assets/arrow.svg";
import ArrowHover from "@assets/arrowHover.svg";

import Plan01 from "@assets/furnishing/plan/plan-01.png";
import Photo01 from "@assets/furnishing/photo/plan-slide-01.jpg";
import Photo02 from "@assets/furnishing/photo/plan-slide-02.jpg";
import Photo03 from "@assets/furnishing/photo/plan-slide-03.jpg";
import Photo04 from "@assets/furnishing/photo/plan-slide-04.jpg";
import Photo05 from "@assets/furnishing/photo/plan-slide-05.jpg";
import Photo06 from "@assets/furnishing/photo/plan-slide-06.jpg";
import Photo07 from "@assets/furnishing/photo/plan-slide-07.jpg";

const handleImgPlan = (index) => {
  switch (index) {
    case 0:
      return `background-image: url(${Plan01})`;
    default:
      return `background-image: url(${Plan01})`;
  }
};

const handleImgPhoto = (index) => {
  switch (index) {
    case 0:
      return `background-image: url(${Photo01})`;
    case 1:
      return `background-image: url(${Photo02})`;
    case 2:
      return `background-image: url(${Photo03})`;
    case 3:
      return `background-image: url(${Photo04})`;
    case 4:
      return `background-image: url(${Photo05})`;
    case 5:
      return `background-image: url(${Photo06})`;
    case 6:
      return `background-image: url(${Photo07})`;
    default:
      return "";
  }
};

export const Container = styled.div`
  ${screenLt_768} {
    padding: 0 20px;
  }
`;

export const BoxNavigaton = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
`;

export const LeftButton = styled.div`
  background-image: url(${Arrow});
  background-repeat: no-repeat;
  width: 47px;
  height: 47px;
  transform: scale(1.25) rotate(180deg);
  cursor: pointer;

  &:hover {
    background-image: url(${ArrowHover});
  }
`;

export const RightButton = styled(LeftButton)`
  transform: scale(1.25) rotate(0deg);
  margin-top: 14px;
`;

export const ElementSliderPlan = styled.div`
  width: 501px;
  height: 608px;
  background-size: contain;
  background-repeat: no-repeat;
  ${({ index }) => handleImgPlan(index)};

  ${screenLt_768} {
    height: 300px;
    width: 300px;
  }

  ${screenLt_640} {
    height: 407px;
    width: 300px;
  }
`;

export const ElementSliderPhoto = styled.div`
  margin-top: 10px;
  width: 1046px;
  height: 663px;
  background-size: contain;
  background-repeat: no-repeat;
  ${({ index }) => handleImgPhoto(index)};

  ${screenLt_768} {
    height: 300px;
    width: 100%;
  }

  ${screenLt_640} {
    height: 215px;
    width: 100%;
  }
`;
