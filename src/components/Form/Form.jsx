import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { schema } from "@utils/schema";
import { sendEmailjs } from "@utils/emailjs";

import Button from "@components/Button";

import {
  Container,
  Form,
  Description,
  Input,
  BoxEmail,
  BoxName,
  BoxPhone,
  InputPhone,
  DescriptionVisible,
} from "./styled";

const FormComponent = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ email, name, phone }) =>
    sendEmailjs({ email, phone, name }, setIsLoading);

  return (
    <Container isLoading={isLoading}>
      <DescriptionVisible>
        Заполните форму и наши специалисты <br /> свяжутся с вами в ближайшее
        время
      </DescriptionVisible>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Description>
          Заполните форму и наши специалисты <br /> свяжутся с вами в ближайшее
          время
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
        <Button
          title="Отправить заявку"
          type="submit"
          color="#2F1F1F"
          isLoading={isLoading}
        />
      </Form>
    </Container>
  );
};

export default FormComponent;
