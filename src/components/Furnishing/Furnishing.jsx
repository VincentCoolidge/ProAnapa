import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useSwiper } from "swiper/react";

import "./styled.css";

const Furnishing = () => {
  const swiper = useSwiper();

  return (
    <div>
      <h3 className="heading_3">
        Пример меблировкиa<span className="heading_3_circle">&bull;</span>
      </h3>
      <div className="root_slider_Furnishing">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          draggable={false}
          // allowTouchMove={false}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {[0, 1, 2, 3, 4, 5, 6].map((_, i) => (
            <SwiperSlide
              className="element_slider_box"
              key={`element_slider_${i}`}
            >
              <div className={`element_slider_plan element_slider_plan_${i}`} />
              <div
                className={`element_slider_photo element_slider_photo_${i}`}
              />
            </SwiperSlide>
          ))}
          {/* <nav className="box_navigation_Furnishing">
            <div
              onClick={() => swiper?.slidePrev()}
              className="button_nav_Furnishing left_button_nav_Furnishing"
            />
            <div
              onClick={() => swiper?.slideNext()}
              className="button_nav_Furnishing right_button_nav_Furnishing"
            />
          </nav> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Furnishing;
