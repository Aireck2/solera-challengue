import { FC } from "react";

import { ButtonStyled, ButtonTypes } from "./styles";

interface ButtonProps {
  children: JSX.Element | string;
  type?: ButtonTypes;
  htmlType?: "button" | "submit" | "reset";
}

export const Button: FC<ButtonProps> = ({ children, type, htmlType }) => {
  return (
    <ButtonStyled $type={type || "default"} type={htmlType}>
      {children}
    </ButtonStyled>
  );
};
