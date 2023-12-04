import styled from "styled-components";

import Services01 from "@assets/ourServices/services-01.jpg";
import Services02 from "@assets/ourServices/services-02.jpg";
import Services03 from "@assets/ourServices/services-03.jpg";
import Services04 from "@assets/ourServices/services-04.jpg";
import Services05 from "@assets/ourServices/services-05.jpg";
import Services06 from "@assets/ourServices/services-06.jpg";
import Services07 from "@assets/ourServices/services-07.jpg";
import Services08 from "@assets/ourServices/services-08.jpg";

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

export const Grid = styled.div`
  padding: 10px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

export const BoxInfoFirst = styled.div`
  width: 503px;
  height: 546px;
  padding-top: 156px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

export const Pre = styled.div`
  height: 22.4px;
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
`;

export const BoxBackgroundImg = styled.div`
  width: 100%;
  height: 340px;
  ${({ id }) => handleImgType(id)}
`;
