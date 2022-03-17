import React from "react";
import { Controller } from "react-hook-form";
import { InputStyled } from "./styled";
import { Text } from "../Text";
import { Grid } from "../Grid";

export type InputProps = {
  label: string;
  type: string;
  name: string;
};

export const Input = ({ name, label, type }: InputProps) => {
  return (
    <label>
      <Grid gap="4">
        <Text textType="caption">{label}</Text>
        <Controller
          name={name}
          render={({ field }) => {
            return <InputStyled type={type} {...field} />;
          }}
        />
      </Grid>
    </label>
  );
};
