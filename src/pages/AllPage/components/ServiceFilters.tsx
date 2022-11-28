import { Button } from "@/components/basics";
import { FC } from "react";

interface FilterItem {
  value: string;
  label: string;
}

const menuList: FilterItem[] = [
  { value: "", label: "Todos" },
  { value: "Autos", label: "Autos" },
  { value: "Salud", label: "Salud" },
  { value: "Hogar", label: "Hogar" },
];

export const ServiceFilters: FC<{ setFilter: any }> = ({ setFilter }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <ul style={{ display: "flex", gap: "10px" }}>
        {menuList.map(({ value, label }) => (
          <Button key={value + label} onClick={() => setFilter(value)}>
            {label}
          </Button>
        ))}
      </ul>
    </div>
  );
};
