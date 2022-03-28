import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "../reducer";
import { addCard } from "../action";
import { CardProps } from "../types";
import { Container } from "../components/Container";
import { CardList } from "../components/CardList";
import { NavigationBar } from "../components/NavigationBar";
import { PopupModal, closeModal } from "../components/PopupModal";
import { AddCardForm } from "../components/AddCardForm";

const index = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  const cardsArr = useSelector<StateProps, StateProps["cards"]>(
    (state) => state.cards
  );

  const teamsArr = useSelector<StateProps, StateProps["teams"]>(
    (state) => state.teams
  );

  const onSubmit = (data: CardProps) => {
    dispatch(addCard(data));
    closeModal();
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <>
      <Container>
        <CardList itemList={cardsArr} teamList={teamsArr} />
      </Container>
      <PopupModal
        title="New card"
        subTitle="Add new task for team"
        open={openModal}
        onClose={() => setOpenModal(!openModal)}
      >
        <AddCardForm onSubmitFunc={onSubmit} />
      </PopupModal>
      <NavigationBar modalAction={() => setOpenModal(!openModal)} />
    </>
  );
};

export default index;
