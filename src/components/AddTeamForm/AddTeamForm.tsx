import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { TeamProps } from "../../types";
import { Grid } from "../Grid";
import { Input } from "../Form";
import { Button } from "../Button";

export type AddTeamFormProps = {
  onSubmitFunc: (data: TeamProps) => void;
};

export const AddTeamForm = ({ onSubmitFunc }: AddTeamFormProps) => {
  const methods = useForm({
    defaultValues: {
      name: "",
      members: [{ name: "", link: "" }],
    },
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitFunc)}>
        <Grid gap="16">
          <Input name="name" label="Name" type="text" />
          <Button>Submit</Button>
        </Grid>
      </form>
    </FormProvider>
  );
};
