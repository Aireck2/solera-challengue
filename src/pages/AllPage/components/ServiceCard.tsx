import { FC } from "react";

import { Button, Card } from "@/components/basics";

import { ServiceValues } from "./Form/ServiceForm";

interface ServiceItem extends ServiceValues {
  id: string;
}

export const ServiceCard: FC<ServiceItem> = ({
  id,
  name,
  description,
  label,
}) => {
  return (
    <Card
      title={name}
      actions={
        <>
          <Button type="link">Editar</Button>
          <Button type="link">Eliminar</Button>
        </>
      }
    >
      <>
        <p>{description}</p>
        <span>{label}</span>
      </>
    </Card>
  );
};
