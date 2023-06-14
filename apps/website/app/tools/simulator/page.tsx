import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simulator",
};

export default function Simulator() {
  return (
    <>
      <Heading>Simulator</Heading>
      <Paragraph>The simulator has not been built yet.</Paragraph>
    </>
  );
}
