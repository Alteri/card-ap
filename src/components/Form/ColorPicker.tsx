import React from "react";
import { Controller } from "react-hook-form";
import { ColorPickerStyled } from "./styled";
import { Text } from "../Text";
import { Grid } from "../Grid";

export type ColorPickerProps = {
  label: string;
  name: string;
};

export const ColorPicker = ({ label, name }: ColorPickerProps) => {
  return (
    <label>
      <Grid gap="4px">
        <Text textType="caption">{label}</Text>
        <Controller
          name={name}
          render={({ field }) => {
            return <ColorPickerStyled {...field} />;
          }}
        />
      </Grid>
    </label>
  );
};
