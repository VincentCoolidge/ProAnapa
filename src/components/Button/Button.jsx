import React from "react";
import { Button } from "./styled";

const ButtonComponent = ({ title = "", onClick }) => (
  <Button onClick={onClick}>{title}</Button>
);

export default ButtonComponent;
