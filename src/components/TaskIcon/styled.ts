import styled, { css } from "styled-components";
import { TaskType } from "../../types";
import { Colors } from "../Global";

export const TaksIconStyled = styled.div<{ taskType?: TaskType }>`
  position: absolute;
  left: 0;
  top: -78px;
  padding: 20px;
  border-radius: 50%;

  ${({ taskType }) =>
    taskType &&
    css`
      background: ${Colors.taskTypeToColor[taskType]};
      box-shadow: 0px 0px 8px 2px ${Colors.taskTypeToColor[taskType]};
    `}
`;
