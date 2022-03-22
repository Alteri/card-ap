import React, { ReactNode } from "react";
import { CardListStyled } from "./styled";
import { CardsState } from "../../reducer";
import { CardItem } from "../CardItem";

export type CardListProps = {
  children?: ReactNode;
  itemList: CardsState["cards"];
};

export const CardList = ({ itemList }: CardListProps) => {
  return (
    <CardListStyled>
      {itemList.map(({ title, group, team }, index) => {
        return (
          <CardItem
            title={title}
            taskType={group}
            teamName={team}
            key={index}
            id={index}
          />
        );
      })}
    </CardListStyled>
  );
};
