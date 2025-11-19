import React from "react";

import { Icon } from "./Icon";
import { Text } from "./Text";
import { type VariantProps } from "class-variance-authority";
import {
  buttonVariant,
  buttonIconVariants,
  buttonTextVariants,
} from "../utils/button-variants";
import SpinnerIcon from "../assets/icons/spinner.svg?react";

interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariant> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
  handling?: boolean;
}

export function Button({
  variant,
  size,
  disabled,
  className,
  children,
  handling,
  icon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariant({
        variant,
        size,
        disabled,
        handling,
        className,
      })}
      {...props}
    >
      {icon && (
        <Icon
          svg={handling ? SpinnerIcon : icon}
          animate={handling}
          className={buttonIconVariants({ variant, size })}
        />
      )}
      <Text variant="body-md-bold" className={buttonTextVariants({ variant })}>
        {children}
      </Text>
    </button>
  );
}
