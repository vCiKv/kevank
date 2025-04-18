"use client"
import { Inter } from "next/font/google";
import { twJoin, twMerge } from "tailwind-merge";
import Link from "@/components/elements/link";
import Box from "@/components/elements/box";
import {
  Heading,
  SectionSubtitle,
  SectionTitle,
  SectionTitleProps,
} from "@/components/elements/title";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
function OurServices() {
  const [currentService, setCurrentService] = useState(0)
  const ourServices = [
    {
      title: "Construction & Maintenance",
      paragraph: "We build and maintain your structures with excellence. From groundbreaking new builds to seamless renovations and proactive upkeep, we ensure quality construction, prevent future issues, and provide swift repairs. Trust us for durable, functional, and well-maintained buildings that stand the test of time.",
    },
    {
      title: "Engineering services",
      paragraph: "Our expert engineers provide the technical backbone for your projects. We deliver robust structural and civil designs, efficient MEP systems, and utilize BIM for precision. Count on us for safe, sustainable, and innovative engineering solutions that bring your vision to life.",
    },
    {
      title: "Facilities Management",
      paragraph: "We streamline your building operations for peak efficiency. From day-to-day management and space optimization to financial oversight and safety, we ensure smooth, cost-effective, and compliant facility operations, allowing you to focus on your core business.",
    },
    {
      title: "Consultancy services",
      paragraph: "Gain expert insights and empower your team with our consultancy and training. We offer feasibility studies, project management guidance, building assessments, and tailored workshops, equipping you with the knowledge and strategies for successful building endeavors.",
    },
  ];
  // return (
  //   <div>
  //     <div className="grid justify-center grid-cols-1 gap-x-4 gap-y-8 my-12 md:justify-start md:grid-cols-2 lg:grid-cols-2">
  //       {ourServices.map((services, index) => (
  //         <Box
  //           key={"service-" + index}
  //           className="w-full p-0 duration-300 ease-in bg-gradient-to-r hover:from-bg-accent/80 hover:to-bg-accent hover:text-white"
  //         >
  //           <div className={twJoin("flex flex-nowrap h-full")}>
  //             <div className="w-full p-4">
  //               <SectionSubtitle title={services.title} />
  //               <p className="mb-4 leading-relaxed">{services.paragraph}</p>
  //             </div>
  //             <div className="block w-8 h-full bg-accent rounded-r-xl"></div>
  //           </div>
  //         </Box>
  //       ))}
  //     </div>
  //   </div>
  // );
  return (
    <div>
      <div className="grid justify-center grid-cols-1 gap-x-4 gap-y-8 py-12 md:grid-cols-2">
        <Box className="bg-primary/90 text-white capitalize text-md">
          <menu className="flex flex-col items-start justify-between h-full py-16 ">
            {ourServices.map((services, index) => (
              <li
                key={"service-title-" + index}
                onClick={() => setCurrentService(index)}
                className={twMerge("opacity-65 cursor-pointer", currentService === index ? "opacity-100 text-lg font-bold " : "")}
              >
                —{"   "}0{index + 1} {services.title}
              </li>
            ))}
          </menu>
        </Box>
        <Box
          className="w-full p-0 duration-300 ease-in bg-gradient-to-r hover:from-bg-accent/80 hover:to-bg-accent hover:text-white min-h-[400px]"
        >
          <div className={twJoin("flex flex-nowrap h-full")}>
            <div className="w-full p-4">
              <h4
                className={
                  "text-primary/80 mt-1 mb-5 text-2xl font-semibold "
                }
              >
                {ourServices[currentService].title}
              </h4>
              {/* <SectionSubtitle title={ourServices[currentService].title} /> */}
              <p className="mb-4 leading-relaxed">{ourServices[currentService].paragraph}</p>
            </div>
            <div className="block w-8 h-full bg-accent rounded-r-xl"></div>
          </div>
        </Box>

      </div>
    </div>
  );
};
interface HeroTitleProps extends SectionTitleProps {
  className?: string;
}

function HeroTitle(props: HeroTitleProps) {
  return (
    <div className={props?.className}>
      <h1
        className={twJoin(
          "text-accent mt-3 mb-1 text-7xl md:text-8xl font-medium -tracking-wider",
          props.center ? "text-center" : ""
        )}
      >
        {props.title}
      </h1>
      {props.subtitle && (
        <h4
          className={twJoin(
            "text-black/80 mt-1 mb-5 text-2xl font-semibold italic ",
            props.center ? "text-center" : ""
          )}
        >
          {props.subtitle}
        </h4>
      )}
    </div>
  );
};
function Pill({ children }: { children: React.ReactElement | string }) {
  return (
    <span className="px-5 py-2 text-sm font-medium text-center text-white rounded-full bg-primary">
      {children}
    </span>
  );
};
export default function Home() {
  // <Hero />
  // <OurServices/>

  return (
    <main>
      <div className="bg-[url('/img/bw.jpg')] bg-cover bg-center bg-no-repeat min-w-screen min-h-screen w-full h-full bg-scroll">
        <div className="container mx-auto">
          <div className="flex pt-28">
            <div className="w-3/5 ">
              <HeroTitle
                title={"KEVANK NIGERIA LIMITED"}
                className="pl-10 md:pl-20"
                subtitle={
                  <>
                    meet your requirement <br /> surpass your expectation
                  </>
                }
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-12 p-6 md:justify-between md:flex-row-reverse">
            <div className="text-right text-white flex flex-col gap-4">
              <p className="text-sm font-semibold">Design. Create. Deliver</p>
              <h4 className="text-6xl font-black">100+</h4>
              <h6 className="text-xl capitalize">completed projects</h6>
              <Link href="/projects" title={"see projects"} />

              {/* <p>from 2008 15 years of experience</p> */}
            </div>
            <Box className="bg-white/40 bg-none max-w-[450px] border border-white">
              <div className="pb-4">
                <Pill>about</Pill>
              </div>
              <p className="pb-5 text-lg leading-relaxed">
                We design, create, and deliver innovative engineering solutions
                to the energy, constriction, real estate and other industrial sectors.
              </p>
              <Link href={"/about"} title={"learn more"} />
            </Box>
          </div>
          <div className="py-12">
            <hr className="w-4/5 mx-auto border-t-2 border-accent/60"></hr>
          </div>
          <div className="p-6">
            <div className="text-right lg:pl-32 py-2">
              <Pill>services</Pill>
              <p className=" my-4 mb-8 text-3xl lg:text-5xl lg:pl-32 font-medium text-right text-white">
                Explore our diverse range of services <br /> designed to meet your unique needs.
              </p>
            </div>
            <OurServices />
          </div>
        </div>
      </div>
      <div className="w-full p-6 h-96 max-w-screen bg-primary/70">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="text-6xl text-white capitalize pt-28">
            <p>Get A quotation</p>
            <Link href={"/contact"} title={"get->"}></Link>
          </div>
          <div>
            <form>
              <h2>Quick</h2>
              <input type="text" name="contact" />
            </form>
          </div>
        </div>

      </div>
    </main>
  );
}
