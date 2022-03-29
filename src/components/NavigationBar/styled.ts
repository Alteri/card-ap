import styled from "styled-components";
import { Colors } from "../Global";

export const NavigationBarStyled = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 50px;
  position: sticky;
  bottom: 0;
  background: ${Colors.primaryLight};
  border-radius: 24px 24px 0 0;
  z-index: 1;
  margin-top: 20px;
`;

export const MenuList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  grid-gap: 8px;
`;

export const MenuItem = styled.li`
  width: 100%;
  height: 100%;
`;

export const MenuItemLink = styled.a<{ active: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${Colors.white};
  transition: all 0.5s ease;
  border-radius: 24px 24px 0 0;

  ${({ active }) => active && `background: ${Colors.primary};`}

  &:hover {
    background: ${Colors.primary};
  }
`;
