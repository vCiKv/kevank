import { twMerge } from "tailwind-merge";
import { default as NextLink } from "next/link";

interface BoxType {
  children: React.ReactNode;
  className?: string;
}
interface LinkType {
  title: React.ReactNode;
  href?: string | { [key: string]: any };
  className?: string;
  isActive?: boolean;
  type?: keyof typeof linkTypes;
}
const linkTypes = {
  ghost: "",
  nav: "font-bold hover:scale-105",
  default: "font-bold text-md",
};
export const Box = (props: BoxType) => {
  return (
    <div className={twMerge("rounded-md px-4 pt-4 pb-6 bg-gradient-to-b to-primary/5 from-white/30 border from-60% border-white backdrop-blur-[3px] w-full", props?.className)}>
      {props.children}
    </div>
  );
};
export const Link = (props: LinkType) => {
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
