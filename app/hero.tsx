import { twJoin } from "tailwind-merge";

interface HeroTitleProps {
  title:string | JSX.Element
  subtitle?:string | JSX.Element;
  center?:boolean
  className?:string
}
export const HeroTitle = (props:HeroTitleProps)=>{
  return (
    <div className={props?.className}>
      <h1 className={twJoin("text-primary mt-3 mb-1 text-8xl font-black -tracking-wider",props.center?"text-center":"")}>{props.title}</h1>
      {props.subtitle && <h4 className={twJoin("text-primary/80 mt-1 mb-5 text-xl font-semibold ",props.center?"text-center":"")}>{props.subtitle}</h4>}
    </div>
  )  
}
const Hero = ()=>{
  return (
    <section>
      <div className="w-full h-screen">

      </div>
    
    </section>
  )

}
export default Hero