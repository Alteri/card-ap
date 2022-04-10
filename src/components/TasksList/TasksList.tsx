import React from "react";
import { useDispatch } from "react-redux";
import { TasksListStyled } from "./styled";
import { TaskProps } from "../../types";
import { addTask } from "../../actions/taskActions";
import { Text } from "../Text";
import { TaskItem } from "./TaskItem";
import { AddTaskForm } from "../AddTaskForm";

type TasksListProps = {
  taskList: TaskProps[];
  projectId: number;
};

export const TasksList = ({ taskList, projectId }: TasksListProps) => {
  const dispatch = useDispatch();
  const progressAllTasks = taskList?.filter(({ complete }) => complete).length;
  const progressResult = progressAllTasks + "/" + taskList.length;

  const onSubmit = (data: TaskProps) => {
    dispatch(addTask(data));
  };

  return (
    <>
      <Text textType="h4">To do List</Text>
      <Text textType="caption">Result: {progressResult}</Text>
      <TasksListStyled as="ul" gap="24px">
        {taskList.map((task, index) => (
          <TaskItem task={task} key={index} taskNumber={index} />
        ))}
        <AddTaskForm onSubmitFunc={onSubmit} projectId={projectId} />
      </TasksListStyled>
    </>
  );
};
