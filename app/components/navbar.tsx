"use client";
import { twMerge } from "tailwind-merge";
import { Link } from "./common";

import { useLayoutEffect, useState } from "react";

export const useScrollPositions = () => {
  const [scrollPosition, setPosition] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    function updatePosition() {
      if(typeof window !== "undefined"){
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
  { name: "link", link: "#" },
  { name: "link2", link: "#" },
  { name: "link3", link: "#" },
];
const Logo = () => {
  return <h1 className="text-3xl">LOGO</h1>;
};

const MainNav = (props: { isMini?: boolean }) => {
  return (
    <div
      className={twMerge(
        "z-50 px-6 py-3 text-black border backdrop-blur-[3px] border-white bg-white/30",
        props.isMini
          ? "z-50 top-0 fixed w-4/5 mt-2 -translate-x-1/2 rounded-full shadow-md left-1/2"
          : "w-full rounded-b-md"
      )}
    >
      <div className="flex justify-around">
        <Logo />
        <div className="flex items-center justify-center px-3 gap-x-6">
          {navMenu.map((nav) => (
            <Link title={nav.name} href={nav.link} />
          ))}
        </div>
      </div>
    </div>
  );
};
const Navbar = () => {
  const {y} = useScrollPositions()
  return (
    <nav className="z-50 w-full h-24 text-center">
      <MainNav />
      {y > 100 && <MainNav isMini />}
    </nav>
  );
};
export default Navbar;
