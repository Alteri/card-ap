import styled from "styled-components";
import { Colors } from "../Global";
import { GridStyled } from "../Grid/styled";
import { TeamIcon } from "../TeamIcon";

export const WrapperStyled = styled.div`
  overflow: hidden;
`;

export const ProjectItemHeader = styled(GridStyled)`
  position: relative;
  padding-bottom: 24px;
  border-bottom: 1px solid ${Colors.gray200};
`;

export const RowWithIcon = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 12px;
`;

export const MembersWrapper = styled.div`
  display: flex;
  grid-gap: 8px;
`;

export const MemberItem = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

export const TeamIconStyled = styled(TeamIcon)`
  position: absolute;
  left: 0;
  top: -78px;
`;
