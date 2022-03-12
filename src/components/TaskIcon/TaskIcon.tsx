import React from "react";
import { TaksIconStyled } from "./styled";
import { TaskType } from "../../types";
import { Phone, Camera, Box, Palette } from "../Icon";

export type TaskIconProps = {
  taskType?: TaskType;
};

const getTaskTypeIcon = (taskType: TaskType) => {
  switch (taskType) {
    case TaskType.AppDevelopment:
      return <Phone />;
    case TaskType.Business:
      return <Box />;
    case TaskType.CampaignStore:
      return <Camera />;
    case TaskType.WebDesign:
      return <Palette />;
    default:
      return <Palette />;
  }
};

export const TaskIcon = ({ taskType }: TaskIconProps) => {
  return (
    <TaksIconStyled taskType={taskType}>
      {taskType && getTaskTypeIcon(taskType)}
    </TaksIconStyled>
  );
};
