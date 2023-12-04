import { Container, Link, Circle } from "./styled";

const Logo = () => (
  <Container>
    <Link href="/#">
      ProAnapa
      <Circle className="logo_link_circle" />
    </Link>
  </Container>
);

export default Logo;
