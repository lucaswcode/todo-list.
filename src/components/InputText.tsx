import type React from "react";
import { InputTextVariants } from "../utils/input-text-variants";
import { type VariantProps, cx } from "class-variance-authority";
import { textVariants } from "../utils/text-variants";

interface TextInputProps
  extends VariantProps<typeof InputTextVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {}

export function InputText({
  size,
  disabled,
  className,
  ...props
}: TextInputProps) {
  return (
    <input
      className={cx(
        InputTextVariants({ size, disabled }),
        textVariants(),
        className
      )}
      {...props}
    />
  );
}
