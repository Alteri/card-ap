import React from "react";
import { useDispatch } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { AddCardFormStyled } from "./styled";
import { addCard } from "../../action";
import { CardProps, TaskType } from "../../types";
import { Input, Select } from "../Form";
import { Grid } from "../Grid";
import { Button } from "../Button";

export const AddCardForm = () => {
  const dispatch = useDispatch();
  const groupOptions = Object.values(TaskType);

  const methods = useForm({
    defaultValues: {
      title: "",
      group: TaskType.AppDevelopment,
    },
  });

  const onSubmit = (data: CardProps) => dispatch(addCard(data));

  return (
    <AddCardFormStyled>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
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
