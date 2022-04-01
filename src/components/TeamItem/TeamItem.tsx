import React from "react";
import { TeamItemStyled } from "./styled";
import { StateProps } from "../../reducer";
import { MemberItem } from "../MemberItem";
import { Text } from "../Text";
import { Colors } from "../Global";

export type TeamItemProps = { teamList: StateProps["teams"] };

export const TeamItem = ({ teamList }: TeamItemProps) => {
  return (
    <>
      {teamList.map(({ name, members }, index) => (
        <TeamItemStyled key={index} as="li" gap="16">
          <div>
            <Text textType="caption" color={Colors.gray400}>
              Team
            </Text>
            <Text textType="h3">{name}</Text>
          </div>
          <MemberItem members={members} />
        </TeamItemStyled>
      ))}
    </>
  );
};
