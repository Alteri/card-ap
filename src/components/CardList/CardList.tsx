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
      {itemList.map(({ id, title, group }, index) => {
        return <CardItem title={title} taskType={group} key={id} id={index} />;
      })}
    </CardListStyled>
  );
};
