import { ReactNode } from 'react'

interface VideoAreaProps {
  children: ReactNode
}

export function VideoArea({ children }: VideoAreaProps) {
  return (
    <div className="relative bg-black w-full" style={{ paddingTop: '177.78%' }}>
      <div className="absolute inset-0">
        {children}
      </div>
    </div>
  )
}
