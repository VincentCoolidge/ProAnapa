import { useState, useEffect } from "react";
import Logo from "@components/Logo";
import BurgerSvg from "@assets/header/burger.svg";
import PhoneSvg from "@assets/header/phone.svg";
import CloseSvg from "@assets/header/close.svg";
import SocialLinks from "@components/SocialLinks";

import {
  LaptopScreenNavigation,
  MobileScreenNavigation,
  Container,
  Navigation,
  List,
  Element,
  Link,
  ElementPhone,
  ElementPhoneLink,
  LogoMobileBox,
  Burger,
  Phone,
  BurgerMenu,
  ContainerBurger,
  BurgerHeader,
  BurgerList,
  BurgerFooter,
  BoxSocialLinks,
} from "./styled";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const rootElement = document.querySelector("body");

    if (isOpen) {
      rootElement.style.overflow = "hidden";
    } else {
      rootElement.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <BurgerMenu>
          <ContainerBurger>
            <BurgerHeader>
              <img
                alt="Close"
                src={CloseSvg}
                onClick={() => setIsOpen(false)}
              />
            </BurgerHeader>
            <BurgerList>
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
            </BurgerList>
            <BurgerFooter>
              <Logo isBurgerMenu={true} />
              <ElementPhoneLink isBurgerMenu={true} href="tel:+79189333163">
                +7 918 933 31 63
              </ElementPhoneLink>
              <BoxSocialLinks>
                <SocialLinks color={"black"} />
              </BoxSocialLinks>
            </BurgerFooter>
          </ContainerBurger>
        </BurgerMenu>
      )}
      <Container>
        <Navigation>
          <LaptopScreenNavigation>
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
          </LaptopScreenNavigation>
          <MobileScreenNavigation>
            <Burger
              alt="Burger"
              src={BurgerSvg}
              onClick={() => setIsOpen(true)}
            />
            <LogoMobileBox>
              <Logo />
              <ElementPhoneLink href="tel:+79189333163">
                +7 918 933 31 63
              </ElementPhoneLink>
            </LogoMobileBox>
            <Phone alt="Phone" src={PhoneSvg} />
          </MobileScreenNavigation>
        </Navigation>
      </Container>
    </>
  );
};

export default Header;
