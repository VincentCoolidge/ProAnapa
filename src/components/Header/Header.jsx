import Logo from "@components/Logo";
import Burger from "@assets/header/burger.svg";

import {
  Container,
  Navigation,
  List,
  Element,
  Link,
  ElementPhone,
  ElementPhoneLink,
} from "./styled";

const Header = () => (
  <Container>
    <Navigation>
      <Logo />
      <List>
        <Element>
          <Link href="/#">Управление недвижимостью</Link>
        </Element>
        <Element>
          <Link href="/#">Подбор недвижимости</Link>
        </Element>
        <Element>
          <Link href="/#">Продажа</Link>
        </Element>
        <Element>
          <Link href="/#">Реинвестиция</Link>
        </Element>
        <Element>
          <Link href="/#">Арендаторам</Link>
        </Element>
        <Element>
          <Link href="/#">Ремонт</Link>
        </Element>
        <Element>
          <Link href="/#">Меблировка</Link>
        </Element>
        <Element>
          <Link href="/#">Консультации</Link>
        </Element>
      </List>
      <ElementPhone>
        <ElementPhoneLink href="tel:+79189333163">
          +7 918 933 31 63
        </ElementPhoneLink>
      </ElementPhone>
    </Navigation>
  </Container>
);

export default Header;
