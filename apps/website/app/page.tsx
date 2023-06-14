import { Icons } from "@/components/icons";
import { Heading } from "@/components/ui/heading";
import Link from "next/link";
import { Hero } from "./(components)/hero";
import { ToolCard } from "./(components)/tool-card";

export default function Home() {
  return (
    <>
      <div className="bg-background py-32">
        <div className="mx-auto my-8 max-w-6xl px-8 2xl:px-0">
          <Hero />
        </div>
      </div>
      <main className="mx-auto max-w-6xl space-y-32 px-8 py-32 2xl:px-0">
        <div className="space-y-4">
          <h2 className="mb-4 text-2xl font-bold">Welcome to Bridge Tools!</h2>
          <p className="mb-8">
            Bridge Tools is an open-source website and Typescript library that
            provides a collection of tools to enhance your experience with the
            game of Contract Bridge. Whether you&apos;re a beginner or an
            experienced player, these tools will assist you in analysing hands,
            practicing bidding strategies, and generating random hands for
            practice sessions.
          </p>
          <p>
            Click{" "}
            <Link href="/about" className="text-primary hover:text-primary">
              here
            </Link>{" "}
            to find out more.
          </p>
        </div>

        <div>
          <Heading>Our tools include</Heading>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Link href="/tools/deal-generator">
              <ToolCard
                title="Deal Generator"
                description="Generate a deal based on a set of requirements. Save and export the deal for later."
                icon={Icons.generator}
              />
            </Link>
            <Link href="/tools/double-dummy">
              <ToolCard
                title="Double Dummy Solver"
                description="Calculate the double dummy solution for a deal. Step through the play to see any mistakes that were made."
                icon={Icons.dd}
              />
            </Link>
            <Link href="/tools/simulator">
              <ToolCard
                title="Simulator"
                description="Fix one or two hands and simulate a contract. Work out the correct contract for two hands or the odds of a given contract succeeding."
                icon={Icons.simulator}
              />
            </Link>
            <Link href="/tools/deal-builder">
              <ToolCard
                title="Deal Builder"
                description="Generate and annotate the play of a hand. Useful for teaching or illustrating a hand for a write-up."
                icon={Icons.builder}
              />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
