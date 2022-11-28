import { FC } from "react";

import { ServiceItem, ServiceValues } from "@/models/service";
import { Button, Modal } from "@/components/basics";
import { useDialog, useServices } from "@/hooks";

import { ServiceForm } from "./Form/ServiceForm";

export const UpdServiceModal: FC<{ id: string }> = ({ id }) => {
  const { open, handleClose, handleOpen } = useDialog();
  const { getById, updateById } = useServices();

  const handleUpdate = (values: ServiceValues) => {
    updateById(id, values);
    handleClose();
  };

  const service = getById(id);

  const initValues: ServiceItem = {
    id: service?.id ?? "",
    name: service?.name ?? "",
    description: service?.description ?? "",
    label: service?.label ?? "",
  };

  return (
    <>
      <Button type="link" onClick={handleOpen}>
        Editar
      </Button>
      <Modal title={"Actualizar Servicio"} onClose={handleClose} open={open}>
        <ServiceForm
          handleSubmit={handleUpdate}
          initialValues={initValues}
          handleCancel={handleClose}
        />
      </Modal>
    </>
  );
};
