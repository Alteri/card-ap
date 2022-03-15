const iconSizes = [
  "12px",
  "16px",
  "20px",
  "24px",
  "32px",
  "48px",
  "64px",
  "128px",
] as const;

export type IconSize = typeof iconSizes[number];

export type IconProps = {
  color?: string;
  size?: IconSize;
  className?: string;
  onClick?: () => void;
};
