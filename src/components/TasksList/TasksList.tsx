import React from "react";
import { useDispatch } from "react-redux";
import { TaskProps } from "types";
import { addTask } from "actions/taskActions";
import { TasksListStyled } from "./styled";
import { Text } from "../Text";
import { TaskItem } from "./TaskItem";
import { Grid } from "../Grid";
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
    <Grid gap="16px">
      {taskList.length ? (
        <>
          <div>
            <Text textType="h4">To do List</Text>
            <Text textType="caption">Result: {progressResult}</Text>
          </div>
          <TasksListStyled as="ul" gap="24px">
            {taskList.map((task, index) => (
              <TaskItem task={task} key={index} taskNumber={index} />
            ))}
          </TasksListStyled>
        </>
      ) : null}
      <Grid gap="8px">
        <Text>{taskList.length ? "Add new task" : "Add first task"}</Text>
        <AddTaskForm onSubmitFunc={onSubmit} projectId={projectId} />
      </Grid>
    </Grid>
  );
};
