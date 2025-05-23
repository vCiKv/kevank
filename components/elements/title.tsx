import React from "react";
import { ClassNameValue, twJoin } from "tailwind-merge";

export interface SectionTitleProps {
  title: string | React.ReactElement;
  subtitle?: string | React.ReactElement;
  center?: boolean;
}
interface HeroTitleProps extends SectionTitleProps {
  className?: string;
}
export function HeroTitle(props: HeroTitleProps) {
  return (
    <div className={props?.className}>
      <h1
        className={twJoin(
          "text-accent mt-3 mb-1 text-7xl md:text-8xl font-medium -tracking-wider",
          props.center ? "text-center" : ""
        )}
      >
        {props.title}
      </h1>
      {props.subtitle && (
        <h4
          className={twJoin(
            "text-black/80 mt-1 mb-5 text-2xl font-semibold italic ",
            props.center ? "text-center" : ""
          )}
        >
          {props.subtitle}
        </h4>
      )}
    </div>
  );
}
export function SectionTitle(props: SectionTitleProps) {
  return (
    <>
      <h1
        className={twJoin(
          "text-primary mt-3 mb-1 text-6xl font-black -tracking-wider",
          props.center ? "text-center" : "",
          !props.subtitle ? "mb-5" : ""
        )}
      >
        {props.title}
      </h1>
      {props.subtitle && (
        <SectionSubtitle title={props.subtitle} center={props.center} />
      )}
    </>
  );
}
export function Heading(props: SectionTitleProps) {
  return (
    <>
      <h2
        className={twJoin(
          "text-accent mb-1 text-4xl font-extrabold -tracking-wide",
          props.center ? "text-center" : ""
        )}
      >
        {props.title}
      </h2>
      {props.subtitle && (
        <h4
          className={twJoin(
            "mt-1 mb-5 text-lg font-semibold ",
            props.center ? "text-center" : ""
          )}
        >
          {props.subtitle}
        </h4>
      )}
    </>
  );
}
export function SectionSubtitle(props: Omit<SectionTitleProps, "subtitle">) {
  return (
    <h4
      className={twJoin(
        "text-primary/80 mt-1 mb-5 text-xl font-semibold ",
        props.center ? "text-center" : ""
      )}
    >
      {props.title}
    </h4>
  );
}

export const P = ({
  children,
  className,
}: {
  children: React.ReactNode | string;
  className?: ClassNameValue;
}) => {
  return <p className="text-lg leading-relaxed">{children}</p>;
};
