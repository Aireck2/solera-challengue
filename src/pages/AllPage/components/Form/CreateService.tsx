import { FC } from "react";

import { Card } from "@/components/basics";

import { ServiceForm, ServiceValues } from "./ServiceForm";

export const CreateService: FC = () => {
  const initValues: ServiceValues = { name: "", description: "", label: "" };

  const handleSubmit = (values: ServiceValues) => {
    setTimeout(() => {
      console.table(values);
    }, 400);
  };
  return <ServiceForm handleSubmit={handleSubmit} initialValues={initValues} />;
};
