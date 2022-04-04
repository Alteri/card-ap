import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { CardProps, TeamProps } from "../../types";
import { Input, Select } from "../Form";
import { Grid } from "../Grid";
import { Button } from "../Button";

export type AddCardFormProps = {
  onSubmitFunc: (data: CardProps) => void;
  teamList: TeamProps[];
  nextCardId: number;
};

export const AddCardForm = ({
  onSubmitFunc,
  teamList,
  nextCardId,
}: AddCardFormProps) => {
  const filterTeamList = teamList.map(({ name, id }) => ({
    value: id,
    label: name,
  }));

  const methods = useForm<CardProps>({
    defaultValues: {
      id: nextCardId,
      title: "",
      teamId: 1,
      dueDate: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitFunc)}>
        <Grid gap="16">
          <Input name="title" label="Title" type="text" />
          <Select name="teamId" label="Team" options={filterTeamList} />
          <Input name="dueDate" label="Due date" type="date" />
          <Button>Submit</Button>
        </Grid>
      </form>
    </FormProvider>
  );
};
