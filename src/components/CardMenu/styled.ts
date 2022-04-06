import styled, { css } from "styled-components";
import { MoreVertical, Trash } from "../Icon";

export const CardMenuStyled = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  padding: 16px 16px 16px 18px;
  overflow: hidden;
  border-radius: 0 24px 24px 0;
`;

export const MenuWrapper = styled.div<{ color?: string; open: boolean }>`
  z-index: 1;
  background: #fff;
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  border-radius: 0 24px 24px 0;
  padding: 48px 16px 16px;
  transition: all 0.5s ease;
  transform: translate(55px, 0);

  ${({ open }) =>
    open &&
    css`
      transform: translate(0, 0);
    `}

  ${({ color }) => `border-left: 2px solid ${color};`}
`;

export const MoreVerticalStyled = styled(MoreVertical)<{ open: boolean }>`
  z-index: 2;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: rotate(90deg);
  }

  ${({ open }) =>
    open &&
    css`
      transform: rotate(90deg);
    `}
`;

export const TrashStyled = styled(Trash)`
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.2);
  }
`;
