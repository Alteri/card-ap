import styled, { css, keyframes } from "styled-components";
import { Colors } from "../Global";

const rotate = keyframes`
  from {
   opacity: 0;
   transform: translate(0, 100px);
  }

  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

export const CardWrapperStyled = styled.li<{
  padding?: string;
  animation: boolean;
  color?: string;
}>`
  display: grid;
  gap: 24px;
  position: relative;
  max-width: 100%;
  width: 100%;
  border-radius: 24px;
  background: ${Colors.white};
  box-shadow: 0 0 8px 2px ${Colors.gray200};
  transition: all 0.5s ease;

  ${({ padding }) => padding && `padding: ${padding};`}

  ${({ animation }) =>
    animation &&
    css`
      animation: ${rotate} 2s;
    `}

  &:hover {
    ${({ color }) => color && `box-shadow: 0px 0px 8px 2px ${color};`}
  }
`;
