import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { NewMemberButton } from "./styled";
import { TeamProps } from "../../types";
import { Grid } from "../Grid";
import { Input, CustomSelect, ColorPicker } from "../Form";
import { Button } from "../Button";
import { Text } from "../Text";
import { Colors } from "../Global";
import { Phone, Camera, Box, Palette, Layout } from "../Icon";

export type AddTeamFormProps = {
  onSubmitFunc: (data: TeamProps) => void;
  nextTeamId: number;
};

const iconArr = [
  { value: 1, label: <Phone /> },
  { value: 2, label: <Camera /> },
  { value: 3, label: <Box /> },
  { value: 4, label: <Palette /> },
  { value: 5, label: <Layout /> },
];

export const AddTeamForm = ({ onSubmitFunc, nextTeamId }: AddTeamFormProps) => {
  const [membersQuantity, setMembersQuantity] = useState(1);
  const methods = useForm<TeamProps>({
    defaultValues: {
      id: nextTeamId,
      name: "",
      color: "#000",
      iconId: 0,
      members: [{ name: "", link: "" }],
    },
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitFunc)}>
        <Grid gap="16">
          <Input name="name" label="Name" type="text" />
          <ColorPicker name="color" label="Color" />
          <CustomSelect label="Icon" name="iconId" options={iconArr} />
          <Text textType="h4">Members</Text>
          {[...Array(membersQuantity)].map((_, index) => (
            <Grid key={index} gap="8">
              <Text textType="caption">Member {index + 1}</Text>

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
