import { Container, Link, Circle } from "./styled";

const Logo = ({ data_is_burger_menu = "false" }) => (
  <Container>
    <Link href="/#" data_is_burger_menu={data_is_burger_menu}>
      ProAnapa
      <Circle className="logo_link_circle" />
    </Link>
  </Container>
);

export default Logo;
