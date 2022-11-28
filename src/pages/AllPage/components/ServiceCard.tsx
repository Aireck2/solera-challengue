import { FC } from "react";

import { Button, Card } from "@/components/basics";
import { ServiceItem } from "@/models/service";
import { useServices } from "@/hooks";

import { UpdServiceModal } from "./UpdServiceModal";

export const ServiceCard: FC<ServiceItem> = ({
  id,
  name,
  description,
  label,
}) => {
  const { removeOne } = useServices();

  const handleRemove = () => removeOne(id);

  return (
    <Card
      title={name}
      actions={
        <>
          <UpdServiceModal id={id} />
          <Button type="link" onClick={handleRemove}>
            Eliminar
          </Button>
        </>
      }
    >
      <>
        <p>{description}</p>
        <p className="tag">{label}</p>
      </>
    </Card>
  );
};
