import styled, { css } from "styled-components";
import { GridStyled } from "../Grid/styled";
import { Text } from "../Text";
import { Colors } from "../Global";

export const TasksListStyled = styled(GridStyled)``;

export const ItemListStyled = styled(GridStyled)``;

export const ItemHeaderStyled = styled(GridStyled)`
  display: flex;
  align-items: center;
`;

export const TitleWrapper = styled(GridStyled)`
  display: flex;
`;

export const TaskId = styled(Text)`
  background: ${Colors.black};
  padding: 4px 8px;
  border-radius: 4px;
`;

export const CompleteWrapper = styled.div<{ complete: boolean }>`
  border: 2px solid ${Colors.gray200};
  border-radius: 4px;
  display: flex;
  padding: 2px;
  cursor: pointer;
  transition: all 0.5s ease;

  ${({ complete }) =>
    complete &&
    css`
      background: ${Colors.green};
      border-color: ${Colors.green};
    `}

  &:hover {
    border-color: ${Colors.green};
  }
`;
