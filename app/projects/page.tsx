import Box from "@/components/elements/box";
import Image from "@/components/elements/image";

import { SectionTitle } from "@/components/elements/title";
const ourProjects = [
  {
    title: "Title",
    location: "Alakuko, Lagos.",
    image: "/img/kvk.png",
    paragraph:
      "Complete renovation of building and facilities upgrade of pipelines, tanks, power generator and electrical systems at Zone 4 service station,",
    tag:"knockdown and rebuild"
    },
  {
    title: "Title",
    location: "abuja",
    image: "/img/kvk.png",
    paragraph:
      "Construction of 15 units of fully detached houses at Nigerian union of teachers (NUT) Estate, Lugbe,  Abuja",
    tag:"civil construction"
    },
  {
    title: "Title",
    location: "lagos",
    image: "/img/kvk.png",
    paragraph:
      "Plumbing, water treatment and Renovation work at conoil expatriates quarters (block of 30 flats) at Victoria Island Lagos.",
  },
];
const stats = [
  { text: "projects", value: "100+", icon: "icon" },
  { text: "clients", value: "60+", icon: "icon" },
  { text: "employees", value: "20+", icon: "icon" },
];
const Projects = (props: {
  title: string;
  location: string;
  image: string;
  paragraph: string;
  tag?:string
}) => {
  return (
    <div className="h-full px-5 group/image md:px-0">
      <Box className="flex flex-col h-full">
        <div className="relative block object-contain w-full duration-200 ease-in scale-95 rounded-md h-28 group-hover/image:scale-100">
          <Image src={props.image} className="object-cover w-full h-full" />
        </div>
        <div className="my-4 tracking-tight">
          <p className="-my-1 text-sm font-light capitalize">
            {props.location}
          </p>
          <h3 className="mb-2 text-2xl font-medium">{props.title}</h3>
        </div>
        <p className="pb-10 leading-relaxed">{props.paragraph}</p>
        {/* {props.tag&&<div className="px-3 py-1 text-xs font-medium text-center text-white rounded-full w-28 bg-primary">
          {props.tag}
        </div>} */}
      </Box>
    </div>
  );
};
export default function Page() {
  return (
    <main>
      <section className="container mx-auto my-36">
        <SectionTitle title={"Our Projects"} center />
        <div>
          <div className="grid items-stretch justify-start grid-cols-3 gap-1 my-10 md:grid-cols-3 flex-nowrap">
            {stats.map((stat) => (
              <div key={stat.text} className="flex flex-col gap-2 text-center">
                <span>{stat.icon}</span>
                <span className="text-5xl font-black text-accent ">
                  {stat.value}
                </span>
                <span className="text-xl font-medium uppercase">{stat.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid items-stretch justify-start grid-cols-1 gap-8 my-10 md:grid-cols-3 flex-nowrap">
          {ourProjects.map((project) => <Projects key={"project-"+project.title} {...project}/>)}
        </div>
      </section>
    </main>
  );
}
