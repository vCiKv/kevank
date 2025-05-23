import { default as NextImage } from "next/image"

interface ImageProps {
  src: string,
  alt?: string,
  className?: string
}
function Image(props: ImageProps) {
  return (
    <NextImage {...props} className={"rounded-xl" + props?.className} alt={props?.alt ?? ""} src={props.src} fill />
  )
}
export default Image