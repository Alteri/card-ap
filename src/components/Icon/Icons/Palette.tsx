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
        id="Filled"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={color}
      >
        <path d="M20.057,16.8l.1.1a1.912,1.912,0,0,0,1.769.521,1.888,1.888,0,0,0,1.377-1.177A11.924,11.924,0,0,0,24.08,11.7,12.155,12.155,0,0,0,12.5.007,12,12,0,0,0,.083,12a12.014,12.014,0,0,0,12,12c.338,0,.67-.022,1-.05a1,1,0,0,0,.916-1l-.032-3.588A3.567,3.567,0,0,1,20.057,16.8ZM17.115,8.05A1.5,1.5,0,1,1,16.05,9.885,1.5,1.5,0,0,1,17.115,8.05Zm-9.23,8.9A1.5,1.5,0,1,1,8.95,15.115,1.5,1.5,0,0,1,7.885,16.95Zm0-6A1.5,1.5,0,1,1,8.95,9.115,1.5,1.5,0,0,1,7.885,10.95Zm5-3A1.5,1.5,0,1,1,13.95,6.115,1.5,1.5,0,0,1,12.885,7.95Z" />
      </svg>
    </IconWrapper>
  );
};

export default Icon;