import React, { FC, ReactNode, ComponentType, HTMLAttributes } from 'react';

interface Props {
  children: ReactNode | ReactNode[],
  el?: ComponentType<HTMLAttributes<HTMLElement>>
  additionalClasses?: string
}

const Container: FC<Props> = ({ children, el: Component = "div" as any, additionalClasses }) => {
  return (
    <Component className={`px-6 mx-auto max-w-8xl ${additionalClasses}`}>
      {children}
    </Component>
  )
}

export default Container;