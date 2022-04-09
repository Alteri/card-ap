import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import {
  ProjectItemStyled,
  ProjectItemHeader,
  TeamIconStyled,
  RowWithIcon,
} from "./styled";
import { GetDueDate } from "../utils/GetDueDate";
import { TeamProps, TaskProps } from "../../types";
import { removeProject } from "../../actions/projectActions";
import { CardEditPage } from "../CardEditPage";
import { CardMenu } from "../CardMenu";
import { Text } from "../Text";
import { Team, Clock } from "../Icon";
import { Grid } from "../Grid";
import { Colors } from "../Global";
import { MemberItem } from "../MemberItem";

type ProjectItemViewProps = {
  teamList: TeamProps[];
  taskList: TaskProps[];
  title: string;
  dueDate: string;
  teamId: number;
  id: number;
};

export const ProjectItemView = ({
  title,
  dueDate,
  teamId,
  id,
  teamList,
  taskList,
}: ProjectItemViewProps) => {
  const [editCardActive, setEditCardActive] = useState(false);
  const [activeCardId, setActiveCardId] = useState(0);

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

  return (
    <>
      <CardEditPage
        name={title}
        team={filterTeamList?.name}
        members={filterTeamList?.members}
        dueDate={dueDate}
        setOpenEditPage={() => setEditCardActive(!editCardActive)}
        open={editCardActive}
        activeCard={activeCard}
        taskList={filterTaskList}
      />
      <ProjectItemStyled color={filterTeamList?.color} as="li" gap="24">
        <CardMenu
          setActiveCard={() => setActiveCardId(id)}
          removeCard={() => projectRemove(id)}
          editPage={() => setEditCardActive(!editCardActive)}
          color={filterTeamList?.color}
        />
        <ProjectItemHeader gap="8">
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
          <Grid gap="8">
            <Text fontWeight="600" textType="caption">
              Team Member
            </Text>
            <MemberItem members={filterTeamList?.members} />
          </Grid>
          <Grid>
            <Text fontWeight="600" textType="caption">
              Progress
            </Text>
            <Text>{progressResult}</Text>
          </Grid>
        </Grid>
      </ProjectItemStyled>
    </>
  );
};

export const DateProject = ({ dueDate }: { dueDate?: string }) => {
  const memoizedValue = useMemo(() => {
    const projectDate = GetDueDate(dueDate);

    return projectDate;
  }, [dueDate]);
  return (
    <RowWithIcon>
      <Clock color={Colors.gray400} />
      <Text color={Colors.gray400} fontWeight="200" textType="caption">
        {memoizedValue}
      </Text>
    </RowWithIcon>
  );
};
