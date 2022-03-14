import styled from "styled-components";

export const ButtonStyled = styled.button`
  border-radius: 50%;
  background: #283593;
  border: 0;
  padding: 8px 10px;
  line-height: 1;
  border: 8px solid #5f5fc4;
  position: relative;
  top: -20px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background: #001064;
    border: 8px solid #283593;
  }
`;
