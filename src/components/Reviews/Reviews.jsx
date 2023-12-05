/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
import { Box, Iframe, Link } from "./styled";

const Reviews = () => {
  // style="width:560px;height:800px;overflow:hidden;position:relative;"
  return (
    <div>
      <h3 className="heading_3">
        Отзывы<span className="heading_3_circle">&bull;</span>
      </h3>
      <div>
        <div>
          <Box>
            <Iframe src="https://yandex.ru/maps-reviews-widget/214260051573?comments" />
            <Link
              href="https://yandex.ru/maps/org/ekspert_/214260051573/"
              target="_blank"
              rel="noreferrer"
            >
              Эксперт+ на карте Анапы — Яндекс Карты
            </Link>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
