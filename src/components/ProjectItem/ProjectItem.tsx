import React from "react";
import { ProjectProps, TeamProps, TaskProps } from "../../types";
import { ProjectItemView } from "./ProjectItemView";

export type ProjectItemProps = {
  projectList: ProjectProps[];
  teamList: TeamProps[];
  taskList: TaskProps[];
};

export const ProjectItem = ({
  projectList,
  teamList,
  taskList,
}: ProjectItemProps) => {
  return (
    <>
      {projectList?.length
        ? projectList.map((project, index) => (
            <ProjectItemView
              teamList={teamList}
              taskList={taskList}
              projectItem={project}
              key={index}
            />
          ))
        : null}
    </>
  );
};
