import { useState } from "react";

import SocialLinks from "@components/SocialLinks";
import Modal from "@components/Modal";

import {
  Container,
  Box,
  BoxHeading1,
  Desc,
  BoxSocialLinks,
  Heading1,
  Heading3,
  BoxButton,
} from "./styled";

import Button from "@components/Button";


const AnimationInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const test = async function () {
  //   sendEmail();
  // };

  return (
    <>
      <Container>
        <Box>
          <BoxHeading1>
            <Heading1 className="heading_1">
              ProAnapa<span className="heading_1_circle">&bull;</span>
            </Heading1>
          </BoxHeading1>
          <Heading3 className="heading_3">
            Ваш надежный эксперт и партнер на рынке недвижимости
          </Heading3>
          <Desc>
            Помогаем инвестировать, продать, обеспечиваем комплексную подготовку
            и управление арендными объектами
          </Desc>
          <BoxButton>
            <Button
              title={"Начать инвестировать"}
              onClick={() => setIsOpen((prevState) => !prevState)}
            />
          </BoxButton>
        </Box>
        <BoxSocialLinks>
          <SocialLinks color={"black"} />
        </BoxSocialLinks>
      </Container>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default AnimationInfo;
