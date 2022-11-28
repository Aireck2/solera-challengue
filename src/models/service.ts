export interface ServiceItem extends ServiceValues {
  id: string;
}

export interface ServiceValues {
  name: string;
  description: string;
  label?: string;
}
