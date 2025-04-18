import { twMerge } from "tailwind-merge";

interface BoxType {
  children: React.ReactNode;
  className?: string;
}
function Box(props: BoxType) {
  return (
    <div className={twMerge("rounded-xl px-4 pt-4 pb-6 bg-gradient-to-b to-primary/5 from-white/30 border from-60% border-white/60 backdrop-blur-[3px] w-full", props?.className)}>
      {props.children}
    </div>
  );
};

export default Box