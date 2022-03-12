import React, { ReactNode } from "react";
import { TextStyled } from "./styled";

const textTypes = ["h1", "h2", "h3", "h4", "h5", "p", "caption"] as const;
export type TextType = typeof textTypes[number];

const textTypeToTag = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  p: "p",
  caption: "p",
} as const;

export type TextProps = {
  children: ReactNode;
  textType?: TextType;
  color?: string;
  fontWeight?: "200" | "400" | "600";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";
};

export const Text = ({
  children,
  color,
  fontWeight,
  textType = "p",
  as,
  ...props
}: TextProps) => {
  return (
    <TextStyled
      as={as || textTypeToTag[textType]}
      color={color}
      fontWeight={fontWeight}
      textType={textType}
      {...props}
    >
      {children}
    </TextStyled>
  );
};
