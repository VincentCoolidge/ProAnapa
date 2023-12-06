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

import {
  BoxNavigaton,
  ElementSliderPlan,
  ElementSliderPhoto,
  Container,
} from "./styled";

const Furnishing = () => {
  return (
    <Container>
      <h3 className="heading_3">
        Пример меблировкиa<span className="heading_3_circle">&bull;</span>
      </h3>
      <div>
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
              <ElementSliderPlan index={i} />
              <ElementSliderPhoto index={i} />
            </SwiperSlide>
          ))}
          <BoxNavigaton>
            <SwiperButtonPrev />
            <SwiperButtonNext />
          </BoxNavigaton>
        </Swiper>
      </div>
    </Container>
  );
};

export default Furnishing;
