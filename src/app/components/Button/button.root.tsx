import React from "react";
import { ButtonRootProps } from "./button.types";
import Link from "next/link";

import { twMerge } from "tailwind-merge";

export const ButtonRoot: React.FC<ButtonRootProps> = ({
  children,
  href,
  onClick,
  ...props
}) => {

  // absolute top-14 left-10 max-[780px]:left-2 max-[780px]:top-4
  const className = twMerge(
    "bg-[#656565] hover:bg-[#3a3a3a] transition-colors duration-250 py-2 px-10 rounded-lg",
    props.className
  );
  
  return (
    <div className={className}>
      {href ? (
        <Link href={href} className="flex flex-row gap-2 items-center">
          {children}
        </Link>
      ) : (
        <button onClick={onClick} className="flex flex-row gap-2 items-center">
          {children}
        </button>
      )}
    </div>
  );
};