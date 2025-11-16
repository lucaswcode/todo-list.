import React from "react";
import { type VariantProps, cx } from "class-variance-authority";
import {
  badgeVariants,
  badgeTextVariants,
  badgeSkeletonVariants,
} from "../utils/badge-variants";

import { Text } from "./Text";
import { Skeleton } from "./Skeleton";

interface BadgeProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof badgeVariants> {
  loading?: boolean;
}

export function Badge({
  variant,
  size,
  className,
  children,
  loading,
  ...props
}: BadgeProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="full"
        className={cx(
          badgeVariants({ variant: "none" }),
          badgeSkeletonVariants({ size }),
          className
        )}
      />
    );
  }

  return (
    <div className={badgeVariants({ variant, size, className })} {...props}>
      <Text variant="body-sm-bold" className={badgeTextVariants({ variant })}>
        {children}
      </Text>
    </div>
  );
}
