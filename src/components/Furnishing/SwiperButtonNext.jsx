import { useSwiper } from "swiper/react";

import "./styled.css";

const SwiperButtonNext = () => {
  const swiper = useSwiper();

  return (
    <div
      onClick={() => swiper.slideNext()}
      className="button_nav_Furnishing right_button_nav_Furnishing"
    />
  );
};

export default SwiperButtonNext;
