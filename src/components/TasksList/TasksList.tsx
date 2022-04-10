import React from "react";
import { TasksListStyled } from "./styled";
import { TaskProps } from "../../types";
import { Text } from "../Text";
import { TaskItem } from "./TaskItem";

type TasksListProps = {
  taskList: TaskProps[];
};

export const TasksList = ({ taskList }: TasksListProps) => {
  return (
    <>
      <Text textType="h4">To do List</Text>
      <TasksListStyled as="ul" gap="24">
        {taskList.map((task, index) => (
          <TaskItem task={task} key={index} />
        ))}
      </TasksListStyled>
    </>
  );
};
