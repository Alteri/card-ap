import React from "react";
import { Avatar, ItemWrapper, MembersWrapper } from "./styled";

export type MemberItemProps = {
  members?: { name: string; link: string }[];
};

export const MemberItem = ({ members }: MemberItemProps) => {
  return (
    <MembersWrapper gap="8">
      {members?.map(({ link }, index) => (
        <ItemWrapper key={index}>
          {link && <Avatar src={link} key={index} width="100%" />}
        </ItemWrapper>
      ))}
    </MembersWrapper>
  );
};
