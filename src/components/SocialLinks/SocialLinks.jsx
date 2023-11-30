import Telegram from "@assets/telegram.svg";
import WhatsApp from "@assets/whatsApp.svg";

import "./styled.css";

const SocialLinks = ({ color = "white" }) => (
  <div className="container_socialLinks">
    <span
      style={{ color: color === "white" ? "#FFFCF7" : "#18161A" }}
      className="title_socialLinks"
    >
      Написать нам
    </span>
    <div className="box_icons_socialLinks">
      <a href="https://t.me/ProAnapu" target="_blank" rel="noreferrer">
        <img className="img_SocialNetworks" alt="telegram" src={Telegram} />
      </a>
      <a href="https://wa.me/79186999833" target="_blank" rel="noreferrer">
        <img className="img_SocialNetworks" alt="whatsapp" src={WhatsApp} />
      </a>
    </div>
  </div>
);

export default SocialLinks;
