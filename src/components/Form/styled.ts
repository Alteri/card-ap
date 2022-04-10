import styled from "styled-components";
import { HexColorPicker } from "react-colorful";
import { Colors, Breakpoints } from "../Global";
import { ChevronDown, Check } from "../Icon";

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

export const ColorPickerStyled = styled(HexColorPicker)`
  width: 100% !important;
`;

export const CustomSelectStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media (min-width: ${Breakpoints.Tablet}) {
    justify-content: flex-start;
    gap: 16px;
  }
`;

export const CustomSelectItem = styled.label<{ isChecked: boolean }>`
  border: 2px solid ${Colors.gray200};
  padding: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.5s ease;
  position: relative;

  ${({ isChecked }) => isChecked && `border-color: ${Colors.green}`}
`;

export const CustomCheck = styled(Check)`
  position: absolute;
  top: -10px;
  right: 4px;
  background: ${Colors.white};
`;

export const CustomInput = styled.input`
  display: none;
`;
