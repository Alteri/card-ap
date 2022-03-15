import styled from "styled-components";
import { Colors } from "../Global";

export const ButtonStyled = styled.button`
  border-radius: 50%;
  background: ${Colors.primary};
  border: 0;
  padding: 8px 10px;
  line-height: 1;
  border: 8px solid ${Colors.primaryLight};
  position: relative;
  top: -20px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background: ${Colors.primaryDark};
    border: 8px solid ${Colors.primary};
  }
`;
