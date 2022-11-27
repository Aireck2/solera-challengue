import { LocalStorageEntities } from "@/models/storage";

interface ILocalStorage<T> {
  data: T | T[];
  entity: LocalStorageEntities;
}

const setDataLocalStorage = <T>({ entity, data }: ILocalStorage<T>): void => {
  const body = JSON.stringify(data);
  localStorage.setItem(entity, body);
};

const getDataLocalStorage = <T>(entity: LocalStorageEntities): T => {
  const data = localStorage.getItem(entity);
  return JSON.parse(data as string);
};

export default { setDataLocalStorage, getDataLocalStorage };
