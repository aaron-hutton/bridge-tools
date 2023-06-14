"use client";

import Link from "next/link";

import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { SiteConfig } from "@/config/site";

const tools: { title: string; href: string; description: string }[] = [
  {
    title: "Deal Generator",
    href: "/tools/deal-generator",
    description: "Generate a deal based on some requirements.",
  },
  {
    title: "Double Dummy Solver",
    href: "/tools/double-dummy",
    description: "Calculate the double dummy solution for a deal.",
  },
  {
    title: "Simulator",
    href: "/tools/simulator",
    description: "Fix one or two hands and simulate a contract.",
  },
  {
    title: "Deal Builder",
    href: "/tools/deal-builder",
    description: "Generate and annotate the play of a hand.",
  },
];

const documentation: { title: string; href: string; description: string }[] = [
  {
    title: "@bridge-tools/core",
    href: "/docs/core",
    description:
      "The main library including type definitions and useful functions.",
  },
  {
    title: "@bridge-tools/website",
    href: "/docs/website",
    description: "Information about this website.",
  },
  {
    title: "@bridge-tools/generator",
    href: "/docs/generator",
    description: "The deal generation library.",
  },
  {
    title: "@bridge-tools/dd",
    href: "/docs/dd",
    description: "The Typescript native double-dummy library.",
  },
];

export function MainNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {SiteConfig.name}
        </span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {tools.map((tool) => (
                  <ListItem
                    key={tool.title}
                    title={tool.title}
                    href={tool.href}
                    text={tool.description}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Documentation</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {documentation.map((doc) => (
                  <ListItem
                    key={doc.title}
                    title={doc.title}
                    href={doc.href}
                    text={doc.description}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

interface ListItemProps {
  title: string;
  href: string;
  text: string;
}
function ListItem({ title, text, href }: ListItemProps) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {text}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
