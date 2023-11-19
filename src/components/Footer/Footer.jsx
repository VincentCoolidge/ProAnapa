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
          <div className="box_logo">
            <Logo />
            <SocialLinks />
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
