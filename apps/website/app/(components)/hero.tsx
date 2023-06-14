import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="HeroSection">
      <div className="container mx-auto flex flex-col items-center space-x-8 md:flex-row">
        <div className="md:w-1/2">
          <h1 className="mb-4 text-4xl font-bold">Bridge Tools</h1>
          <p className="mb-6 text-lg">
            Enhance your Bridge experience with our open-source tools.
          </p>
          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <Link href="/tools">
              <Button>Tools</Button>
            </Link>
            <Link href="/docs">
              <Button>Documentation</Button>
            </Link>
          </div>
        </div>
        <div className="mt-6 md:mt-0 md:w-1/2">
          <Image
            src="/screenshot.jpg"
            alt="Contract Bridge Tools"
            width={1308}
            height={973}
            className="w-full rounded"
          />
        </div>
      </div>
    </div>
  );
}
