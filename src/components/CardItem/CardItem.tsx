import React from "react";
import {
  CardItemStytled,
  CardItemHeader,
  CardItemFooter,
  RowWithIcon,
  FooterLeftColumn,
  FooterRightColumn,
} from "./styled";
import { Text } from "../Text";
import { Colors } from "../Global";
import { Team, Clock } from "../Icon";
import { TaskIcon } from "../TaskIcon";
import { TaskType } from "../../types";

export type CardItemProps = {
  title?: string;
  taskType?: TaskType;
};

export const CardItem = ({ title, taskType }: CardItemProps) => {
  return (
    <CardItemStytled taskType={taskType}>
      <CardItemHeader gap="8">
        <TaskIcon taskType={taskType} />
        <Text textType="h3">{title}</Text>
        <RowWithIcon>
          <Team color={Colors.gray400} />
          <Text color={Colors.gray400} fontWeight="200" textType="caption">
            Marketing Team
          </Text>
        </RowWithIcon>
        <RowWithIcon>
          <Clock color={Colors.gray400} />
          <Text color={Colors.gray400} fontWeight="200" textType="caption">
            1 Weeks Left
          </Text>
        </RowWithIcon>
      </CardItemHeader>
      <CardItemFooter templateColumns="70% 30%">
        <FooterLeftColumn>
          <Text fontWeight="600" textType="caption">
            Team Member
          </Text>
        </FooterLeftColumn>
        <FooterRightColumn>
          <Text fontWeight="600" textType="caption">
            Progress
          </Text>
        </FooterRightColumn>
      </CardItemFooter>
    </CardItemStytled>
  );
};
