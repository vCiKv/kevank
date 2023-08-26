import {default as NextImage} from "next/image"

interface ImageProps{
  src:string,
  alt?:string,
  className?:string
}
const Image = (props:ImageProps)=>{
  return(
    <NextImage className={props?.className} alt={props?.alt??""} src={props.src} fill/>
  )
}
export default Image