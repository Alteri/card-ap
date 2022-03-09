import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../fetchCards";
import { CardsState } from "../reducer";

const index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const cardsArr = useSelector<CardsState, CardsState["cards"]>(
    (state) => state.cards
  );

  return (
    <>
      {cardsArr.map(({ id, title, description, group }) => {
        return (
          <div key={id}>
            <p>{title}</p>
            <p>{description}</p>
            <p>{group}</p>
          </div>
        );
      })}
    </>
  );
};

export default index;
