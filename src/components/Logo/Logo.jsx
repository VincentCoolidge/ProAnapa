import { Container, Link, Circle } from "./styled";

const Logo = ({ isBurgerMenu = false }) => (
  <Container>
    <Link href="/#" isBurgerMenu={isBurgerMenu}>
      ProAnapa
      <Circle className="logo_link_circle" />
    </Link>
  </Container>
);

export default Logo;
