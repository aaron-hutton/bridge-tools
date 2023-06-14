import { Heading } from "@/components/ui/heading";
import { Metadata } from "next";
import { Generator } from "./(components)/generator";

export const metadata: Metadata = {
  title: "Deal Generator",
};

export default function DealGenerator() {
  return (
    <main className="mx-auto max-w-3xl px-8 py-16 2xl:px-0">
      <Heading>Deal Generator</Heading>
      <Generator />
    </main>
  );
}
