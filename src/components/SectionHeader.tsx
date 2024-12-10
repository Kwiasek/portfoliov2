import { graffitiYouth } from "@/app/fonts/graffitiYouth";
import React from "react";

export const SectionHeader = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`${className} ${graffitiYouth.className} text-primary text-3xl md:text-4xl lg:text-5xl py-10 md:py-12 lg:py-14`}
    >
      {children}
    </div>
  );
};
