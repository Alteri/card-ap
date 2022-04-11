import React from "react";
import { Controller } from "react-hook-form";
import { InputStyled } from "./styled";
import { Text } from "../Text";
import { Grid } from "../Grid";
import { Colors } from "../Global";

export type InputProps = {
  label: string;
  type: string;
  name: string;
};

export const Input = ({ name, label, type }: InputProps) => {
  return (
    <label>
      <Grid gap="4px">
        <Text textType="caption">{label}</Text>
        <Controller
          name={name}
          rules={{ required: true }}
          render={({ field, formState: { errors, isSubmitted } }) => {
            const hasErrors = !!(isSubmitted && errors[name]);
            return (
              <>
                <InputStyled type={type} {...field} />
                {hasErrors && (
                  <Text textType="caption" color={Colors.red}>
                    This field is required.
                  </Text>
                )}
              </>
            );
          }}
        />
      </Grid>
    </label>
  );
};
