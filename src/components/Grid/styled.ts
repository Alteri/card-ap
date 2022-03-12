import styled from "styled-components";
import { JustifyContent, AlignItems, AlignContent } from "./types";

export const GridStyled = styled.div<{
  gap?: string;
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  templateColumns?: string;
  alignContent?: AlignContent;
}>`
  display: grid;
  width: 100%;

  ${({ gap }) => gap && `grid-gap: ${gap}px;`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
  ${({ templateColumns }) =>
    templateColumns && `grid-template-columns: ${templateColumns};`}
  ${({ alignContent }) => alignContent && `align-content: ${alignContent};`}
`;
