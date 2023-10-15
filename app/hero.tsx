import { twJoin } from "tailwind-merge";
import Image from "../components/elements/image"; 
import { HeroTitle } from "@/components/elements/title";


const Hero = ()=>{
  return (
    <section className="-mt-24">
      <div className="w-full h-screen">
        <div className="flex w-full h-full no-wrap">
          <div className="w-3/5">
            <HeroTitle title={"KEVANK NIGERIA LIMITED"} className="pl-32 mt-32" subtitle={"meet your requirement and surpass your expectation"}/>
          </div>
          <div className="relative w-2/5 opacity-50 -z-10 hover:opacity-100">
            <Image src="/img/bw.jpg" className="object-cover w-2/5 rounded-l-md"/>
          </div>
        </div>
      </div>
    </section>
  )
}
const HeroV1 = ()=>{
  return (
    <section className="-mt-24">
      <div className="w-full h-screen">
        <div className="flex w-full h-full no-wrap">
          <div className="w-3/5">
            <HeroTitle title={"KEVANK NIGERIA LIMITED"} className="pl-32 mt-32" subtitle={"meet your requirement and surpass your expectation"}/>
          </div>
          <div className="relative w-2/5 opacity-50 -z-10 hover:opacity-100">
            <Image src="/img/bw.jpg" className="object-cover w-2/5 rounded-l-md"/>
          </div>
        </div>
      </div>
    </section>
  )
}
// export default Hero