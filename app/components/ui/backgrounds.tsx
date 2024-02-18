import { cn } from "@/utils/cn";
import React from "react";

type GridBackgroundProps = {
  children: React.ReactNode;
  className?: string;
};

export function GridBackground({ children, className }: GridBackgroundProps) {
  return (
    <div
      className={cn(
        `h-full w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative`,
        className
      )}
    >
      <div
        className={cn(
          `absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]`,
          className
        )}
      ></div>
      {children}
    </div>
  );
}
