import React from "react";
import { useDispatch } from "react-redux";
import { removeCard } from "../../action";
import {
  CardItemStytled,
  CardItemHeader,
  CardItemFooter,
  RowWithIcon,
  FooterRightColumn,
  ButtonRemoveCard,
  MemberItem,
  MembersWrapper,
} from "./styled";
import { Text } from "../Text";
import { Colors } from "../Global";
import { Grid } from "../Grid";
import { Team, Clock, X } from "../Icon";
import { TaskIcon } from "../TaskIcon";
import { TaskType, TeamType } from "../../types";
import { StateProps } from "../../reducer";

export type CardItemProps = {
  title: string;
  taskType: TaskType;
  id: number;
  teamName: TeamType;
  teamList: StateProps["teams"];
};

export const CardItem = ({
  title,
  taskType,
  teamName,
  id,
  teamList,
}: CardItemProps) => {
  const dispatch = useDispatch();
  function cardRemove(index: number) {
    dispatch(removeCard(index));
  }

  const filterTeamList = teamList.filter(({ name }) => name == teamName)[0];

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
        <Grid gap="8">
          <Text fontWeight="600" textType="caption">
            Team Member
          </Text>
          <MembersWrapper>
            {filterTeamList?.members.map(({ link }, index) => (
              <MemberItem src={link} key={index} width="100%" />
            ))}
          </MembersWrapper>
        </Grid>
        <FooterRightColumn>
          <Text fontWeight="600" textType="caption">
            Progress
          </Text>
        </FooterRightColumn>
      </CardItemFooter>
    </CardItemStytled>
  );
};
