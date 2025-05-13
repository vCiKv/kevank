"use client"
import Link from "@/components/elements/link";
import Box from "@/components/elements/box";
import Logo from "@/components/logo";
import Brands from "@/components/brands";
import { Inter } from "next/font/google";
import { useState } from "react";
import { twJoin, twMerge } from "tailwind-merge";
import { CheckCorrect, Down } from "@icon-park/react";
import Input, { Textarea } from "@/components/elements/input";
const inter = Inter({ subsets: ["latin"] });
function OurServices() {
  const [currentService, setCurrentService] = useState(0)
  const [showSelector, setShowSelector] = useState(false)
  const toggleSelector = () => {
    setShowSelector(p => !p)
  }
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
  return (
    <div>
      <div className="grid justify-center grid-cols-1 gap-x-4 gap-y-8 py-12 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-4 ">
          <Box className="bg-primary/90 text-white capitalize text-md p-4 md:hidden block cursor-pointer" >
            <div onClick={toggleSelector} className="flex flex-nowrap justify-between h-full w-full">
              <div className="flex gap-1.5">
                <span className="flex flex-nowrap">
                  —{"   "}0{currentService + 1}
                </span>
                <span>
                  {ourServices[currentService].title}
                </span>
              </div>
              <span >
                <Down />
              </span>
            </div>
          </Box>
          <Box className={twMerge("bg-primary/90 text-white capitalize text-md md:block md:h-full", showSelector ? "block" : "hidden")}>
            <menu className="flex flex-col items-start justify-between h-full gap-2 py-6 md:py-16 ">
              {ourServices.map((services, index) => (
                <li
                  key={"service-title-" + index}
                  onClick={() => { setCurrentService(index); toggleSelector(); }}
                  className={twMerge("opacity-65 cursor-pointer", currentService === index ? "opacity-100 text-lg font-bold " : "")}
                >
                  —{"   "}0{index + 1} {services.title}
                </li>
              ))}
            </menu>
          </Box>
        </div>
        <Box
          className="w-full p-0 duration-300 ease-in bg-gradient-to-r hover:from-bg-accent/80 hover:to-bg-accent hover:text-white min-h-[400px] lg:col-span-2"
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
            <div className="block w-8 h-full bg-primary rounded-r-xl"></div>
          </div>
        </Box>

      </div>
    </div>
  );
};

