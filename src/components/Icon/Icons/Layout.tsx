import React from "react";
import { IconProps } from "../types";
import { IconWrapper } from "../styled";
import { Colors } from "../../Global";

const Icon = ({
  color = Colors.black,
  size = "20px",
  className,
  ...rest
}: IconProps) => {
  return (
    <IconWrapper size={size} className={className} {...rest}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={color}
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M16 21V10h5v10a1 1 0 0 1-1 1h-4zm-2 0H4a1 1 0 0 1-1-1V10h11v11zm7-13H3V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4z" />
      </svg>
    </IconWrapper>
  );
};

export default Icon;
