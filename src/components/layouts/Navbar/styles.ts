import styled from "styled-components";

export const NavbarStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 20px;
  box-shadow: 0 1px 5px 0 #d9d9d9;
  .logo-container {
    display: flex;
    align-items: center;
  }

  .nav-list {
    display: flex;
    grid-gap: 40px;
    a {
      text-decoration: none;
    }
  }
`;
