import { ServiceCard } from "./components/ServiceCard";

import { ContainerStyled } from "./styles";

const servicesList = [
  { id: "1", title: "Electricidad", description: "description" },
  { id: "2", title: "Auxilio Mecanico", description: "description" },
  { id: "3", title: "Chofer reemplazo", description: "description" },
  { id: "4", title: "Medico a domicilio", description: "description" },
  { id: "5", title: "Ambulancia", description: "description" },
];

const AllPage = () => {
  return (
    <ContainerStyled>
      <section className="list">
        {servicesList.map(({ id, title, description }) => (
          <ServiceCard
            key={id}
            title={title}
            description={description}
            id={id}
          />
        ))}
      </section>
    </ContainerStyled>
  );
};

export default AllPage;
