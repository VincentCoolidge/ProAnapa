import { dataOurServices } from "./mockData";

import {
  Grid,
  BoxInfoFirst,
  Text,
  Pre,
  Box,
  BoxBackgroundImg,
  Title,
  Desc,
  BoxArrowLink,
  More,
  SvgArrow,
} from "./styled";

const OurServices = () => {
  return (
    <>
      <h3 className="heading_3">
        Наши услуги<span className="heading_3_circle">&bull;</span>
      </h3>
      <Grid>
        {dataOurServices.map(({ id, title, desc }) => {
          if (id === 0) {
            return (
              <BoxInfoFirst key={`our-services-${id}`}>
                <Text>
                  {title}
                  <Pre />
                  {desc}
                </Text>
              </BoxInfoFirst>
            );
          }

          return (
            <Box key={`our-services-${id}`}>
              <BoxBackgroundImg id={id} />
              <div>
                <Title>{title}</Title>
                <Desc>{desc}</Desc>
                <BoxArrowLink>
                  <More>Узнать подробнее</More>
                  <SvgArrow />
                </BoxArrowLink>
              </div>
            </Box>
          );
        })}
      </Grid>
    </>
  );
};

export default OurServices;
