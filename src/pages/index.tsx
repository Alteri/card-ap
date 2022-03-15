import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../fetchCards";
import { CardsState } from "../reducer";
import { Container } from "../components/Container";
import { CardList } from "../components/CardList";
import { NavigationBar } from "../components/NavigationBar";
import { Button } from "../components/Button";
import { Plus } from "../components/Icon/";
import { PopupModal } from "../components/PopupModal";
import { AddCardForm } from "../components/AddCardForm";

const index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const cardsArr = useSelector<CardsState, CardsState["cards"]>(
    (state) => state.cards
  );

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Container>
        <CardList itemList={cardsArr} />
      </Container>
      <PopupModal
        title="New card"
        subTitle="Add new task for team"
        open={openModal}
        onClose={() => setOpenModal(!openModal)}
      >
        <AddCardForm />
      </PopupModal>
      <NavigationBar>
        <Button onClick={() => setOpenModal(!openModal)}>
          <Plus />
        </Button>
      </NavigationBar>
    </>
  );
};

export default index;
