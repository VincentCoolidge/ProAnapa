import Logo from "@components/Logo";
import SocialLinks from "@components/SocialLinks";

import "./styled.css";

const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="layout_footer">
        <div className="box_form_footer">
          <h3 className="heading_3 heading_3_footer">
            Узнайте, какой доход может
            <br /> приносить ваша недвижимость
          </h3>
        </div>
        <div className="box_contacts_footer">
          <div className="box_logo_footer">
            <Logo />
            <SocialLinks />
          </div>
          <div className="box_info_footer">
            <address className="adress_info_footer">
              <a className="adress_tel_footer" href="tel:+79189333163">
                +7 918 933 31 63
              </a>
              <span className="">г. Анапа, ул. Крымская 244</span>
              <a href="mailto:vlad@htmlbook.ru?subject=Вопрос по HTML">
                proanapa@yandex.ru
              </a>
            </address>
            <div className="box_info_left_footer">
              <span>Управление недвижимостью</span>
              <span>Подбор недвижимости</span>
              <span>Продажа</span>
              <span>Реинвестиция</span>
              <span>Арендаторам</span>
            </div>
            <div className="box_info_right_footer">
              <span>Ремонт</span>
              <span>Меблировка</span>
              <span>Консультации</span>
              <span>Контакты</span>
            </div>
            <div className="legal_adress_info_footer">
              <b>Индивидуальный предприниматель</b>
              <b>Назмеев Ренат Ирекович</b>
              <span>ИНН 233710241804</span>
              <span>ОГРНИП 318237500471194 от 24.12.2018 года</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
