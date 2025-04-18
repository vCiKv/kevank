import { twMerge } from "tailwind-merge";
import { default as NextLink } from "next/link";


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
  default: "font-bold text-md p-2 rounded-lg hover:scale-100 scale-95 hover:bg-primary/20 text-center flex-inline flex-nowrap hover:text-white",
  nav: "font-bold text-md p-2 rounded-md hover:scale-100 scale-95 hover:bg-primary/20 text-center flex-inline flex-nowrap",

};

function Link(props: LinkType) {
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
        <span className="ml-3 inline-flex items-center justify-center size-6 p-0.5 rounded-full bg-primary/80 text-white">
          {"->"}
        </span>}
    </NextLink>
  );
}
export default Link