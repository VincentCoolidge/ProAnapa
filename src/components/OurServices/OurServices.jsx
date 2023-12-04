import { dataOurServices } from "./mockData";

import { Grid, BoxInfoFirst, Text, Pre, Box, BoxBackgroundImg } from "./styled";

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
              <div className="box_our_service_box">
                <div className="box_our_service_title">{title}</div>
                <div className="box_our_service_desc">{desc}</div>
                <div className="box_our_service_arrow_link">
                  <span className="more_box_our_service">Узнать подробнее</span>
                  <div className="svg-arrow_ourServices" />
                </div>
              </div>
            </Box>
          );
        })}
      </Grid>
    </>
  );
};

export default OurServices;
