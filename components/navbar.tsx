"use client";
import { twMerge } from "tailwind-merge";
import Link from "./elements/link";
import { default as NextLink } from "next/link";

import { useLayoutEffect, useState } from "react";

export const useScrollPositions = () => {
  const [scrollPosition, setPosition] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    function updatePosition() {
      if (typeof window !== "undefined") {
        setPosition({ x: window.scrollX, y: window.scrollY });
      }
    }

    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

interface NavMenuType {
  name: string;
  link: string;
}
const navMenu = [
  { name: "about", link: "/about" },
  { name: "projects", link: "/projects" },
  { name: "contact", link: "/contact" },
];
export function Logo(props: { size?: number }) {
  const { size } = props
  return (
    <NextLink href="/">
      <img
        alt="logo"
        src={"/logo.png"}
        width={size ?? 48}
        height={size ?? 48}

      />
    </NextLink>
  );
};

function MainNav(props: { isMini?: boolean; }) {
  return (
    <div
      className={twMerge(
        "z-50 px-1.5 md:px-6 py-3 text-white font-extrabold border backdrop-blur-[3px] border-white bg-primary/20",
        props.isMini
          ? "top-0 fixed md:w-4/5 w-5/6 mt-2 -translate-x-1/2 rounded-2xl shadow-md left-1/2"
          : "w-[95vw] mx-auto rounded-b-md min-w-[350px]"
      )}
    >
      <div className="flex flex-wrap justify-around gap-y-4">
        <Logo />
        <div className="flex items-center justify-center px-1.5 md:px-3 text-base md:text-xl gap-x-4 md:gap-x-6">
          {navMenu.map((nav) => (
            <Link title={nav.name} href={nav.link} key={nav.name} type="nav" />
          ))}
        </div>
      </div>
    </div>
  );
}
function Navbar() {
  const { y } = useScrollPositions();
  return (
    <nav className="z-50 w-full text-center">
      <MainNav isMini />
      {/* {y > 100 && <MainNav isMini />} */}
    </nav>
  );
}
export function Footer() {
  return (
    <footer className="py-10 bg-primary/90">
      <div>
        <div className="flex items-center justify-center px-3 text-base text-white md:text-xl gap-x-4 md:gap-x-6">
          {navMenu.map((nav) => (
            <Link title={nav.name} href={nav.link} key={nav.name} type="nav" />
          ))}
        </div>
      </div>
    </footer>
  );
}
export default Navbar;
