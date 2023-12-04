import Logo from "@components/Logo";
import SocialLinks from "@components/SocialLinks";

import {
  Container,
  FooterRoot,
  BoxInfo,
  AddressInfo,
  AddressTel,
  LeftBox,
  RightBox,
  LegalAddress,
  FormBox,
  ContactsBox,
} from "./styled";

const Footer = () => (
  <FooterRoot>
    <Container>
      <FormBox>
        <h3 className="heading_3">
          Узнайте, какой доход может
          <br /> приносить ваша недвижимость
        </h3>
      </FormBox>
      <ContactsBox>
        <div>
          <Logo />
          <SocialLinks />
        </div>
        <BoxInfo>
          <AddressInfo>
            <AddressTel href="tel:+79189333163">+7 918 933 31 63</AddressTel>
            <span>г. Анапа, ул. Крымская 244</span>
            <a href="mailto:vlad@htmlbook.ru?subject=Вопрос по HTML">
              proanapa@yandex.ru
            </a>
          </AddressInfo>
          <LeftBox>
            <span>Управление недвижимостью</span>
            <span>Подбор недвижимости</span>
            <span>Продажа</span>
            <span>Реинвестиция</span>
            <span>Арендаторам</span>
          </LeftBox>
          <RightBox>
            <span>Ремонт</span>
            <span>Меблировка</span>
            <span>Консультации</span>
            <span>Контакты</span>
          </RightBox>
          <LegalAddress>
            <b>Индивидуальный предприниматель</b>
            <b>Назмеев Ренат Ирекович</b>
            <span>ИНН 233710241804</span>
            <span>ОГРНИП 318237500471194 от 24.12.2018 года</span>
          </LegalAddress>
        </BoxInfo>
      </ContactsBox>
    </Container>
  </FooterRoot>
);

export default Footer;
