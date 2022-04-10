import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  ItemListStyled,
  ItemHeaderStyled,
  TaskId,
  CompleteWrapper,
  TitleWrapper,
  InputComplete,
} from "./styled";
import { Text } from "../Text";
import { Colors } from "../Global";
import { Check } from "../Icon";
import { TaskProps } from "../../types";
import { updateTaskComplete } from "../../actions/taskActions";

type TaskItemProps = {
  task: TaskProps;
  taskNumber: number;
};

export const TaskItem = ({
  task: { id, title, projectId, description, complete },
  taskNumber,
}: TaskItemProps) => {
  const dispatch = useDispatch();
  const methods = useForm<TaskProps>({
    defaultValues: {
      id: id,
      projectId: projectId,
      title: title,
      description: description,
      complete: complete,
    },
  });

  const onSubmit = (data: TaskProps) => {
    dispatch(updateTaskComplete(data));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <ItemListStyled key={id} as="li" gap="8px">
          <ItemHeaderStyled>
            <TitleWrapper gap="8px">
              <TaskId color={Colors.white} textType="caption">
                {taskNumber + 1}
              </TaskId>
              <Text>{title}</Text>
            </TitleWrapper>
            <CompleteWrapper complete={complete}>
              <InputComplete
                name="complete"
                onChange={methods.handleSubmit(onSubmit)}
              />
              <Check color={complete ? Colors.white : Colors.gray400} />
            </CompleteWrapper>
          </ItemHeaderStyled>
          <Text textType="caption" color={Colors.gray400}>
            {description}
          </Text>
        </ItemListStyled>
      </form>
    </FormProvider>
  );
};
