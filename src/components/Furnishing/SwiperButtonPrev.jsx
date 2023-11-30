import { useSwiper } from "swiper/react";

import "./styled.css";

const SwiperButtonPrev = () => {
  const swiper = useSwiper();

  return (
    <div
      onClick={() => swiper.slidePrev()}
      className="button_nav_Furnishing left_button_nav_Furnishing"
    />
  );
};

export default SwiperButtonPrev;
