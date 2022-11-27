import styled from "styled-components";

export const CardStyled = styled.div`
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
  .title {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
  }
  .content {
    padding: 1rem;
    font-size: 14px;
    height: 100%;
  }
  .actions {
    justify-self: flex-end;
    border-top: 1px solid #d9d9d9;
    padding: 1rem;
    display: flex;
    align-items: center;
    grid-gap: 10px;
  }
`;
