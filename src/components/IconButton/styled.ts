import styled from "styled-components";
import { Colors } from "../Global";
import { ButtonStyled } from "../Button/styled";

export const IconButtonStyled = styled(ButtonStyled)`
  border-radius: 50%;
  background: ${Colors.primary};
  padding: 8px 10px;
  line-height: 1;
  border: 8px solid ${Colors.primaryLight};
  position: absolute;
  top: -20px;

  &:hover {
    background: ${Colors.primaryDark};
    border: 8px solid ${Colors.primary};
  }
`;
