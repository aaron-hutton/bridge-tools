import { Icons } from "@/components/icons";
import { SiteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-8 md:h-24 md:flex-row 2xl:px-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo className="hidden h-6 w-6 md:inline-block" />
          <p className="text-muted-foreground text-center text-sm leading-loose md:text-left">
            Copyright{" "}
            <a
              href={"https://aaronhutton.co.uk"}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Aaron Hutton
            </a>
            . The source code is available on{" "}
            <a
              href={SiteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
