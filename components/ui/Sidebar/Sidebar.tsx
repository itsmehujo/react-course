
import React, { FC, useEffect, useRef, useState } from 'react'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock"

interface Props {
  children: any
  isOpen: boolean
  onClose: () => void
}

const Sidebar: FC<Props> = ({ children, isOpen, onClose }) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    if (!ref.current) return
    isOpen ? disableBodyScroll(ref.current) : enableBodyScroll(ref.current);
    return () => { clearAllBodyScrollLocks() }
  }, [isOpen])
  return (
    <section ref={ref}
      className={`fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16 outline-none ${!isOpen ? 'pointer-events-none' : 'pointer-events-auto'}`} data-open={isOpen ? true : false}>
      <div className={`h-full md:w-screen md:max-w-md transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col text-black bg-white shadow-xl overflow-y-auto">
          {children}
        </div>
      </div>
    </section>
  )
}

export default Sidebar
