import React from "react";
import {
  TasksListStyled,
  ItemListStyled,
  ItemHeaderStyled,
  TaskId,
  CompleteWrapper,
  TitleWrapper,
} from "./styled";
import { TaskProps } from "../../types";
import { Text } from "../Text";
import { Colors } from "../Global";
import { Check } from "../Icon";

type TasksListProps = {
  taskList: TaskProps[];
};

export const TasksList = ({ taskList }: TasksListProps) => {
  return (
    <>
      <Text textType="h4">To do List</Text>
      <TasksListStyled as="ul" gap="24">
        {taskList.map(({ id, title, description, complete }) => (
          <ItemListStyled key={id} as="li" gap="8">
            <ItemHeaderStyled>
              <TitleWrapper gap="8">
                <TaskId color={Colors.white} textType="caption">
                  {id}
                </TaskId>
                <Text>{title}</Text>
              </TitleWrapper>
              <CompleteWrapper complete={complete}>
                <Check color={complete ? Colors.white : Colors.gray400} />
              </CompleteWrapper>
            </ItemHeaderStyled>
            <Text textType="caption" color={Colors.gray400}>
              {description}
            </Text>
          </ItemListStyled>
        ))}
      </TasksListStyled>
    </>
  );
};
