import React from "react";
import { CardListStyled } from "./styled";
import { StateProps } from "../../reducer";
import { CardItem } from "../CardItem";

export type CardListProps = {
  itemList: StateProps["cards"];
  teamList: StateProps["teams"];
};

export const CardList = ({ itemList, teamList }: CardListProps) => {
  return (
    <CardListStyled>
      <CardListStyled>
        {itemList.map(({ title, group, team, dueDate }, index) => (
          <CardItem
            title={title}
            group={group}
            team={team}
            dueDate={dueDate}
            teamList={teamList}
            id={index}
            key={index}
          />
        ))}
      </CardListStyled>
    </CardListStyled>
  );
};
