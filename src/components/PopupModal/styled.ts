import styled from "styled-components";
import { Colors } from "../Global";
import { X } from "../Icon";

export const PopupModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  z-index: 2;
`;

export const Content = styled.div`
  background: ${Colors.white};
  border-radius: 32px 32px 0 0;
  padding: 24px;
  height: 50vh;
  width: 100%;
  margin-top: 100vh;
  position: relative;
`;

export const ExitIcon = styled(X)`
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
`;
