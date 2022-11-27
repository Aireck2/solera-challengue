import { FC } from "react";

import { FormItemStyled } from "./styles";

interface FormItemProps {
  children: JSX.Element | string;
  label: string;
  errors?: string;
  touched?: boolean;
}

export const FormItem: FC<FormItemProps> = ({
  children,
  label,
  errors,
  touched,
}) => {
  return (
    <>
      <FormItemStyled $showErr={(errors && touched) || false}>
        <label htmlFor={label}>{label}</label>
        <>{children}</>
        {errors && touched && <p className="error-message">{errors}</p>}
      </FormItemStyled>
    </>
  );
};
