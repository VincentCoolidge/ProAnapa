import React from "react";
import { Button } from "./styled";

const ButtonComponent = ({ title = "", type = "button", onClick }) => (
  <Button type={type} onClick={onClick}>
    {title}
  </Button>
);

export default ButtonComponent;
