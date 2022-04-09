import React from "react";
import { ProjectProps, TeamProps, TaskProps } from "../../types";
import { ProjectItemView } from "./ProjectItemView";

export type ProjectItemProps = {
  itemList: ProjectProps[];
  teamList: TeamProps[];
  taskList: TaskProps[];
};

export const ProjectItem = ({
  itemList,
  teamList,
  taskList,
}: ProjectItemProps) => {
  return (
    <>
      {itemList.map(({ title, teamId, dueDate, id }, index) => (
        <ProjectItemView
          teamList={teamList}
          taskList={taskList}
          title={title}
          teamId={teamId}
          dueDate={dueDate}
          id={id}
          key={index}
        />
      ))}
    </>
  );
};
