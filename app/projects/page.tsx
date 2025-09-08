"use client"
import Box from "@/components/elements/box";
import Image from "@/components/elements/image";
import { SectionTitle } from "@/components/elements/title";
import Gallery, { GalleryList } from "@/components/gallery";
import InputSearch from "@/components/inputSearch";
import { Avatar, CheckOne, EveryUser, Notepad, Timer } from "@icon-park/react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

function capitalizeNONCaps(str: string) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (str[i - 1] === "") {
      result += char.toUpperCase();
    } else {
      result += char;
    }
  }
  return result;
}
function compareArrayToString(str: string, arr?: string[]) {
  if (!arr) {
    return false
  }
  for (const element of arr) {
    if (str.toLowerCase().includes(element.toLowerCase())) {
      return true
    }
  }
  return false
}
function ProjectPill({ status }: { status: string | "ongoing" | "completed" }) {
  const isCompleted = status === "completed"
  const className = isCompleted ? "bg-green-400" : "bg-orange-300"
  const icon = isCompleted ? <CheckOne /> : <Timer />
  return (
    <span className={twMerge("inline-flex justify-center items-center gap-1 px-2.5 py-0.5 text-sm font-medium text-center text-white rounded-full ", className)}>
      {status} {icon}
    </span>
  );
};

