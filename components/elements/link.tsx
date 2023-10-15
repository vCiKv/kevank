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
  nav: "font-bold hover:scale-105",
  default: "font-bold text-md p-2 rounded-md hover:scale-100 scale-95 hover:bg-primary/20",
};

const Link = (props: LinkType) => {
  return (
    <NextLink
      className={twMerge(
        linkTypes[props.type ?? "default"],
        props.className ?? ""
      )}
      href={props.href ?? "#"}
    >
      {props.title}
    </NextLink>
  );
};
export default Link