import Telegram from "@assets/telegram.svg";
import WhatsApp from "@assets/whatsApp.svg";

import { Container, Title, Box } from "./styled";

const SocialLinks = ({ color = "white" }) => (
  <Container>
    <Title style={{ color: color === "white" ? "#FFFCF7" : "#18161A" }}>
      Написать нам
    </Title>
    <Box>
      <a href="https://t.me/ProAnapu" target="_blank" rel="noreferrer">
        <img alt="telegram" src={Telegram} />
      </a>
      <a href="https://wa.me/79186999833" target="_blank" rel="noreferrer">
        <img alt="whatsapp" src={WhatsApp} />
      </a>
    </Box>
  </Container>
);

export default SocialLinks;
