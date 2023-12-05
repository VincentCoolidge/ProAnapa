import { useSwiper } from "swiper/react";

import { LeftButton } from "./styled";

const SwiperButtonPrev = () => {
  const swiper = useSwiper();

  return <LeftButton onClick={() => swiper.slidePrev()} />;
};

export default SwiperButtonPrev;
