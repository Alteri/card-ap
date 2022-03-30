import React from "react";
import { Avatar, ItemWrapper, MembersWrapper } from "./styled";
import { StateProps } from "../../reducer";

export type MemberItemProps = {
  teamList?: StateProps["teams"];
  team?: string;
  members?: { name: string; link: string }[];
};

export const MemberItem = ({ teamList, team, members }: MemberItemProps) => {
  const filterTeamList = teamList?.filter(({ name }) => name == team)[0];
  const mapList = members ? members : filterTeamList?.members;
  return (
    <MembersWrapper gap="8">
      {mapList?.map(({ link }, index) => (
        <ItemWrapper key={index}>
          {link && <Avatar src={link} key={index} width="100%" />}
        </ItemWrapper>
      ))}
    </MembersWrapper>
  );
};
