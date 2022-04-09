import styled from "styled-components";
import { Colors } from "../Global";
import { X } from "../Icon";

export const CardEditPageStyled = styled.div`
  position: fixed;
  overflow: auto;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  left: 0;
  top: 0;
  background: ${Colors.white};
  z-index: 4;
  padding: 16px;
`;

export const ExitIcon = styled(X)`
  position: absolute;
  cursor: pointer;
  right: 16px;
  top: 16px;
`;

export const RowWithIcon = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 12px;
`;
