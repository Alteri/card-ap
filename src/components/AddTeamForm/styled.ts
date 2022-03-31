import styled from "styled-components";
import { Plus } from "../Icon";
import { Colors } from "../Global";

export const NewMemberButton = styled(Plus)`
  border-radius: 50%;
  border: 2px solid ${Colors.gray400};
  cursor: pointer;
`;
