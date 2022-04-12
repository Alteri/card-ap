import React, { ReactNode, useState, useEffect } from "react";
import { CardWrapperStyled } from "./styled";

type CardWrapperProps = {
  children: ReactNode;
  padding?: string;
  color?: string;
};

export const CardWrapper = ({ children, padding, color }: CardWrapperProps) => {
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    const onPageLoad = () => {
      setPlayAnimation(true);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <CardWrapperStyled
      padding={padding}
      animation={playAnimation}
      color={color}
    >
      {children}
    </CardWrapperStyled>
  );
};
