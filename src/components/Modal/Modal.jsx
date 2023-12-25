import {
  Overlay,
  Container,
  Form,
  Heading,
  Description,
  Input,
  BoxEmail,
  BoxName,
  BoxPhone,
  InputPhone,
  PrivacyPolicy,
  Link,
  Close,
} from "./styled";

import CloseSvg from "@assets/header/close.svg";
import { useEffect } from "react";
import { createPortal } from "react-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@components/Button";

const schema = yup.object().shape({
  name: yup.string().required("Имя обязательно"),
  phone: yup.string().required("Телефон обязателен"),
  email: yup
    .string()
    .email("Неверный формат email")
    .required("Email обязателен"),
});

const Modal = ({ isOpen = false, setIsOpen = () => {} }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const rootElement = document.querySelector("body");

    if (isOpen) {
      rootElement.style.overflow = "hidden";
    } else {
      rootElement.style.overflow = "";
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const onSubmit = (data) => {
    // Отправка формы
    console.log(data);
  };

  return createPortal(
    <Overlay>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ position: "relative" }}>
            <Heading>Связаться с нами</Heading>
            <Close
              alt="Close"
              src={CloseSvg}
              onClick={() => setIsOpen((prevState) => !prevState)}
            />
          </div>
          <Description>
            Оставьте свой номер телефона и наш менеджер с вами свяжется
          </Description>
          <BoxName>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Ваше имя"
              isError={errors?.name?.message}
              {...register("name", { required: true })}
            />
          </BoxName>
          <BoxPhone>
            <InputPhone
              mask="+7 (999) 999-99-99"
              placeholder="+7 (___) ___-__-__"
              maskChar="_"
              alwaysShowMask={false}
              isError={errors?.phone?.message}
              {...register("phone", { required: true })}
            />
          </BoxPhone>
          <BoxEmail>
            <Input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              isError={errors?.email?.message}
              {...register("email", { required: true })}
            />
          </BoxEmail>
          <PrivacyPolicy>
            Нажимая кнопку вы соглашаетесь с{" "}
            <Link>политикой конфиденциальности</Link>
          </PrivacyPolicy>
          <Button title="Отправить" type="submit" />
        </Form>
      </Container>
    </Overlay>,
    document.getElementById("modal")
  );
};

export default Modal;
