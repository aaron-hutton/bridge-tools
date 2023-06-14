import { Box } from "@/components/ui-components/box";

interface Props {
  description: string;
}

export function DescriptionBox({ description }: Props) {
  return (
    <Box
      titleComponent={
        <div className="flex w-full justify-center text-xl">Description</div>
      }
      className="h-full w-full pb-4 md:w-1/3"
    >
      <div className="flex grow flex-row p-4 text-justify">{description}</div>
    </Box>
  );
}
