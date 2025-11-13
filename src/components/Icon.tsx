import React from "react";
import { type VariantProps } from "class-variance-authority";
import { iconVariantes } from "../utils/icon-variants";

interface IconProps
  extends React.ComponentProps<"svg">,
    VariantProps<typeof iconVariantes> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

export function Icon({
  svg: SvgComponent,
  animate,
  className,
  ...props
}: IconProps) {
  return (
    <SvgComponent
      className={iconVariantes({ animate, className })}
      {...props}
    />
  );
}
