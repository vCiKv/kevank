"use client"
import * as React from "react"
import { twMerge } from "tailwind-merge"


const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input"> & {
  label?: string
}>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 text-white">
        {
          props.label &&
          <label
            htmlFor={props.name}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize"
          >
            {props.label}
          </label>
        }
        <input
          type={type}
          className={twMerge(
            "flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea"> & {
  label?: string
}>(
  ({ className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 text-white">
        {
          props.label &&
          <label htmlFor={props.name}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize"
          >
            {props.label}
          </label>
        }
        <textarea
          className={twMerge(
            "flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export default Input
