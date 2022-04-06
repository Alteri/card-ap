import React from "react";
import { useDispatch } from "react-redux";
import { removeCard } from "../../action";
import {
  CardItemStyled,
  CardItemHeader,
  RowWithIcon,
  TeamIconStyled,
} from "./styled";
import { Text } from "../Text";
import { Colors } from "../Global";
import { Grid } from "../Grid";
import { Team, Clock } from "../Icon";
import { CardProps, TeamProps } from "../../types";
import { GetDueDate } from "../utils/GetDueDate";
import { MemberItem } from "../MemberItem";
import { CardMenu } from "../CardMenu";

export type ProjectItemProps = {
  itemList: CardProps[];
  teamList: TeamProps[];
};

export const ProjectItem = ({ itemList, teamList }: ProjectItemProps) => {
  const dispatch = useDispatch();
  function cardRemove(id: number) {
    dispatch(removeCard(id));
  }

  return (
    <>
      {itemList.map(({ title, teamId, dueDate, id }, index) => {
        const filterTeamList = teamList?.filter(({ id }) => id == teamId)[0];
        return (
          <CardItemStyled
            color={filterTeamList?.color}
            key={index}
            as="li"
            gap="24"
          >
            <CardMenu
              removeCard={() => cardRemove(id)}
              color={filterTeamList?.color}
            />
            <CardItemHeader gap="8">
              <TeamIconStyled
                iconId={filterTeamList?.iconId}
                color={filterTeamList?.color}
              />
              <Text textType="h3">{title}</Text>
              <RowWithIcon>
                <Team color={Colors.gray400} />
                <Text
                  color={Colors.gray400}
                  fontWeight="200"
                  textType="caption"
                >
                  {filterTeamList?.name} Team
                </Text>
              </RowWithIcon>
              <RowWithIcon>
                <Clock color={Colors.gray400} />
                <Text
                  color={Colors.gray400}
                  fontWeight="200"
                  textType="caption"
                >
                  {GetDueDate(dueDate)}
                </Text>
              </RowWithIcon>
            </CardItemHeader>
            <Grid templateColumns="70% 30%">
              <Grid gap="8">
                <Text fontWeight="600" textType="caption">
                  Team Member
                </Text>
                <MemberItem members={filterTeamList?.members} />
              </Grid>
              <Grid>
                <Text fontWeight="600" textType="caption">
                  Progress
                </Text>
              </Grid>
            </Grid>
          </CardItemStyled>
        );
      })}
    </>
  );
};