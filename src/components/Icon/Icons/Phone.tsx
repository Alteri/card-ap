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
        id="Filled"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={color}
      >
        <path d="M15,0H9A5.006,5.006,0,0,0,4,5V16H20V5A5.006,5.006,0,0,0,15,0Z" />
        <path d="M4,19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V18H4Zm8,1a1,1,0,1,1-1,1A1,1,0,0,1,12,20Z" />
      </svg>
    </IconWrapper>
  );
};

export default Icon;
