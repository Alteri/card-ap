import React from "react";
import { CardEditPageStyled, ExitIcon, RowWithIcon } from "./styled";
import { Text } from "../Text";
import { Team } from "../Icon";
import { Colors } from "../Global";
import { Grid } from "../Grid";
import { MemberItem } from "../MemberItem";
import { DateProject } from "../DateProject";
import { TasksList } from "../TasksList";
import { TaskProps, ProjectProps } from "../../types";

export type CardEditPageProps = {
  projectItem: ProjectProps;
  team?: string;
  members?: { name: string; link: string }[];
  open: boolean;
  activeCard: boolean;
  setOpenEditPage: () => void;
  taskList?: TaskProps[];
};

export const CardEditPage = ({
  team,
  members,
  open,
  activeCard,
  taskList,
  projectItem: { id, title, dueDate },
  setOpenEditPage,
  ...props
}: CardEditPageProps) => {
  return (
    <>
      {open && activeCard && (
        <CardEditPageStyled {...props}>
          <ExitIcon onClick={setOpenEditPage} />
          <Grid gap="12px">
            <Text textType="h2">{title}</Text>
            <DateProject dueDate={dueDate} />
            {team && (
              <RowWithIcon>
                <Team color={Colors.gray400} />
                <Text color={Colors.gray400}>{team} Team</Text>
              </RowWithIcon>
            )}
            {members && <MemberItem members={members} />}
            {taskList && <TasksList projectId={id} taskList={taskList} />}
          </Grid>
        </CardEditPageStyled>
      )}
    </>
  );
};
