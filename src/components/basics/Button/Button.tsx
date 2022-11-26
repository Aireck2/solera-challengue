import { FC } from "react";

import { ButtonStyled, ButtonTypes } from "./styles";

interface ButtonProps {
  children: JSX.Element | string;
  type?: ButtonTypes;
}

export const Button: FC<ButtonProps> = ({ children, type }) => {
  return <ButtonStyled $type={type || "default"}>{children}</ButtonStyled>;
};
