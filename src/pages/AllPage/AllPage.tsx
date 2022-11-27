import { ServiceCard } from "./components/ServiceCard";
import { CreateService } from "./components/Form/CreateService";

import { servicesList } from "../../../dataMock";

import { ContainerStyled } from "./styles";

const AllPage = () => {
  return (
    <ContainerStyled>
      <section className="list">
        {servicesList.map(({ id, title, description }) => (
          <ServiceCard
            key={id}
            name={title}
            description={description}
            id={id}
          />
        ))}
      </section>
      <section className="form">
        <CreateService />
      </section>
    </ContainerStyled>
  );
};

export default AllPage;
