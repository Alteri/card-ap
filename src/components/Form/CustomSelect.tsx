import React from "react";
import { Controller } from "react-hook-form";
import {
  CustomSelectStyled,
  CustomSelectItem,
  CustomInput,
  CustomCheck,
} from "./styled";
import { Text } from "../Text";
import { Grid } from "../Grid";
import { Colors } from "../Global";

export type CustomSelectProps = {
  label: string;
  name: string;
  options: { value: number; label: JSX.Element }[];
};

export const CustomSelect = ({ name, label, options }: CustomSelectProps) => {
  return (
    <Grid gap="4px">
      <Text textType="caption">{label}</Text>
      <Controller
        name={name}
        render={({ field }) => {
          return (
            <CustomSelectStyled>
              {options.map(({ value, label }, index) => (
                <CustomSelectItem key={index} isChecked={field.value == value}>
                  <CustomInput
                    type="radio"
                    {...field}
                    value={value}
                    name={name}
                  />
                  <div>{label}</div>
                  {field.value == value && <CustomCheck color={Colors.green} />}
                </CustomSelectItem>
              ))}
            </CustomSelectStyled>
          );
        }}
      />
    </Grid>
  );
};
