import React from "react";

import { Icon } from "./Icon";
import { Text } from "./Text";
import { type VariantProps } from "class-variance-authority";
import {
  buttonVariant,
  buttonIconVariants,
  buttonTextVariants,
} from "../utils/button-variants";

interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariant> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
}

export function Button({
  variant,
  size,
  disabled,
  className,
  children,
  icon: IconComponent,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariant({ variant, size, disabled, className })}
      {...props}
    >
      {IconComponent && (
        <Icon
          svg={IconComponent}
          className={buttonIconVariants({ variant, size })}
        />
      )}
      <Text variant="body-md-bold" className={buttonTextVariants({ variant })}>
        {children}
      </Text>
    </button>
  );
}
