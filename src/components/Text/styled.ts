import styled, { css } from "styled-components";
import { TextType } from "./Text";
import { Colors } from "../Global";

const getTextTypeStyle = (textType: TextType) => {
  switch (textType) {
    case "h1":
      return css`
        font-size: 36px;
        font-weight: 600;
      `;
    case "h2":
      return css`
        font-size: 28px;
        font-weight: 600;
      `;
    case "h3":
      return css`
        font-size: 24px;
      `;
    case "h4":
      return css`
        font-size: 22px;
      `;
    case "h5":
      return css`
        font-size: 20px;
      `;
    case "caption":
      return css`
        font-size: 14px;
      `;
    default:
      return css`
        font-size: 18px;
      `;
  }
};

export const TextStyled = styled.p<{
  textType?: TextType;
  color?: string;
  fontWeight?: "200" | "400" | "600";
}>`
  line-height: 1.2em;
  width: 100%;
  ${({ textType }) => textType && getTextTypeStyle(textType)}
  ${({ color }) => `color: ${color || Colors.black};`}
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
`;
