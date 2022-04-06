import styled from "styled-components";
import { Colors } from "../Global";
import { X } from "../Icon";

export const PopupModalStyled = styled.div`
  z-index: 4;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
`;

export const Content = styled.div`
  background: ${Colors.white};
  border-radius: 32px 32px 0 0;
  padding: 24px;
  width: 100%;
  margin-top: 100vh;
  position: relative;
`;

export const ExitIcon = styled(X)`
  position: absolute;
  right: 24px;
  top: 24px;
  cursor: pointer;
`;
