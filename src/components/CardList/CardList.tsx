import React, { ReactNode } from "react";
import { CardListStyled } from "./styled";
import { StateProps } from "../../reducer";
import { CardItem } from "../CardItem";

export type CardListProps = {
  children?: ReactNode;
  itemList: StateProps["cards"];
  teamList: StateProps["teams"];
};

export const CardList = ({ itemList, teamList }: CardListProps) => {
  return (
    <CardListStyled>
      {itemList.map(({ title, group, team }, index) => {
        return (
          <CardItem
            title={title}
            taskType={group}
            teamName={team}
            key={index}
            teamList={teamList}
            id={index}
          />
        );
      })}
    </CardListStyled>
  );
};
