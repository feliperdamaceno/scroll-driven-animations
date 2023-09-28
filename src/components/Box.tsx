import type { ReactNode } from 'react'

const SIZES = {
  sm: '5rem',
  md: '10rem',
  lg: '15rem',
  xl: '20rem'
}

export type Size = 'sm' | 'md' | 'lg' | 'xl'

interface BoxProps {
  children: ReactNode
  size: Size
}

export default function Box({ children, size }: BoxProps) {
  return (
    <div
      className="box"
      style={{
        minWidth: SIZES[size]
      }}
    >
      {children}
    </div>
  )
}
