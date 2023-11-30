import { dataOurServices } from "./mockData";

import "./styled.css";

import Arrow from "@assets/arrow.svg";

const OurServices = () => {
  return (
    <div className="root_ourServices">
      <h3 className="heading_3">
        Наши услуги<span className="heading_3_circle">&bull;</span>
      </h3>
      <div className="grid_ourServices">
        {dataOurServices.map(({ id, title, desc }) => {
          if (id === 0) {
            return (
              <div
                className="box_info_first_our_service"
                key={`our-services-${id}`}
              >
                <p className="text-our_services">
                  {title}
                  <div className="pre-our_services" />
                  {desc}
                </p>
              </div>
            );
          }

          return (
            <div className="box_our_service" key={`our-services-${id}`}>
              <div className={`box_our_service_background_img_${id}`}></div>
              <div className="box_our_service_box">
                <div className="box_our_service_title">{title}</div>
                <div className="box_our_service_desc">{desc}</div>
                <div className="box_our_service_arrow_link">
                  <span className="more_box_our_service">Узнать подробнее</span>
                  <div className="svg-arrow_ourServices" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;
