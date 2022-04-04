import React from "react";
import { TeamItemStyled, IdentyWrapper } from "./styled";
import { TeamProps } from "../../types";
import { MemberItem } from "../MemberItem";
import { Text } from "../Text";
import { Colors } from "../Global";
import { TeamIcon } from "../TeamIcon";

export type TeamItemProps = { teamList: TeamProps[] };

export const TeamItem = ({ teamList }: TeamItemProps) => {
  return (
    <>
      {teamList.map(({ name, members, color, iconId }, index) => (
        <TeamItemStyled key={index} as="li" gap="16">
          <IdentyWrapper>
            <TeamIcon iconId={iconId} color={color} />
            <div>
              <Text textType="caption" color={Colors.gray400}>
                Team
              </Text>
              <Text textType="h3">{name}</Text>
            </div>
          </IdentyWrapper>
          <MemberItem members={members} />
        </TeamItemStyled>
      ))}
    </>
  );
};
