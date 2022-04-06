import styled from "styled-components";
import { Colors } from "../Global";
import { GridStyled } from "../Grid/styled";

export const TeamItemStyled = styled(GridStyled)<{ color?: string }>`
  position: relative;
  border-radius: 24px;
  padding: 32px;
  background: ${Colors.white};
  box-shadow: 0 0 8px 2px ${Colors.gray200};
  transition: all 0.5s ease;

  &:hover {
    ${({ color }) => color && `box-shadow: 0px 0px 8px 2px ${color};`}
  }
`;

export const IdentyWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 16px;
`;
