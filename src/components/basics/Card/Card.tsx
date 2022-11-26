import { FC } from "react";

import { CardStyled } from "./styles";

interface CardProps {
  children: JSX.Element;
  title: string;
  actions?: JSX.Element;
}

export const Card: FC<CardProps> = ({ children, title, actions }) => {
  return (
    <CardStyled>
      <div className="content">
        <h2 className="title">{title}</h2>
        {children}
      </div>

      {actions && <div className="actions">{actions}</div>}
    </CardStyled>
  );
};
