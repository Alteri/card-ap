import styled from "styled-components";
import { Colors } from "../Global";
import { ChevronDown } from "../Icon";

export const InputStyled = styled.input`
  width: 100%;
  border: 1px solid ${Colors.gray400};
  padding: 8px;
  border-radius: 4px;

  &:focus {
    border-color: ${Colors.primary};
    outline: none;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  display: block;
  border: 1px solid ${Colors.gray400};
  padding: 8px;
  border-radius: 4px;

  &:focus {
    border-color: ${Colors.primary};
  }
`;

export const SelectStyled = styled.select`
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: 0;
  appearance: none;

  &:focus {
    outline: none;
  }
`;

export const SelectIcon = styled(ChevronDown)`
  position: absolute;
  top: 6px;
  right: 6px;
`;
