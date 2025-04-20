"use client"
import Box from "@/components/elements/box";
import Image from "@/components/elements/image";
import { SectionTitle } from "@/components/elements/title";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

function ProjectPill({ status }: { status: string | "ongoing" | "completed" }) {
  const isCompleted = status === "completed"
  const className = isCompleted ? "bg-green-400" : "bg-orange-300"
  const icon = isCompleted ? "icon" : "icon"
  return (
    <span className={twMerge("px-2.5 py-0.5 text-sm font-medium text-center text-white rounded-full ", className)}>
      {status} {icon}
    </span>
  );
};
const ourProjects = [
  {
    title: "Title-1",
    location: "Alakuko, Lagos.",
    image: ["/img/kvk.png",],
    paragraph:
      "Complete renovation of building and facilities upgrade of pipelines, tanks, power generator and electrical systems at Zone 4 service station,",
    tag: "knockdown and rebuild",
    startDate: 2012,
    endDate: 2013,
    status: "ongoing",
    client: "client_name",
  },
  {
    title: "Title-2",
    location: "abuja",
    image: ["/img/kvk.png",],
    paragraph:
      "Construction of 15 units of fully detached houses at Nigerian union of teachers (NUT) Estate, Lugbe,  Abuja",
    tag: "civil construction",
    startDate: 2012,
    endDate: 2013,
    status: "completed",
    client: "client_name",
  },
  {
    title: "Title-3",
    location: "lagos",
    image: ["/img/kvk.png",],
    paragraph:
      "Plumbing, water treatment and Renovation work at conoil expatriates quarters (block of 30 flats) at Victoria Island Lagos.",
    startDate: 2012,
    endDate: 2013,
    status: "ongoing",
    client: "client_name",

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
  image: string[];
  paragraph: string;
  tag?: string;
  startDate: number;
  endDate: number;
  status: string;
  client: string;
}) => {
  return (
    <div className="h-full px-5 group/image md:px-0">
      <Box className="flex flex-col h-full">
        <div className="relative block object-contain w-full duration-200 ease-in scale-95 h-56 group-hover/image:scale-100">
          <Image src={props.image[0]} className="object-cover w-full h-full" />
        </div>
        <div className="py-4 tracking-tight">
          <p className="py-1 text-sm font-light capitalize">
            {props.location}
          </p>
          <h3 className="pb-2 text-2xl font-medium">{props.title}</h3>
          <h6><b className="font-semibold">Client: </b> {props.client}</h6>
          <div className="flex flex-col items-end w-full justify-center text-sm gap-1">
            <span><b className="font-semibold">Start Date: </b>{props.startDate}</span>
            <span><b className="font-semibold">End Date: </b>{props.endDate}</span>
            <ProjectPill status={props.status} />
          </div>

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
  const activeClass = "bg-primary text-white"
  const [projectView, setProjectView] = useState(1)
  const updateProjectView = (val: number) => {
    if (val !== projectView) {
      setProjectView(val)
    }
  }
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
        <div className="bg-white rounded-full w-4/5 mx-auto h-12">

          <div className="grid grid-cols-3 text-sm md:text-lg justify-center items-center h-full gap-1">
            <button className={twMerge("h-full rounded-full px-2 hover:bg-primary/50 hover:text-white cursor-pointer", projectView === 1 ? activeClass : "")} onClick={() => updateProjectView(1)}>
              Facilities Management
            </button>
            <button className={twMerge("h-full rounded-full px-2 hover:bg-primary/50 hover:text-white cursor-pointer", projectView === 2 ? activeClass : "")} onClick={() => updateProjectView(2)}>
              Construction
            </button>
            <button className={twMerge("h-full rounded-full px-2 hover:bg-primary/50 hover:text-white cursor-pointer", projectView === 3 ? activeClass : "")} onClick={() => updateProjectView(3)}>
              Real Estate
            </button>
          </div>
        </div>

        <div className="grid items-stretch justify-start grid-cols-1 gap-8 my-10 md:grid-cols-3 flex-nowrap">
          {ourProjects.map((project) => <Projects key={"project-" + project.title} {...project} />)}
        </div>
      </section>
    </main>
  );
}
