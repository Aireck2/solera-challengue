import { FC } from "react";

import { Button, Card } from "@/components/basics";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export const ServiceCard: FC<ServiceItem> = ({ id, title, description }) => {
  return (
    <Card
      title={title}
      actions={
        <>
          <Button type="link">Editar</Button>
          <Button type="link">Eliminar</Button>
        </>
      }
    >
      <>
        <p>{description}</p>
      </>
    </Card>
  );
};
