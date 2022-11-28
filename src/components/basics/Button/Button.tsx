import { FC } from "react";

import { ButtonStyled, ButtonTypes } from "./styles";

type HtmlButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "type"
>;
interface ButtonProps extends HtmlButtonProps {
  children: JSX.Element | string;
  type?: ButtonTypes;
  htmlType?: "button" | "submit" | "reset";
}

export const Button: FC<ButtonProps> = ({
  children,
  type,
  htmlType,
  ...rest
}) => {
  return (
    <ButtonStyled $type={type || "default"} type={htmlType} {...rest}>
      {children}
    </ButtonStyled>
  );
};
