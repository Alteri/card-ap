import React from "react";
import { useDispatch } from "react-redux";
import { removeCard } from "../../action";
import {
  CardItemStytled,
  CardItemHeader,
  RowWithIcon,
  ButtonRemoveCard,
  MembersWrapper,
} from "./styled";
import { Text } from "../Text";
import { Colors } from "../Global";
import { Grid } from "../Grid";
import { Team, Clock, X } from "../Icon";
import { TaskIcon } from "../TaskIcon";
import { StateProps } from "../../reducer";
import { GetDueDate } from "../utils/GetDueDate";
import { MemberItem } from "../MemberItem";

export type CardItemProps = {
  itemList: StateProps["cards"];
  teamList: StateProps["teams"];
};

export const CardItem = ({ itemList, teamList }: CardItemProps) => {
  const dispatch = useDispatch();
  function cardRemove(index: number) {
    dispatch(removeCard(index));
  }

  return (
    <>
      {itemList.map(({ title, group, team, dueDate }, index) => (
        <CardItemStytled taskType={group} key={index}>
          <ButtonRemoveCard onClick={() => cardRemove(index)}>
            <X color={Colors.black} />
          </ButtonRemoveCard>
          <CardItemHeader gap="8">
            <TaskIcon taskType={group} />
            <Text textType="h3">{title}</Text>
            <RowWithIcon>
              <Team color={Colors.gray400} />
              <Text color={Colors.gray400} fontWeight="200" textType="caption">
                {team} Team
              </Text>
            </RowWithIcon>
            <RowWithIcon>
              <Clock color={Colors.gray400} />
              <Text color={Colors.gray400} fontWeight="200" textType="caption">
                {GetDueDate(dueDate)}
              </Text>
            </RowWithIcon>
          </CardItemHeader>
          <Grid templateColumns="70% 30%">
            <Grid gap="8">
              <Text fontWeight="600" textType="caption">
                Team Member
              </Text>
              <MembersWrapper>
                <MemberItem teamList={teamList} team={team} />
              </MembersWrapper>
            </Grid>
            <Grid>
              <Text fontWeight="600" textType="caption">
                Progress
              </Text>
            </Grid>
          </Grid>
        </CardItemStytled>
      ))}
    </>
  );
};
