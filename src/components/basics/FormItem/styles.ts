import styled from "styled-components";

interface FormItemStyledProps {
  $showErr: boolean;
}
export const FormItemStyled = styled.div<FormItemStyledProps>`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  margin-bottom: ${(props) => (props.$showErr ? "15px" : "25px")};
  .error-message {
    color: #ff4d4f;
  }
`;
