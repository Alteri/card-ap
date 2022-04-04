import styled, { css } from "styled-components";

export const TaksIconStyled = styled.div<{ iconId: number; color: string }>`
  display: inline-block;
  padding: 20px;
  border-radius: 50%;

  ${({ color }) =>
    color &&
    css`
      background: ${color};
      box-shadow: 0px 0px 8px 2px ${color};
    `}
`;
