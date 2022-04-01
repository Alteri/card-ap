import styled from "styled-components";
import { Colors } from "../Global";
import { Grid } from "../Grid";
import { TaskType } from "../../types";

export const ButtonRemoveCard = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
  background: none;
  border: none;
  opacity: 0;
  transition: all 0.5s ease;
`;

export const CardItemStytled = styled.li<{ taskType?: TaskType }>`
  display: grid;
  position: relative;
  grid-gap: 24px;
  width: 100%;
  border-radius: 24px;
  background: ${Colors.white};
  padding: 48px 32px 32px;
  box-shadow: 0 0 8px 2px ${Colors.gray200};
  transition: all 0.5s ease;

  &:hover {
    ${({ taskType }) =>
      taskType &&
      `box-shadow: 0px 0px 8px 2px ${Colors.taskTypeToColor[taskType]};`}

    ${ButtonRemoveCard} {
      opacity: 1;
    }
  }
`;

export const CardItemHeader = styled(Grid)`
  position: relative;
  padding-bottom: 24px;
  border-bottom: 1px solid ${Colors.gray200};
`;

export const RowWithIcon = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 12px;
`;

export const MembersWrapper = styled.div`
  display: flex;
  grid-gap: 8px;
`;

export const MemberItem = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;
