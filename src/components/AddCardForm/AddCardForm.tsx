import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { TaskType, CardProps, TeamProps } from "../../types";
import { Input, Select } from "../Form";
import { Grid } from "../Grid";
import { Button } from "../Button";

export type AddCardFormProps = {
  onSubmitFunc: (data: CardProps) => void;
  teamList: TeamProps[];
};

export const AddCardForm = ({ onSubmitFunc, teamList }: AddCardFormProps) => {
  const filterTeamList = teamList.map(({ name }) => ({
    value: name,
    label: name,
  }));

  const methods = useForm<CardProps>({
    defaultValues: {
      title: "",
      group: TaskType.AppDevelopment,
      team: "",
      dueDate: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitFunc)}>
        <Grid gap="16">
          <Input name="title" label="Title" type="text" />
          <Select name="team" label="Team" options={filterTeamList} />
          <Input name="dueDate" label="Due date" type="date" />
          <Button>Submit</Button>
        </Grid>
      </form>
    </FormProvider>
  );
};
