import SocialLinks from "@components/SocialLinks";

import { Container, Box, BoxHeading1, Desc, BoxSocialLinks } from "./styled";

const AnimationInfo = () => (
  <Container>
    <Box>
      <BoxHeading1>
        <h1 className="heading_1">
          ProAnapa<span className="heading_1_circle">&bull;</span>
        </h1>
      </BoxHeading1>
      <h3 className="heading_3">
        Ваш надежный эксперт и партнер на рынке недвижимости
      </h3>
      <Desc>
        Помогаем инвестировать, продать, обеспечиваем комплексную подготовку и
        управление арендными объектами
      </Desc>
    </Box>
    <BoxSocialLinks>
      <SocialLinks color={"black"} />
    </BoxSocialLinks>
  </Container>
);

export default AnimationInfo;
