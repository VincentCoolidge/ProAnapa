import { Box, Iframe, Link, Container, Block } from "./styled";

const Reviews = () => {
  return (
    <Container>
      <h3 className="heading_3">
        Отзывы<span className="heading_3_circle">&bull;</span>
      </h3>
      <Block>
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
      </Block>
    </Container>
  );
};

export default Reviews;