function ProjectConstruction(props: { isHidden?: boolean }) {
  const ourProjectsConstruction = [
    {
      title: "Zone 4 service station",
      location: "Alakuko, Lagos.",
      images: [
        "https://images2.imgbox.com/48/b3/X6NSrsfV_o.jpg",
        "https://images2.imgbox.com/36/62/jFUK9w4Z_o.jpg",
        "https://images2.imgbox.com/dd/aa/Jj4D9yVR_o.jpg",
        "https://images2.imgbox.com/db/9e/6q5s1BU5_o.jpg",
        "https://images2.imgbox.com/cd/2c/jcFfmHIJ_o.jpg",
        "https://images2.imgbox.com/de/99/9QNRoxEK_o.jpg",
        "https://images2.imgbox.com/89/4e/r75Amn17_o.jpg",
        "https://images2.imgbox.com/7b/b7/NbUQSSuR_o.jpg",
        "https://images2.imgbox.com/06/6e/kbX3ADAS_o.jpg",
        "https://images2.imgbox.com/05/47/AYJDfv8O_o.jpg",
        "https://images2.imgbox.com/21/98/kz77JIkq_o.jpg",
        "https://images2.imgbox.com/98/d4/XMD3jAqS_o.jpg",
        "https://images2.imgbox.com/d6/b6/5btEua57_o.jpg",
      ],
      paragraph:
        "Complete renovation of building and facilities upgrade of pipelines, tanks, power generator and electrical systems at Zone 4 service station,",
      tag: ["knockdown and rebuild"],
      startDate: 2015,
      endDate: 2015,
      status: "completed",
      client: "Zone 4",
    },
    // {
    //   title: "Title-2",
    //   location: "Lugbe, Abuja",
    //   images: null,
    //   paragraph:
    //     "Construction of 15 units of fully detached houses at Nigerian union of teachers (NUT) Estate, Lugbe,  Abuja",
    //   tag: ["civil construction"],
    //   startDate: 2012,
    //   endDate: 2013,
    //   status: "completed",
    //   client: "client_name",
    // },
    {
      title: "Renovation work at CONOIL",
      location: "Victoria Island, Lagos.",
      images: null,
      paragraph:
        "Plumbing, water treatment and Renovation work at conoil expatriates quarters (block of 30 flats) at Victoria Island Lagos.",
      startDate: 2013,
      endDate: 2013,
      status: "completed",
      client: "CONOIL PLC",
    },
    {
      title: "Mechanical and electrical consultancy services for AA Rano",
      location: "Satellite town, Lagos.",
      images: null,
      paragraph:
        "Mechanical and electrical consultancy services for AA Rano  70 million litres capacity tank farm, Ijegun, satellite town, Lagos.",
      startDate: 2012,
      endDate: 2013,
      status: "completed",
      client: "A.A RANO NIG LTD",
    },
    {
      title: "Rebuild filling station for AA Rano Ltd",
      location: "Iyana Ipaja, Lagos.",
      images: [
        "https://images2.imgbox.com/12/25/CKUD7f0C_o.jpg",
        "https://images2.imgbox.com/1a/5a/QyVRqYiS_o.jpg",
        "https://images2.imgbox.com/db/f5/NEs2qrNN_o.jpg",
        "https://images2.imgbox.com/cc/84/I9igftAw_o.jpg",
        "https://images2.imgbox.com/c3/51/PlHoLH6r_o.jpg",
        "https://images2.imgbox.com/e7/c8/PC4juAqk_o.jpg",
        "https://images2.imgbox.com/b7/15/Bnt0ixdh_o.jpg",
        "https://images2.imgbox.com/89/ce/uRUPjGkt_o.jpg",
        "https://images2.imgbox.com/94/32/FV0swXqs_o.jpg",
        "https://images2.imgbox.com/a7/84/UbxHPB44_o.jpg",
        "https://images2.imgbox.com/80/50/AMtXjtLd_o.jpg",
        "https://images2.imgbox.com/22/3b/8swpGeiy_o.jpg",
        "https://images2.imgbox.com/f9/26/niTmfgPr_o.jpg",
        "https://images2.imgbox.com/34/31/l56ONIjp_o.jpg",
        "https://images2.imgbox.com/f0/78/RLupI8iH_o.jpg",
        "https://images2.imgbox.com/52/51/cWQ1xVV8_o.jpg",
        "https://images2.imgbox.com/9e/5f/EJzfdzWB_o.jpg",
        "https://images2.imgbox.com/fd/4c/3N8xjbfO_o.jpg",
        "https://images2.imgbox.com/f2/61/XsPPKgOL_o.jpg",
        "https://images2.imgbox.com/9f/19/yKGk5LJ2_o.jpg",
      ],
      paragraph:
        "Complete Knock down and rebuild filling station project former Amo oil to a mega station for AA Rano Ltd, Iyana Ipaja.",
      startDate: 2014,
      endDate: 2014,
      status: "completed",
      client: "A.A RANO NIG LTD",
    },
    {
      title: "Wall fencing and foundation works for service station",
      location: "Isheri, Lagos.",
      images: null,
      paragraph:
        "Retaining wall fencing and foundation works for service station at  Lasu-Iba express road, Isheri, Lagos.",
      startDate: 2015,
      endDate: 2015,
      status: "completed",
      client: "A.A RANO NIG LTD",
    },
    {
      title: "5,000 Cubic meters LPG tank farm",
      location: "Satellite Town, Lagos.",
      images: [
        "https://images2.imgbox.com/7a/e2/Dr0daSnw_o.jpg",
        "https://images2.imgbox.com/71/eb/Z6HGd5mD_o.jpg",
        "https://images2.imgbox.com/b6/81/EVW2twVj_o.jpg",
        "https://images2.imgbox.com/05/20/K85UYAlj_o.jpg",
      ],
      paragraph:
        "Project supervision works at AA RANO 5,000 Cubic meters LPG tank farm at Ijegun, satellite town ",
      startDate: 2017,
      endDate: 2019,
      status: "completed",
      client: "A.A RANO NIG LTD",
    },
  ];
  const [filteredProjects, setFilteredProjects] = useState(ourProjectsConstruction)
  const [searchInput, setSearchInput] = useState("")
  const onSearch = () => {
    const searchValue = searchInput.toLowerCase().trim()
    if (searchValue === "" || !searchValue) {
      setFilteredProjects(ourProjectsConstruction)
      return
    }
    const filtered = ourProjectsConstruction.filter(val =>
      val.client.toLowerCase().includes(searchValue) ||
      val.location.toLowerCase().includes(searchValue) ||
      val.paragraph.toLowerCase().includes(searchValue) ||
      val.title.toLowerCase().includes(searchValue) ||
      compareArrayToString(searchValue, val.tag)
    )
    setFilteredProjects(filtered)
    return
  }
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setFilteredProjects(ourProjectsConstruction)
    }
    setSearchInput(e.target.value)
  }
  if (props.isHidden) {
    return <></>
  } else {
    return (
      <div>
        <div className="py-6 flex justify-center">
          <Box className="flex justify-center min-w-[250px] w-3/5 max-w-4xl p-6 hover:bg-black/5">
            <InputSearch onSearch={onSearch} value={searchInput} onChange={(e) => inputChange(e)} />
          </Box>
        </div>
        {/* <div className="grid items-stretch justify-start grid-cols-1 gap-8 my-10 md:grid-cols-3 flex-nowrap"> */}
        {filteredProjects.length <= 0 &&
          <div className="min-h-[40vh]">
            <p>No Results Found</p>
          </div>
        }
        {filteredProjects.map((project) => <div key={"project-" + project.title} className="h-full px-5 group/image md:px-0">
          <GalleryList key={project.title} title={(project.title).toUpperCase()} images={project.images} showButton>
            <Box className="flex flex-col h-full">
              {/* <div className="relative block object-contain w-full duration-200 ease-in scale-95 h-56 group-hover/images:scale-100">
              <Image src={project.image[0]} className="object-cover w-full h-full" />
            </div> */}
              <div className="py-4 tracking-tight">
                <div className="flex justify-between pb-1 items-end">
                  <p className="py-1 text-md font-light capitalize ">
                    {project.location}
                  </p>
                  <ProjectPill status={project.status} />
                </div>
                {/* <h3 className="pb-2 text-2xl font-medium md:h-32">{project.title}</h3> */}
                <div className="flex flex-col md:flex-row md:justify-between">
                  <h6><b className="font-semibold">Client: </b> {project.client}</h6>
                  <div className="flex flex-col items-end justify-center text-md gap-1">
                    <span><b className="font-semibold">Start Date: </b>{project.startDate}</span>
                    <span><b className="font-semibold">End Date: </b>{project.endDate}</span>
                  </div>
                </div>
              </div>
              <p className="pb-10 leading-relaxed">{project.paragraph}</p>

            </Box>
          </GalleryList>
        </div>
        )}
      </div>
    )
  }
}
function ProjectFacilities(props: { isHidden?: boolean }) {

  const ourProjectsFacilities = [
    {
      location: "Pan Nigeria",
      paragraph:
        "Maintenance  of air conditioners and generators in various branches pan Nigeria",
      startDate: 2008,
      endDate: 2020,
      status: "completed",
      client: "FIRST CITY MONUMENTAL BANK",
    },
    {
      location: "Pan Nigeria",
      paragraph:
        "Maintenance of air conditioners",
      startDate: 2009,
      endDate: 2020,
      status: "completed",
      client: "FIDELITY BANK",
    },
    {
      location: "Pan Nigeria",
      paragraph:
        "Maintenance  of air conditioners and generators pan Nigeria",
      startDate: 2008,
      endDate: 2013,
      status: "completed",
      client: "ECO BANK",
    },
    {
      location: "Port Harcourt",
      paragraph:
        "Maintenance  of air conditioners at Port Harcourt",
      startDate: 2019,
      endDate: 2011,
      status: "completed",
      client: "Grantee Trust Bank(GTB)",
    },
    {
      location: "Lagos",
      paragraph:
        "Maintenance  of air conditioners",
      startDate: 2010,
      endDate: 2012,
      status: "completed",
      client: "Global Ocean Ltd",
    },
    {
      location: "Lagos",
      paragraph:
        "Maintenance  of air conditioners and Generators",
      startDate: 2010,
      endDate: 2012,
      status: "completed",
      client: "DIVINE PLUS HOTEL",
    },

  ];
  if (props.isHidden) {
    return <></>
  } else {
    return (
      <div className="grid items-stretch justify-start grid-cols-1 gap-8 my-10 md:grid-cols-3 flex-nowrap">
        {ourProjectsFacilities.map((project, index) => <div key={"facilities-" + index}>
          <Box className="flex flex-col h-full">
            <div className="py-4 tracking-tight">
              <p className="py-1 text-sm font-light capitalize">
                {project.location}
              </p>
              <h6 className="font-medium text-lg pb-4">{project.client}</h6>
              <div className="flex flex-col items-end w-full justify-center text-sm gap-1">
                <span>{project.startDate} - {project.endDate}</span>
                <ProjectPill status={project.status} />
              </div>
            </div>
            <p className="pb-10 leading-relaxed">{project.paragraph}</p>
            {/* {props.tag&&<div className="px-3 py-1 text-xs font-medium text-center text-white rounded-full w-28 bg-primary">
          {props.tag}
        </div>} */}
          </Box>
        </div>)}
      </div>
    )
  }
}
function ProjectGallery(props: { isHidden?: boolean }) {
  if (props.isHidden) {
    return <></>
  } else {
    return (
      <Gallery />
    )
  }
}
const stats = [
  { text: "projects", value: "100+", icon: <Notepad size={42} className="text-accent" /> },
  { text: "clients", value: "60+", icon: <Avatar size={42} className="text-accent" /> },
  { text: "employees", value: "20+", icon: <EveryUser size={42} className="text-accent" /> },
];

