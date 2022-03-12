import styled, { css } from "styled-components";
import { IconProps } from "./types";

export const IconWrapper = styled.span<IconProps>`
  display: inline-block;
  ${({ size }) => css`
    width: ${size};
    height: ${size};
  `}

  svg {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }
`;
