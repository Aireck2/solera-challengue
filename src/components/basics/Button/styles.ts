import styled from "styled-components";

export type ButtonTypes = "default" | "link" | "success" | "error";

interface ButtonTypeStyles {
  border: string;
  color: string;
}

const ButtonTypeStyles: { [key in ButtonTypes]: ButtonTypeStyles } = {
  default: {
    border: "1px black solid",
    color: "black",
  },
  link: {
    border: "none",
    color: "#1677ff",
  },
  success: {
    border: "1px #52c41a solid",
    color: "#52c41a",
  },
  error: {
    border: "1px #ff4d4f solid",
    color: "#ff4d4f",
  },
};

interface ButtonStyledProps {
  $type: ButtonTypes;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  padding: 0.3rem 0.5rem;
  background-color: unset;
  border: ${(props) => ButtonTypeStyles[props.$type].border};
  color: ${(props) => ButtonTypeStyles[props.$type].color};
`;
