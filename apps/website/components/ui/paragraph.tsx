import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Paragraph({ children }: Props) {
  return <p className="my-6 text-justify">{children}</p>;
}
