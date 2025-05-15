"use client";
import { useLayoutEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Link from "./elements/link";
import Logo from "./logo";
import Box from "./elements/box";

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
  subLink?: {
    name: string;
    link: string;
    subLink?: {
      name: string;
      link: string;
    }[]
  }[]
}
const navMenu = [
  { name: "about", link: "/about" },
  {
    name: "services",
    link: "#",
    subLink: [
      { name: "services", link: "/services" },
      { name: "projects", link: "/projects" },
      { name: "gallery", link: "/gallery" },
    ]
  },
  { name: "contact", link: "/contact" },
];

function NavLink(props: NavMenuType) {
  const nav = props
  const [isActive, setIsActive] = useState(false)
  // const hasSubItem = (nav.subLink?.length ?? 0) > 0 ? true : false
  return (
    <div className="group relative" onMouseOver={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>
      <Link title={nav.name} href={nav.link} type="nav" />
      {(nav.link === "#" && isActive) && <div className="absolute pt-7">
        {isActive && <Box className="flex flex-col gap-3 p-2 w-36 bg-primary/60">
          {nav.subLink?.map(subNav =>
            <Link className="p-0" title={subNav.name} href={subNav.link} key={nav.name + "-" + subNav.name} type="subNav" />
          )}
        </Box>}
      </div>}
    </div>
  )

}

function MainNav(props: { isMini?: boolean; }) {
  return (
    <div
      className={twMerge(
        "z-50 px-1.5 md:px-6 py-3 text-white font-extrabold border backdrop-blur-[3px] border-white bg-primary/20",
        props.isMini
          ? "top-0 fixed lg:w-[60vw] md:w-[80vw] w-[95vw] mt-2 rounded-2xl shadow-md left-1/2 -translate-x-1/2"
          : "w-[95vw] mx-auto rounded-b-md min-w-[300px]"
      )}
    >
      <div className="flex flex-wrap justify-around gap-y-4">
        <Logo />
        <div className="flex items-center justify-center px-1 md:px-3 text-base md:text-xl gap-x-3 md:gap-x-6">
          {/* {navMenu.map((nav) => (
            <Link title={nav.name} href={nav.link} key={nav.name} type="nav" />
          ))} */}
          {navMenu.map((nav) => (
            <NavLink key={nav.name} {...nav} />
          ))}
        </div>
      </div>
    </div>
  );
}
function Navbar() {
  const { y } = useScrollPositions();
  return (
    <nav className="z-50 w-screen text-center">
      <MainNav isMini />
      {/* {y > 100 && <MainNav isMini />} */}
    </nav>
  );
}
// export function Footer() {
//   return (
//     <footer className="py-10 bg-primary/90">
//       <div>
//         <div className="flex items-center justify-center px-3 text-base text-white md:text-xl gap-x-4 md:gap-x-6">
//           {navMenu.map((nav) => (
//             <Link title={nav.name} href={nav.link} key={nav.name} type="nav" />
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// }
export default Navbar;
