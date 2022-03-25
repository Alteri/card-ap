import React from "react";
import { CardListStyled } from "./styled";
import { StateProps } from "../../reducer";
import { CardItem } from "../CardItem";

export type CardListProps = {
  itemList: StateProps["cards"];
  teamList: StateProps["teams"];
};

export const CardList = ({ itemList, teamList }: CardListProps) => {
  const filterItemList = itemList.map(({ title, group, team, dueDate }) => ({
    title: title,
    group: group,
    team: team,
    dueDate: dueDate,
  }));
  return (
    <CardListStyled>
      <CardItem itemList={filterItemList} teamList={teamList} />
    </CardListStyled>
  );
};
