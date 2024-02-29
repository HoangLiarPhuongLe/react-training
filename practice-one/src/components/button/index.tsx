import { ReactNode } from 'react'

const Button = (props: ButtonProps) => {
  const { children, primary = false, size = 'medium' } = props

  const mode = primary ? 'bg-purple-700' : 'bg-red-700'

  const result = size === 'medium' ? 'w-44' : 'w-96'
  return (
    <button 
      className={`cursor:pointer h-12 border-solid font-bold text-white ${mode} ${result}`}
    >
      {children}
    </button>
  )
}

type ButtonProps = {
  primary?: boolean
  children?: ReactNode
  size?: 'medium' | 'large'
}

export default Button
