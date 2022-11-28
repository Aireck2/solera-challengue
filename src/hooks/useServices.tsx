import { useEffect, useState } from "react";
import { ServiceItem, LocalStorageEntities, ServiceValues } from "@/models";

import { adapterServices } from "../pages/AllPage/adapters";

import storage from "@/helpers/storage";

export const useServices = () => {
  const [listServices, setListServices] = useState<ServiceItem[]>([]);

  const getById = (id: string) => {
    const foundService = listServices.find((sv) => sv.id === id);
    return foundService;
  };

  const updateById = (id: string, values: ServiceValues) => {
    const foundService = getById(id);
    setListServices((prev) => {
      const removeArr = [...prev.filter((srv) => srv.id !== id)];
      return [...removeArr, { ...values, id }];
    });
    return foundService;
  };

  const saveOne = (service: ServiceItem) => {
    setListServices((prev) => [...prev, service]);
  };

  const removeOne = (id: ServiceItem["id"]) => {
    setListServices((prev) => [...prev.filter((srv) => srv.id !== id)]);
  };

  useEffect(() => {
    if (listServices.length) {
      storage.setDataLocalStorage<ServiceItem[]>({
        data: listServices,
        entity: LocalStorageEntities.services,
      });
    }
  }, [listServices]);

  useEffect(() => {
    const services =
      storage.getDataLocalStorage<ServiceItem[]>(
        LocalStorageEntities.services
      ) ?? [];

    if (services.length) {
      setListServices(services);
    }
  }, []);

  return {
    listServices: adapterServices(listServices),
    saveOne,
    removeOne,
    getById,
    updateById,
  };
};
