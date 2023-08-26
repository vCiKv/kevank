import { twJoin } from "tailwind-merge";

interface SectionTitleProps {
  title:string | JSX.Element
  subtitle?:string | JSX.Element;
  center?:boolean
}
export const SectionTitle = (props:SectionTitleProps)=>{
  return (
    <>
      <h1 className={twJoin("text-primary mt-3 mb-1 text-6xl font-black -tracking-wider",props.center?"text-center":"",!props.subtitle?"mb-5":"")}>{props.title}</h1>
      {props.subtitle && <SectionSubtitle title={props.subtitle} center={props.center}/>}
    </>
  )  
}

export const Heading = (props:SectionTitleProps)=>{
  return (
    <>
      <h2 className={twJoin("text-accent mb-1 text-4xl font-extrabold -tracking-wide",props.center?"text-center":"")}>{props.title}</h2>
      {props.subtitle && <h4 className={twJoin("mt-1 mb-5 text-lg font-semibold ",props.center?"text-center":"")}>{props.subtitle}</h4>}
    </>
  )  
}
export const SectionSubtitle = (props:Omit<SectionTitleProps,"subtitle">)=>{
  return(
    <h4 className={twJoin("text-primary/80 mt-1 mb-5 text-xl font-semibold ",props.center?"text-center":"")}>{props.title}</h4>
  )
}