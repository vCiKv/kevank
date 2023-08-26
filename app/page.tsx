import Image from "@/components/image";
import { Inter } from "next/font/google";
import { Heading, SectionSubtitle, SectionTitle } from "./components/title";
import { Box, Link } from "./components/common";
import { twJoin } from "tailwind-merge";
import Hero from "./hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
  const ourProjects = [
    {
      title: "Title",
      location: "Alakuko, Lagos.",
      image: "/img/kvk.png",
      paragraph:
        "Complete renovation of building and facilities upgrade of pipelines, tanks, power generator and electrical systems at Zone 4 service station,",
    },
    {
      title: "Title",
      location: "abuja",
      image: "/img/kvk.png",
      paragraph:
        "Construction of 15 units of fully detached houses at Nigerian union of teachers (NUT) Estate, Lugbe,  Abuja",
    },
    {
      title: "Title",
      location: "lagos",
      image: "/img/kvk.png",
      paragraph:
        "Plumbing, water treatment and Renovation work at conoil expatriates quarters (block of 30 flats) at Victoria Island Lagos.",
    },
  ];

  return (
    <main>
      <Hero />
      <section className="container mx-auto my-32">
        <SectionTitle title={"Why Kevank?"} />
        <p className="text-lg leading-relaxed">
          We design, create, and deliver innovative engineering solutions to
          enable our net-zero future. We serve the energy, defence, and other
          industrial sectors. Design. Create. Deliver
        </p>
        <Heading title={"About Us"} />
        <p className="text-lg leading-relaxed">
          Kevank Nigeria Limited was incorporated in 2008 and commenced
          operation the same year as projects, construction and facilities
          management company. Kevank Nigeria LTD is here to address your
          engineering needs, to meet your requirement and surpass your
          expectation. We are major players in the facilities management field
          and have been having facilities management contracts since 2008 to
          date with First City Monument Bank (FCMB) PLC and Fidelity Bank PLC.
          We have also executed Building Renovation works for Conoil PLC, Petrol
          Station building and construction works for AA Rano Nig Limited, Zone
          4 energy ltd and several building and construction works.
          <br /><br/>
          <Link title="learn more" className="my-2" />
        </p>

        <div className="flex flex-wrap justify-around gap-2 my-12">
          <Box className="duration-300 ease-in w-full md:w-[48%] hover:bg-primary hover:border-none hover:from-transparent hover:to-transparent hover:text-white">
            <div>
              <Heading title={"Our Mission"} />
              <p>
                To become one of the leading multidisciplinary engineering
                companies in building construction and facilities maintenance
                through strategic technical alliances with indigenous.
              </p>
            </div>
          </Box>
          <Box className="duration-300 ease-in w-full md:w-[48%] hover:bg-primary hover:border-none hover:from-transparent hover:to-transparent hover:text-white">
            <div>
              <Heading title={"Our Vision"} />
              <p>
                To be number ONE in our chosen field providing quality
                multidisciplinary service delivery with international standards
                and specifications.
              </p>
            </div>
          </Box>
        </div>
      </section>
      <section className="container mx-auto my-32">
        <SectionTitle title={"Our Services"} />
        <div className="flex justify-start gap-2 my-12 flex-nowrap">
          {ourServices.map((services, index) => (
            <Box className="p-0 duration-300 ease-in w-72 hover:bg-accent hover:from-transparent hover:to-transparent hover:text-white">
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
      </section>
      {/* <section className="container mx-auto my-16">
        <Box>
          <SectionTitle title={"random facts"} center />
          <div className="flex justify-around gap-8 my-10">
            {[96, 91, 92].map((num) => (
              <div className="flex flex-col">
                <p className="text-5xl font-semibold text-accent">
                  {Math.floor(num * Math.random())}
                </p>
                <p>Ea accusam.</p>
              </div>
            ))}
          </div>
        </Box>
      </section> */}
      <section className="container mx-auto my-32">
        <SectionTitle title={"Our Projects"} center />
        <div className="flex items-stretch justify-start gap-8 my-10 flex-nowrap">
          {ourProjects.map((project) => (
            <div className="w-[46%] h-full group/image">
              <Box className="flex flex-col h-full">
                <div className="relative block object-contain w-full duration-200 ease-in scale-95 rounded-md h-28 group-hover/image:scale-100">
                  <Image
                    src={project.image}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="my-4 tracking-tight">
                  <p className="-my-1 text-sm font-light capitalize">
                    {project.location}
                  </p>
                  <h3 className="mb-2 text-2xl font-medium">{project.title}</h3>
                </div>
                <p className="leading-relaxed">{project.paragraph}</p>
              </Box>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
