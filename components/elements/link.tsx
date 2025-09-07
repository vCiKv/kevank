import { twMerge } from "tailwind-merge";
import { default as NextLink } from "next/link";
import { ArrowRight } from '@icon-park/react';
interface LinkType {
  title: React.ReactNode;

  href?: string | { [key: string]: any };
  className?: string;
  isActive?: boolean;
  type?: keyof typeof linkTypes;
}
const linkTypes = {
  none: "",
  // nav: "font-bold hover:scale-105",
  // default: "font-bold text-md p-2 rounded-lg hover:scale-100 scale-95 hover:bg-primary/20 text-center flex-inline flex-nowrap hover:text-white",
  default: "inline-flex items-center rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-all shadow-link cursor-pointer group gap-3",
  nav: "font-bold text-md p-2 rounded-md hover:scale-100 scale-95 hover:bg-primary/20 text-center flex-inline flex-nowrap cursor-pointer",
  subNav: "text-sm rounded-md hover:scale-100 scale-95 text-left px-1.5 hover:bg-primary flex-inline flex-nowrap font-NectoMono cursor-pointer",

};

export default function Link(props: LinkType) {
  const { className, type, title, href } = props;
  return (
    <NextLink
      className={twMerge(
        linkTypes[type ?? "default"],
        className ?? ""
      )}
      href={href ?? "#"}
    >
      {title}
      {(type === undefined || type === "default") &&
        <span className="group-hover:pl-2 text-lg  transition-all inline-flex items-center justify-center size-6 p-0.5 rounded-full bg-primary/80 text-white">
          {/* {"→"} */}
          <ArrowRight />
        </span>}
    </NextLink>
  );
}