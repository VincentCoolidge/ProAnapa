import { useSwiper } from "swiper/react";

import { RightButton } from "./styled";

const SwiperButtonNext = () => {
  const swiper = useSwiper();

  return <RightButton onClick={() => swiper.slideNext()} />;
};

export default SwiperButtonNext;
