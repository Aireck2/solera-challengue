import styled from "styled-components";

export const CardStyled = styled.div`
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  font-family: sans-serif;
  .title {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
  }
  .description {
  }
  .content {
    padding: 1rem;
    font-size: 14px;
  }
  .actions {
    border-top: 1px solid #d9d9d9;
    padding: 1rem;
    display: flex;
    align-items: center;
    grid-gap: 10px;
  }
`;
