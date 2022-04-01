import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { NewMemberButton } from "./styled";
import { TeamProps } from "../../types";
import { Grid } from "../Grid";
import { Input } from "../Form";
import { Button } from "../Button";
import { Text } from "../Text";
import { Colors } from "../Global";

export type AddTeamFormProps = {
  onSubmitFunc: (data: TeamProps) => void;
};

export const AddTeamForm = ({ onSubmitFunc }: AddTeamFormProps) => {
  const [membersQuantity, setMembersQuantity] = useState(1);
  const methods = useForm<TeamProps>({
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
          <Text textType="h4">Members</Text>
          {[...Array(membersQuantity)].map((_, index) => (
            <Grid key={index} gap="8">
              <Text>Member {index + 1}</Text>

              <Input name={`members.${index}.name`} label="Name" type="text" />
              <Input
                name={`members.${index}.link`}
                label="Avatar"
                type="text"
              />
            </Grid>
          ))}
          <NewMemberButton
            color={Colors.black}
            onClick={() => setMembersQuantity(membersQuantity + 1)}
          />
          <Button>Submit</Button>
        </Grid>
      </form>
    </FormProvider>
  );
};
