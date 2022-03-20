import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { AddCardFormStyled } from "./styled";
import { TaskType } from "../../types";
import { Input, Select } from "../Form";
import { Grid } from "../Grid";
import { Button } from "../Button";
import { CardProps } from "../../types";

export type AddCardFormProps = {
  onSubmitFunc: (data: CardProps) => void;
};

export const AddCardForm = ({ onSubmitFunc }: AddCardFormProps) => {
  const groupOptions = Object.values(TaskType);

  const methods = useForm({
    defaultValues: {
      title: "",
      group: TaskType.AppDevelopment,
    },
  });

  return (
    <AddCardFormStyled>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmitFunc)}>
          <Grid gap="16">
            <Input name="title" label="Title" type="text" />
            <Select name="group" label="Group" options={groupOptions} />
            <Button>Submit</Button>
          </Grid>
        </form>
      </FormProvider>
    </AddCardFormStyled>
  );
};
