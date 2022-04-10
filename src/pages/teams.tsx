import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "../reducer";
import { Container } from "../components/Container";
import { NavigationBar } from "../components/NavigationBar";
import { PopupModal, closeModal } from "../components/PopupModal";
import { ListWrapper } from "../components/ListWrapper";
import { TeamItem } from "../components/TeamItem";
import { AddTeamForm } from "../components/AddTeamForm";
import { TeamProps } from "../types";
import { addTeam } from "../actions/teamActions";

const Teams = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  const teamsArr = useSelector<StateProps, StateProps["teams"]>(
    (state) => state.teams
  );

  const onSubmit = (data: TeamProps) => {
    dispatch(addTeam(data));
    closeModal();
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <>
      <Container>
        <ListWrapper gap="32px">
          <TeamItem teamList={teamsArr} />
        </ListWrapper>
      </Container>
      <PopupModal
        title="New team"
        subTitle="Add new team"
        open={openModal}
        onClose={() => setOpenModal(!openModal)}
      >
        <AddTeamForm
          onSubmitFunc={onSubmit}
          nextTeamId={teamsArr.slice(-1)[0]?.id + 1}
        />
      </PopupModal>
      <NavigationBar modalAction={() => setOpenModal(!openModal)} />
    </>
  );
};

export default Teams;
