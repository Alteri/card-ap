import React from "react";
import { TaksIconStyled } from "./styled";
import { Phone, Camera, Box, Palette, Layout } from "../Icon";
import { Colors } from "../Global";

export type TeamIconProps = {
  iconId: number;
  color: string;
};

const getTeamTypeIcon = (iconId: number) => {
  switch (iconId) {
    case 1:
      return <Phone color={Colors.white} />;
    case 2:
      return <Camera color={Colors.white} />;
    case 3:
      return <Box color={Colors.white} />;
    case 4:
      return <Palette color={Colors.white} />;
    case 5:
      return <Layout color={Colors.white} />;
    default:
      return <Palette color={Colors.white} />;
  }
};

export const TeamIcon = ({ iconId, color, ...props }: TeamIconProps) => {
  const num = Number(iconId);
  return (
    <TaksIconStyled iconId={iconId} color={color} {...props}>
      {iconId && getTeamTypeIcon(num)}
    </TaksIconStyled>
  );
};
