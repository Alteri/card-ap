import styled from "styled-components";
import { GridStyled } from "../Grid/styled";
import { Breakpoints } from "../Global";

export const ListWrapperStyled = styled(GridStyled)`
  padding-top: 2em;
  width: 100%;

  @media (min-width: ${Breakpoints.Tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
