import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "reducer";
import { addProject } from "actions/projectActions";
import { ProjectProps } from "types";
import { Container } from "components/Container";
import { ListWrapper } from "components/ListWrapper";
import { ProjectItem } from "components/ProjectItem";
import { NavigationBar } from "components/NavigationBar";
import { PopupModal, closeModal } from "components/PopupModal";
import { AddProjectForm } from "components/AddProjectForm";

const index = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  const projectsArr = useSelector<StateProps, StateProps["projects"]>(
    (state) => state.projects
  );

  const teamsArr = useSelector<StateProps, StateProps["teams"]>(
    (state) => state.teams
  );

  const tasksArr = useSelector<StateProps, StateProps["tasks"]>(
    (state) => state.tasks
  );

  const onSubmit = (data: ProjectProps) => {
    dispatch(addProject(data));
    closeModal();
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <>
      <Container>
        <ListWrapper gap="64px 32px">
          <ProjectItem
            projectList={projectsArr}
            teamList={teamsArr}
            taskList={tasksArr}
          />
        </ListWrapper>
      </Container>
      <PopupModal
        title="New project"
        subTitle="Add new project"
        open={openModal}
        onClose={() => setOpenModal(!openModal)}
      >
        <AddProjectForm
          onSubmitFunc={onSubmit}
          teamList={teamsArr}
          nextProjectId={projectsArr.slice(-1)[0]?.id + 1}
        />
      </PopupModal>
      <NavigationBar modalAction={() => setOpenModal(!openModal)} />
    </>
  );
};

export default index;
