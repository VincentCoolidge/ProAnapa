import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Имя обязательно"),
  phone: yup.string().required("Телефон обязателен"),
  email: yup
    .string()
    .email("Неверный формат email")
    .required("Email обязателен"),
});

const Form = () => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  const onSubmit = (data) => {
    // Отправка формы
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Имя:</label>
        <input type="text" id="name" name="name" ref={register} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div>
        <label htmlFor="phone">Телефон:</label>
        <input type="text" id="phone" name="phone" ref={register} />
        {errors.phone && <span>{errors.phone.message}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" ref={register} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default Form;
