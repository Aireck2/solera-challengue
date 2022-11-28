import { FC } from "react";

import { ModalStyled } from "./styles";

interface ModalProps {
  onClose: () => void;
  open: boolean;
  title?: JSX.Element | string;
  children?: JSX.Element;
}

export const Modal: FC<ModalProps> = ({ open, title, onClose, children }) => {
  if (!open) return null;
  return (
    <ModalStyled>
      <div className={"darkBG"} onClick={() => onClose()} />
      <div className={"centered"}>
        <div className={"modal"}>
          <div className={"modalHeader"}>
            {title && <h5 className={"heading"}>{title}</h5>}
          </div>
          {children}
        </div>
      </div>
    </ModalStyled>
  );
};
