import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { TaskProps } from "../../types";
import { Grid } from "../Grid";
import { Input } from "../Form";
import { Button } from "../Button";

export type AddTaskForm = {
  onSubmitFunc: (data: TaskProps) => void;
  projectId: number;
};

export const AddTaskForm = ({ onSubmitFunc, projectId }: AddTaskForm) => {
  const methods = useForm<TaskProps>({
    defaultValues: {
      id: new Date().getTime(),
      title: "",
      description: "",
      projectId: projectId,
      complete: false,
    },
  });

  methods.setValue("id", new Date().getTime());

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitFunc)}>
        <Grid gap="16px">
          <Input name="title" label="Title" type="text" />
          <Input name="description" label="Description" type="text" />
          <Button>Submit</Button>
        </Grid>
      </form>
    </FormProvider>
  );
};
