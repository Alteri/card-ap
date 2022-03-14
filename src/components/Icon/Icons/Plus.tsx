import React from "react";
import { IconProps } from "../types";
import { IconWrapper } from "../styled";
import { Colors } from "../../Global";

const Icon = ({
  color = Colors.white,
  size = "20px",
  className,
  ...rest
}: IconProps) => {
  return (
    <IconWrapper size={size} className={className} {...rest}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-plus"
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    </IconWrapper>
  );
};

export default Icon;
