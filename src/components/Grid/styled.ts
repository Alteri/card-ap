import styled from "styled-components";

export const GridStyled = styled.div<{
  gap?: string;
  templateColumns?: string;
}>`
  display: grid;
  width: 100%;

  ${({ gap }) => gap && `gap: ${gap};`}
  ${({ templateColumns }) =>
    templateColumns && `grid-template-columns: ${templateColumns};`}
`;
