import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  buttons?: ReactNode;
}

export function BoardBackground({
  children,
  className = "",
  onClick = () => {},
}: Props) {
  const outerClasses = cn(
    "bg-primary w-[800px] max-w-full border border-black p-2 shadow-md",
    className
  );
  return (
    <div className={outerClasses} onClick={onClick}>
      <div className="grid w-full grid-cols-3 grid-rows-3 gap-2">
        {children}
      </div>
    </div>
  );
}
