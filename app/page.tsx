import Image from "@/components/elements/image";
import { Inter } from "next/font/google";
import {
  Heading,
  HeroTitle,
  SectionSubtitle,
  SectionTitle,
} from "@/components/elements/title";
import Link from "@/components/elements/link";
import { twJoin } from "tailwind-merge";
// import Hero from "./hero";
import Box from "@/components/elements/box";

const inter = Inter({ subsets: ["latin"] });
const OurServices = () => {
  const ourServices = [
    {
      title: "Building construction and Maintenance services",
      paragraph: "  Magna at et vero dolores justo vero vero. Et ea aliquyam.",
    },
    {
      title: "Engineering services",
      paragraph: "Voluptua sadipscing duo invidunt takimata labore lorem et",
    },
    {
      title: "Facilities Management",
      paragraph: "gubergren et. Lorem takimata sadipscing rebum gubergren, sed",
    },
    {
      title: "Consultancy services",
      paragraph: "tempor no eos takimata.",
    },
  ];
  return (
    <div>
      <div className="grid justify-center grid-cols-1 gap-2 my-12 md:justify-start md:grid-cols-4">
        {ourServices.map((services, index) => (
          <Box
            key={"service-" + index}
            className="w-full p-0 duration-300 ease-in hover:bg-accent hover:from-transparent hover:to-transparent hover:text-white"
          >
            <div className={twJoin("flex flex-nowrap h-full")}>
              <div className="w-full p-4">
                <SectionSubtitle title={services.title} />
                <p className="mb-4 leading-relaxed">{services.paragraph}</p>
              </div>
              <div className="block w-8 h-full bg-accent rounded-r-md"></div>
            </div>
          </Box>
        ))}
      </div>
    </div>
  );
};
export default function Home() {
  // <Hero />
  // <OurServices/>
  const Pill = ({ children }: { children: React.ReactElement | string }) => {
    return (
      <span className="px-5 py-2 text-sm font-medium text-center text-white rounded-full bg-primary">
        {children}
      </span>
    );
  };
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
            <div className="text-right text-white">
              <p className="text-sm font-semibold">Design. Create. Deliver</p>
              <h4 className="text-6xl font-black">100+</h4>
              <h6 className="text-xl capitalize">completed projects</h6>
              <Link href="/projects" title={"see projects ->"} />

              {/* <p>from 2008 15 years of experience</p> */}
            </div>
            <Box className="space-y-6 bg-white/40 bg-none max-w-[250px]">
              <Pill>about</Pill>
              <p className="pb-4 text-lg leading-relaxed">
                We design, create, and deliver innovative engineering solutions
                to the energy, and other industrial sectors.
              </p>
              <Link href="/about" title={"learn more ->"} />
            </Box>
          </div>
          <div className="py-12">
            <hr className="w-4/5 mx-auto border-t-2 border-accent/60"></hr>
          </div>
          <div className="p-6">
            <div className="text-right">
              <Pill>services</Pill>
              <p className="my-4 mb-8 text-5xl font-medium text-right text-white">
                introduction text
              </p>
            </div>

            <OurServices />
          </div>
        </div>
      </div>
      <div className="w-full p-6 h-96 max-w-screen bg-primary/70">
        <div className="text-6xl text-white capitalize pt-28">
          <p>Get A quotation</p>
          <Link href={"contact"} title={"get->"}></Link>
        </div>
      </div>
    </main>
  );
}
