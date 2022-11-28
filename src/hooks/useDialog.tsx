import { useState } from "react";

export const useDialog = (initValue = false) => {
  const [open, setOpen] = useState(initValue);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleToggle = () => setOpen((prev) => !prev);

  return { open, handleOpen, handleClose, handleToggle };
};
