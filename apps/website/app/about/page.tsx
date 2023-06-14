import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

export default function DealGenerator() {
  return (
    <main className="mx-auto max-w-3xl px-8 py-16 2xl:px-0">
      <Heading>About</Heading>
      <Paragraph>
        Welcome to the free open-source Bridge Tools website! This website is
        dedicated to providing a collection of powerful tools for the game of
        Bridge, developed by Aaron Hutton. Our mission is to improve the
        development of online Bridge websites by offering a comprehensive and
        efficient TypeScript library that empowers developers to create
        exceptional Bridge experiences for players worldwide.
      </Paragraph>
      <Paragraph>
        By developing a Typescript-native bridge library,{" "}
        <code>bridge-tools</code> provides a solid foundation for building
        robust and scalable online Bridge platforms. With its comprehensive set
        of features, developers can easily integrate advanced functionalities,
        such as hand generators or double-dummy analysis, to enhance the overall
        gameplay experience.
      </Paragraph>
      <Paragraph>
        We believe in the importance of open-source software and fostering a
        collaborative community. As an open-source project, the Bridge Tools
        library encourages developers to contribute, share ideas, and
        collectively improve the tools available. We welcome feedback,
        suggestions, and contributions from the Bridge community to ensure that
        these tools continue to evolve and meet the needs of players and
        developers.
      </Paragraph>
      <Paragraph>
        Thank you for being a part of our journey as we strive to provide
        exceptional tools for the game of Bridge. We invite you to explore the
        website, make use of the open-source library, and join us in shaping the
        future of online Bridge development.
      </Paragraph>
      <Paragraph>
        If you would like to get in touch you can email{" "}
        <a
          href="mailto:aaron@bridge-tools.com"
          className="text-primary hover:text-primary/90"
        >
          aaron@bridge-tools.com
        </a>
      </Paragraph>

      <Paragraph>
        If you would like to support development of this website and the
        associated library you can do so at the link below.
      </Paragraph>

      <div className="flex w-full justify-center">
        <Link href="https://www.buymeacoffee.com/bridgetools" target="_blank">
          <Image
            src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png"
            alt="Buy Me A Coffee"
            width={217}
            height={60}
            style={{ height: "60px !important", width: "217px !important" }}
          />
        </Link>
      </div>
    </main>
  );
}
