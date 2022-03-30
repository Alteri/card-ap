import styled from "styled-components";
import { Grid } from "../Grid";

export const MembersWrapper = styled(Grid)`
  display: flex;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 8px;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;
