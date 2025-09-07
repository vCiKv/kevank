"use client"
import { Close } from "@icon-park/react";
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { twMerge } from "tailwind-merge";

const Modal = (props: { isOpen: boolean, close: () => void, children: React.ReactNode, noClose?: boolean, }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (typeof (window) !== "undefined") {
      setLoading(false)
    }
  }, [])
  const { isOpen, noClose, close, } = props
  if (!isOpen || loading) {
    return <></>
  }
  return createPortal(
    <>
      <div className='fixed top-0 left-0 w-screen h-screen bg-white/80 backdrop-blur-2xl z-50 overflow-hidden'>
        <div className='relative w-screen h-screen' onClick={close}>
        </div>
        <div className={twMerge('absolute left-1/2 -translate-x-1/2 z-30 max-h-[80vh] top-10')}>
          {!noClose &&
            <span className='absolute -right-4 -top-4 cursor-pointer' onClick={close}>
              <div className='bg-red-500 hover:bg-red-600 p-2 rounded-full text-white size-8 inline-flex justify-center'>
                <Close />
              </div>
            </span>
          }
          <div className="overflow-y-auto h-[90vh] w-[70vw] max-w-3xl min-w-[250px]">
            {props.children}
          </div>
        </div>
      </div>
    </>,
    document.body
  )
}
export { Modal }