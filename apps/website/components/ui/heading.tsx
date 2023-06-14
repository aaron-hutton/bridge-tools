interface Props {
  children: string;
}

export function Heading({ children }: Props) {
  return <h2 className="mb-6 text-2xl font-bold">{children}</h2>;
}
