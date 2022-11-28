import { useServices } from "@/hooks";

import { ServiceCard } from "./components/ServiceCard";
import { CreateService } from "./components/Form/CreateService";

import { ContainerStyled } from "./styles";
import { ServiceFilters } from "./components/ServiceFilters";

const AllPage = () => {
  const { listServices, setLabelFilter } = useServices();

  return (
    <>
      <ContainerStyled>
        <ServiceFilters setFilter={setLabelFilter} />
        <div className="container">
          <section className="list">
            {listServices.map(({ id, name, description, label }) => (
              <ServiceCard
                key={id}
                name={name}
                description={description}
                label={label}
                id={id}
              />
            ))}
            {!listServices.length ? <>No hay datos</> : null}
          </section>
          <section className="form">
            <CreateService />
          </section>
        </div>
      </ContainerStyled>
    </>
  );
};

export default AllPage;
