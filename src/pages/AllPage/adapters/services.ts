import { ServiceItem } from "@/models";

export const adapterServices = (list: any[]): ServiceItem[] => {
  return list.map((item) => ({
    id: item.id,
    name: item.name || item.title,
    description: item.description,
    label: item.label,
  }));
};

export const adapterService = (one: any): ServiceItem => {
  return {
    id: one.id,
    name: one.name || one.title,
    description: one.description,
    label: one.label,
  };
};
