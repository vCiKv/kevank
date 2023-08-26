import { twJoin } from "tailwind-merge";
import Image from "./components/image"; 

interface HeroTitleProps {
  title:string | JSX.Element
  subtitle?:string | JSX.Element;
  center?:boolean
  className?:string
}
const HeroTitle = (props:HeroTitleProps)=>{
  return (
    <div className={props?.className}>
      <h1 className={twJoin("text-accent mt-3 mb-1 text-8xl font-black -tracking-wider",props.center?"text-center":"")}>{props.title}</h1>
      {props.subtitle && <h4 className={twJoin("text-primary/80 mt-1 mb-5 text-2xl font-semibold italic ",props.center?"text-center":"")}>{props.subtitle}</h4>}
    </div>
  )  
}
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
export default Hero