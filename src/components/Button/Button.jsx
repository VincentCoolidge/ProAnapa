import React from "react";
import { Button, LoaderContainer, Loader } from "./styled";

const ButtonComponent = ({
  title = "",
  type = "button",
  color = "inherit",
  isLoading = false,
  onClick,
}) => (
  <Button type={type} color={color} onClick={onClick} isLoading={isLoading}>
    {!isLoading ? (
      title
    ) : (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    )}
  </Button>
);

export default ButtonComponent;
