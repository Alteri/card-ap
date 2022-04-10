import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  ProjectItemStyled,
  ProjectItemHeader,
  TeamIconStyled,
  RowWithIcon,
} from "./styled";
import { TeamProps, TaskProps, ProjectProps } from "../../types";
import { removeProject } from "../../actions/projectActions";
import { CardEditPage } from "../CardEditPage";
import { CardMenu } from "../CardMenu";
import { Text } from "../Text";
import { Team } from "../Icon";
import { Grid } from "../Grid";
import { Colors } from "../Global";
import { MemberItem } from "../MemberItem";
import { DateProject } from "../DateProject";

type ProjectItemViewProps = {
  teamList: TeamProps[];
  taskList: TaskProps[];
  projectItem: ProjectProps;
};

export const ProjectItemView = ({
  teamList,
  taskList,
  projectItem,
}: ProjectItemViewProps) => {
  const [editCardActive, setEditCardActive] = useState(false);
  const [activeCardId, setActiveCardId] = useState(0);

  const { id, title, dueDate, teamId } = projectItem;

  const dispatch = useDispatch();
  function projectRemove(id: number) {
    dispatch(removeProject(id));
  }

  const filterTeamList = teamList?.filter(({ id }) => id == teamId)[0];
  const filterTaskList = taskList?.filter(({ projectId }) => projectId == id);
  const activeCard = activeCardId == id;

  const progressAllTasks = filterTaskList?.filter(
    ({ complete }) => complete
  ).length;

  const progressResult =
    Math.round((progressAllTasks / filterTaskList.length) * 100) + "%";

  useEffect(() => {
    editCardActive
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [editCardActive]);

  return (
    <>
      <CardEditPage
        projectItem={projectItem}
        team={filterTeamList?.name}
        members={filterTeamList?.members}
        setOpenEditPage={() => setEditCardActive(!editCardActive)}
        open={editCardActive}
        activeCard={activeCard}
        taskList={filterTaskList}
      />
      <ProjectItemStyled color={filterTeamList?.color} as="li" gap="24px">
        <CardMenu
          setActiveCard={() => setActiveCardId(id)}
          removeCard={() => projectRemove(id)}
          editPage={() => setEditCardActive(!editCardActive)}
          color={filterTeamList?.color}
        />
        <ProjectItemHeader gap="8px">
          <TeamIconStyled
            iconId={filterTeamList?.iconId}
            color={filterTeamList?.color}
          />
          <Text textType="h3">{title}</Text>
          <RowWithIcon>
            <Team color={Colors.gray400} />
            <Text color={Colors.gray400} fontWeight="200" textType="caption">
              {filterTeamList?.name} Team
            </Text>
          </RowWithIcon>
          <DateProject dueDate={dueDate} />
        </ProjectItemHeader>
        <Grid templateColumns="70% 30%">
          <Grid gap="8px">
            <Text fontWeight="600" textType="caption">
              Team Member
            </Text>
            <MemberItem members={filterTeamList?.members} />
          </Grid>
          {filterTaskList.length ? (
            <Grid>
              <Text fontWeight="600" textType="caption">
                Progress
              </Text>
              <Text>{progressResult}</Text>
            </Grid>
          ) : null}
        </Grid>
      </ProjectItemStyled>
    </>
  );
};
