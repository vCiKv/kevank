import { Search } from "@icon-park/react";
import Input from "./elements/input";

interface PropsType extends React.InputHTMLAttributes<HTMLInputElement> { onSearch: () => void }
export default function InputSearch(props: PropsType) {
  const { onSearch, ...inputProps } = props
  return (
    <div className="inline-flex flex-nowrap gap-2 w-full justify-center">
      <Input placeholder="search" className="text-black" type="text" {...inputProps} />
      <button
        className="size-10 bg-gradient-to-b to-primary/5 from-white/30 border from-60% border-white/60 backdrop-blur-[3px] shadow-sm inline-flex justify-center items-center rounded-lg gap-0.5 cursor-pointer hover:bg-white/60"
        onClick={onSearch}
      >
        <Search size={"24"} />
      </button>
    </div>
  )
}