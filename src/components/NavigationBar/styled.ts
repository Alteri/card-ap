import styled from "styled-components";
import { Colors } from "../Global";

export const NavigationBar = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 50px;
  position: sticky;
  bottom: 0;
  background: ${Colors.primaryLight};
  border-radius: 32px 32px 0 0;
  z-index: 1;
  margin-top: 20px;
`;
