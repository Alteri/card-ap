import React, { useState } from "react";
import { Container } from "../components/Container";
import { NavigationBar } from "../components/NavigationBar";
import { PopupModal } from "../components/PopupModal";

const Teams = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Container>test</Container>
      <PopupModal
        title="New card"
        subTitle="Add new task for team"
        open={openModal}
        onClose={() => setOpenModal(!openModal)}
      >
        test
      </PopupModal>
      <NavigationBar modalAction={() => setOpenModal(!openModal)} />
    </>
  );
};

export default Teams;
