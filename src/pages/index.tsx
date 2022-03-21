import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../fetchCards";
import { CardsState } from "../reducer";
import { addCard } from "../action";
import { CardProps } from "../types";
import { Container } from "../components/Container";
import { CardList } from "../components/CardList";
import { NavigationBar } from "../components/NavigationBar";
import { IconButton } from "../components/IconButton";
import { Plus } from "../components/Icon/";
import { PopupModal, closeModal } from "../components/PopupModal";
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

  const onSubmit = (data: CardProps) => {
    dispatch(addCard(data));
    closeModal();
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

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
        <AddCardForm onSubmitFunc={onSubmit} />
      </PopupModal>
      <NavigationBar>
        <IconButton onClick={() => setOpenModal(!openModal)}>
          <Plus />
        </IconButton>
      </NavigationBar>
    </>
  );
};

export default index;
