import logo from "@assets/ceo.webp";

import { Desc, Container, CEOImg, CEOTitle, CEODesc, Box } from "./styled";

const Team = () => (
  <section>
    <h3 className="heading_3">
      Команда профессионалов<span className="heading_3_circle">&bull;</span>
    </h3>
    <Desc>
      Мы ориентированы на непрерывный рост бизнеса и развитие сервиса. Стремимся
      оперативно отвечать на запросы, решать проблемы собственников и
      арендаторов жилья. Постоянное развитие компетенций и наличие устойчивой
      обратной связи позволяют нам делать вложения в недвижимость прозрачными,
      надёжными и комфортными.
    </Desc>
    <Container>
      {[0, 1, 2].map((_, index) => (
        <Box key={`team_${index}`}>
          <CEOImg src={logo} alt={`team-${index}`} />
          <CEOTitle className="img_ceo_title_team">
            Руководитель проекта
          </CEOTitle>
          <CEODesc className="img_ceo_sub-title_team">
            Ренат Ирекович Назмеев
          </CEODesc>
        </Box>
      ))}
    </Container>
  </section>
);

export default Team;
