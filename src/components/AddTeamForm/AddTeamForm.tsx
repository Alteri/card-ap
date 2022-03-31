import React, { useState, Fragment } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { TeamProps } from "../../types";
import { Grid } from "../Grid";
import { Input } from "../Form";
import { Button } from "../Button";
import { Text } from "../Text";

export type AddTeamFormProps = {
  onSubmitFunc: (data: TeamProps) => void;
};

export const AddTeamForm = ({ onSubmitFunc }: AddTeamFormProps) => {
  const [membersQuantity, setMembersQuantity] = useState(3);
  const methods = useForm({
    defaultValues: {
      name: "",
      members: [{ name: "", link: "" }],
    },
  });

  const { register } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitFunc)}>
        <Grid gap="16">
          <Input name="name" label="Name" type="text" />
          <Text>Members</Text>
          {[...Array(membersQuantity)].map((_, index) => (
            <Fragment key={index}>
              <Text>Members {index + 1}</Text>
              <Input
                {...register(`members.${index}.name`)}
                label="Name"
                type="text"
              />
              <Input
                {...register(`members.${index}.link`)}
                label="Avatar"
                type="text"
              />
            </Fragment>
          ))}
          <Button>Submit</Button>
        </Grid>
      </form>
    </FormProvider>
  );
};
