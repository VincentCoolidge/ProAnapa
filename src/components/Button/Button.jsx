import React from "react";
import { Button } from "./styled";

const ButtonComponent = ({
  title = "",
  type = "button",
  color = "inherit",
  onClick,
}) => (
  <Button type={type} color={color} onClick={onClick}>
    {title}
  </Button>
);

export default ButtonComponent;
