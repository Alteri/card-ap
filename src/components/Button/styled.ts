import styled from "styled-components";
import { Colors } from "../Global";

export const ButtonStyled = styled.button`
  background: ${Colors.primary};
  border: none;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background: ${Colors.primaryDark};
  }
`;
