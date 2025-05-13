export default function BTN(props: React.ComponentProps<"button"> & { noArrow?: boolean }) {
  return (
    <button
      className="inline-flex items-center rounded cursor-pointer bg-primary px-6 py-3 font-semibold text-white transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)0px_0px]">
      {props.children} {!props.noArrow && "→"}
    </button>
  )
}