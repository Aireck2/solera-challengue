import { FC } from "react";

import { ServiceValues } from "@/models/service";
import { useServices } from "@/hooks";

import { ServiceForm } from "./ServiceForm";

export const CreateService: FC = () => {
  const { saveOne } = useServices();

  const initValues: ServiceValues = { name: "", description: "", label: "" };

  const handleSubmit = (values: ServiceValues) => {
    const id = new Date().toISOString();
    saveOne({ id, ...values });
  };
  return <ServiceForm handleSubmit={handleSubmit} initialValues={initValues} />;
};
