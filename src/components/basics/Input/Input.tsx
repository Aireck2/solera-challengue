import { FC } from "react";

import { InputStyled } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = (props) => {
  return <InputStyled {...props} />;
};
