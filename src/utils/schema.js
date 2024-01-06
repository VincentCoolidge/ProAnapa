import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Имя обязательно"),
  phone: yup.string().required("Телефон обязателен"),
  email: yup
    .string()
    .email("Неверный формат email")
    .required("Email обязателен"),
});