export default function Page() {
  const activeTabClass = "bg-primary !text-white hover:underline-none"
  const [projectView, setProjectView] = useState(2)
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
          <div className="grid items-stretch justify-start grid-cols-1 md:grid-cols-3 gap-x-1 gap-y-3 my-10 flex-nowrap">
            {stats.map((stat) => (
              <div key={stat.text} className="flex md:flex-row flex-col gap-2 justify-center items-center">
                <span>{stat.icon}</span>
                <div className="flex flex-col justify-center items-start">
                  <span className="text-5xl font-black text-accent ">
                    {stat.value}
                  </span>
                  <span className="text-xl font-medium uppercase text-primary/80">{stat.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="bg-white rounded-full w-4/5 mx-auto h-12">
            <div className="grid grid-cols-3 text-sm md:text-lg justify-center items-center h-full gap-1">
              <button className={twMerge("h-full rounded-full px-2 hover:text-primary hover:underline cursor-pointer", projectView === 2 ? activeTabClass : "")} onClick={() => updateProjectView(2)}>
                Construction
              </button>
              <button className={twMerge("h-full rounded-full px-2 hover:text-primary hover:underline cursor-pointer", projectView === 1 ? activeTabClass : "")} onClick={() => updateProjectView(1)}>
                Facilities Management
              </button>
              <button className={twMerge("h-full rounded-full px-2 hover:text-primary hover:underline cursor-pointer", projectView === 3 ? activeTabClass : "")} onClick={() => updateProjectView(3)}>
                Gallery
              </button>
            </div>
          </div>
          <ProjectConstruction isHidden={projectView != 2} />
          <ProjectFacilities isHidden={projectView != 1} />
          <ProjectGallery isHidden={projectView != 3} />
        </div>
        {/* <Gallery /> */}
      </section>
    </main>
  );
}
