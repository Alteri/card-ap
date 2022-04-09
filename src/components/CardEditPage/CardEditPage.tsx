import React from "react";
import { CardEditPageStyled, ExitIcon, RowWithIcon } from "./styled";
import { Text } from "../Text";
import { Team } from "../Icon";
import { Colors } from "../Global";
import { Grid } from "../Grid";
import { MemberItem } from "../MemberItem";
import { DateProject } from "../ProjectItem/ProjectItemView";
import { TasksList } from "../TasksList";
import { TaskProps } from "../../types";

export type CardEditPageProps = {
  name: string;
  team?: string;
  members?: { name: string; link: string }[];
  dueDate?: string;
  open: boolean;
  activeCard: boolean;
  setOpenEditPage: () => void;
  taskList?: TaskProps[];
};

export const CardEditPage = ({
  name,
  team,
  members,
  dueDate,
  open,
  activeCard,
  taskList,
  setOpenEditPage,
  ...props
}: CardEditPageProps) => {
  return (
    <>
      {open && activeCard && (
        <CardEditPageStyled {...props}>
          <ExitIcon onClick={setOpenEditPage} />
          <Grid gap="12">
            <Text textType="h2">{name}</Text>
            <DateProject dueDate={dueDate} />
            {team && (
              <RowWithIcon>
                <Team color={Colors.gray400} />
                <Text color={Colors.gray400}>{team} Team</Text>
              </RowWithIcon>
            )}
            {members && <MemberItem members={members} />}
            {taskList && <TasksList taskList={taskList} />}
          </Grid>
        </CardEditPageStyled>
      )}
    </>
  );
};
