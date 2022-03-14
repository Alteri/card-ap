import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../fetchCards";
import { CardsState } from "../reducer";
import { Container } from "../components/Container";
import { CardList } from "../components/CardList";
import { NavigationBar } from "../components/NavigationBar";
import { Button } from "../components/Button";
import { Plus } from "../components/Icon/";

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
      <Container>
        <CardList itemList={cardsArr} />
      </Container>
      <NavigationBar>
        <Button>
          <Plus />
        </Button>
      </NavigationBar>
    </>
  );
};

export default index;
