import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { ProjectProps, TeamProps } from "../../types";
import { Input, Select } from "../Form";
import { Grid } from "../Grid";
import { Button } from "../Button";

export type AddProjectFormProps = {
  onSubmitFunc: (data: ProjectProps) => void;
  teamList: TeamProps[];
  nextProjectId: number;
};

export const AddProjectForm = ({
  onSubmitFunc,
  teamList,
  nextProjectId,
}: AddProjectFormProps) => {
  const filterTeamList = teamList.map(({ name, id }) => ({
    value: id,
    label: name,
  }));

  const methods = useForm<ProjectProps>({
    defaultValues: {
      id: nextProjectId ? nextProjectId : 1,
      title: "",
      teamId: 1,
      dueDate: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitFunc)}>
        <Grid gap="16px">
          <Input name="title" label="Title" type="text" />
          <Select name="teamId" label="Team" options={filterTeamList} />
          <Input name="dueDate" label="Due date" type="date" />
          <Button>Submit</Button>
        </Grid>
      </form>
    </FormProvider>
  );
};
