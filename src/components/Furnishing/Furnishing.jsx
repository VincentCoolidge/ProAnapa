import { Swiper, SwiperSlide } from "swiper/react";

import SwiperButtonNext from "./SwiperButtonNext";
import SwiperButtonPrev from "./SwiperButtonPrev";

// import Swiper core and required modules
import { Navigation, Parallax } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./styled.css";

const Furnishing = () => {
  return (
    <div>
      <h3 className="heading_3">
        Пример меблировкиa<span className="heading_3_circle">&bull;</span>
      </h3>
      <div className="root_slider_Furnishing">
        <Swiper
          modules={[Navigation, Parallax]}
          spaceBetween={50}
          speed={600}
          slidesPerView={1}
          draggable={false}
          allowTouchMove={false}
          observer
          observeParents
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
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
          <nav className="box_navigation_Furnishing">
            <SwiperButtonPrev />
            <SwiperButtonNext />
          </nav>
        </Swiper>
      </div>
    </div>
  );
};

export default Furnishing;
