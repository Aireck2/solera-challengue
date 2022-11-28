import { FC } from "react";

import { SelectStyled } from "./styles";

interface InputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: any;
}

export const Select: FC<InputProps> = ({ options, ...rest }) => {
  return <SelectStyled {...rest}>{options}</SelectStyled>;
};