function GetQuote() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  // if (isSubmitted) {
  //   return (
  //     <div className="relative w-full overflow-hidden rounded-3xl">
  //       {/* Background with animated gradient */}
  //       <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-amber-500 to-amber-700 opacity-90 animate-gradient-xy"></div>

  //       {/* Glassmorphic overlay */}
  //       <div className="relative backdrop-blur-md bg-slate-900/30 p-8 md:p-12 border border-white/10 rounded-3xl overflow-hidden">
  //         {/* Decorative elements */}
  //         <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
  //         <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl -ml-32 -mb-32"></div>

  //         <div className="flex flex-col items-center justify-center text-center py-8 max-w-2xl mx-auto">
  //           <div className="bg-white/10 p-4 rounded-full mb-6 backdrop-blur-sm">
  //             {/* <CheckCircle2 className="h-16 w-16 text-white" /> */}
  //           </div>
  //           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Thank You!</h2>
  //           <p className="text-xl text-white/90 mb-8">
  //             Your quote request has been received. Our team will get back to you within 24 hours with a detailed
  //             estimate.
  //           </p>
  //           <button
  //             onClick={() => setIsSubmitted(false)}
  //             className="bg-white text-amber-600 hover:bg-white/90 font-semibold text-lg px-8 py-6 h-auto rounded-xl"
  //           >
  //             Request Another Quote
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div className="relative w-full overflow-hidden rounded-3xl">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/80 via-accent/50 to-accent/70 opacity-90 animate-gradient-xy"></div>

      {/* Glassmorphic overlay */}
      <div className="relative backdrop-blur-md bg-slate-900/30 p-8 md:p-12 border border-white/10 rounded-3xl overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl -ml-32 -mb-32"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-amber-300 font-semibold tracking-wide uppercase text-sm">Free Estimate</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Get a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200">
                Free Quote
              </span>{" "}
              for Your Project
            </h2>

            <p className="text-lg text-white/80 mb-6">
              Tell us about your construction needs and receive a detailed estimate within 24 hours. No obligations,
              just expert advice.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Detailed cost breakdown",
                "Timeline estimation",
                "Material recommendations",
                "Expert consultation",
              ].map((item, index) => (
                <li key={index} className="flex items-center text-white/90">
                  <div className="mr-3 h-6 w-6 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <CheckCorrect size={16} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            {!isExpanded && (
              <button
                onClick={() => setIsExpanded(true)}
                className="bg-white text-amber-600 hover:bg-white/90 font-semibold text-lg px-8 py-2.5 h-auto rounded-xl group"
              >
                Get Your Free Quote
                {/* <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /> */}
              </button>
            )}
          </div>

          {/* Right side - Form (conditionally rendered) */}
          {isExpanded && (
            <div className="relative backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">Tell Us About Your Project</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* <Input
                              id="name"
                              label="name"
                              placeholder="Your name"
                              required
                              className="backdrop-blur-sm bg-slate-800/30 border border-slate-700/40 focus:border-slate-600/60 h-12"
                            /> */}
                  <div>
                    <Input
                      placeholder="Your Name"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 px-2"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Email Address"
                      type="email"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 px-2"
                    />
                  </div>
                </div>

                {/* <div className="grid grid-cols-1 gap-4">
                  <div>
                     <Select>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white h-12">
                        <SelectValue placeholder="Project Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential Construction</SelectItem>
                        <SelectItem value="commercial">Commercial Construction</SelectItem>
                        <SelectItem value="renovation">Renovation</SelectItem>
                        <SelectItem value="facility">Facility Management</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select> 
                  </div>
                </div> */}

                <div>
                  <Textarea
                    placeholder="Describe your project (size, requirements, budget, timeline, etc.)"
                    required
                    className="min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-primary hover:bg-white/90 font-semibold text-lg py-2.5 h-auto rounded-xl"
                >
                  Submit Quote Request
                </button>

                <p className="text-xs text-white/60 text-center mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
};
function HeroTitle() {
  return (
    <div className="pl-10 md:pl-20">
      <div className="flex flex-col">
        <Logo size={128} />
        <div>
          <h1
            className={
              "text-accent mt-3 mb-1 text-xl font-medium -tracking-wider"
            }
          >
            KEVANK NIGERIA LIMITED
          </h1>
          <h4
            className={
              "md:text-black/80 text-white mt-1 mb-5 text-lg font-semibold italic "
            }
          >
            meet your requirement <br /> surpass your expectation
          </h4>
        </div>
      </div>
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
      <div className="bg-[url('/img/bw.jpg')] bg-cover bg-center bg-no-repeat min-w-screen min-h-screen w-screen h-full bg-scroll">
        <div className="container mx-auto w-full pb-16">
          <div className="flex pt-40">
            <div className="w-3/5">
              <HeroTitle />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-12 p-6 md:justify-between md:flex-row-reverse">
            <div className="text-right text-white flex flex-col gap-4">
              <div className="flex-col gap-4 bg-black/15 rounded-xl p-6">
                <p className="text-sm font-semibold">Design. Create. Deliver</p>
                <h4 className="text-6xl font-black">100+</h4>
                <h6 className="text-xl capitalize">completed projects</h6>
              </div>
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
            <hr className="w-4/5 mx-auto border-t-2 border-primary"></hr>
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
          <div className="pb-32">
            <Brands />
          </div>
          <GetQuote />
        </div>
      </div>
      {/* <div className="py-32">

      </div> */}
      {/* <div className="w-full p-6 h-96 max-w-screen bg-primary/70">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="text-6xl text-white capitalize pt-28">
            <p>Get A quotation</p>
            <Link href={"/contact"} title={"get->"}></Link>
          </div>
          <div>
            <form>
              <h2>Quick</h2>
              <Input type="text" name="contact" />
            </form>
          </div>
        </div>

      </div> */}
    </main>
  );
}
