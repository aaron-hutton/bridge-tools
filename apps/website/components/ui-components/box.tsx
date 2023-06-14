import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  titleComponent: ReactNode;
  children: ReactNode;

  selected?: boolean;
  onClick?: () => void;
  thickBorder?: boolean;
  className?: string;
}

export function Box({
  titleComponent,
  children,
  thickBorder = false,
  selected = false,
  className = "",
  onClick,
}: Props) {
  const boxClasses = cn(
    {
      "border-black text-black rounded-lg bg-gray-300 shadow-md w-full flex flex-col":
        true,
      border: !thickBorder,
      "border-2": thickBorder,
    },
    className
  );

  const nameClasses = cn({
    "w-full rounded-t-md flex items-center h-8 z-10 text-lg": true,
    "bg-gray-400": !selected,
    "bg-yellow-400": selected,
  });

  return (
    <div
      onClick={(e) => {
        if (onClick !== undefined) {
          e.stopPropagation();
          onClick();
        }
      }}
      className={boxClasses}
    >
      <div className={nameClasses}>{titleComponent}</div>
      <hr className="mx-auto w-full border-black" />
      {children}
    </div>
  );
}
