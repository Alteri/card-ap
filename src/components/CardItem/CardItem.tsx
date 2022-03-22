import React from "react";
import { useDispatch } from "react-redux";
import { removeCard } from "../../action";
import {
  CardItemStytled,
  CardItemHeader,
  CardItemFooter,
  RowWithIcon,
  FooterLeftColumn,
  FooterRightColumn,
  ButtonRemoveCard,
} from "./styled";
import { Text } from "../Text";
import { Colors } from "../Global";
import { Team, Clock, X } from "../Icon";
import { TaskIcon } from "../TaskIcon";
import { TaskType, TeamType } from "../../types";

export type CardItemProps = {
  title: string;
  taskType: TaskType;
  id: number;
  teamName: TeamType;
};

export const CardItem = ({ title, taskType, teamName, id }: CardItemProps) => {
  const dispatch = useDispatch();
  function cardRemove(index: number) {
    dispatch(removeCard(index));
  }
  return (
    <CardItemStytled taskType={taskType}>
      <ButtonRemoveCard onClick={() => cardRemove(id)}>
        <X color={Colors.black} />
      </ButtonRemoveCard>
      <CardItemHeader gap="8">
        <TaskIcon taskType={taskType} />
        <Text textType="h3">{title}</Text>
        <RowWithIcon>
          <Team color={Colors.gray400} />
          <Text color={Colors.gray400} fontWeight="200" textType="caption">
            {teamName} Team
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
