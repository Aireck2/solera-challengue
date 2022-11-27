import styled from "styled-components";

export const ContainerStyled = styled.div`
  display: grid;
  grid-gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr auto;
  }
  .list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;
    order: 2;
    @media screen and (min-width: 768px) {
      order: 1;
    }
  }
  .form {
    min-width: 300px;
    order: 1;
  }
`;
