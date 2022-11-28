import { ServiceCard } from "./components/ServiceCard";
import { CreateService } from "./components/Form/CreateService";
import { useServices } from "@/hooks";

import { ContainerStyled } from "./styles";

const AllPage = () => {
  const { listServices } = useServices();

  return (
    <ContainerStyled>
      <section className="list">
        {listServices.map(({ id, name, description }) => (
          <ServiceCard key={id} name={name} description={description} id={id} />
        ))}
      </section>
      <section className="form">
        <CreateService />
      </section>
    </ContainerStyled>
  );
};

export default AllPage;
