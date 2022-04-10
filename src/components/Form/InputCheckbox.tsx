import React from "react";
import { Controller } from "react-hook-form";
import { InputStyled } from "./styled";

export type InputProps = {
  name: string;
  onChange: () => void;
};

export const InputCheckbox = ({ name, onChange, ...props }: InputProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => {
        return (
          <InputStyled
            type="checkbox"
            defaultChecked={field.value}
            onChange={() => {
              field.onChange(!field.value);
              onChange();
            }}
            {...props}
          />
        );
      }}
    />
  );
};
