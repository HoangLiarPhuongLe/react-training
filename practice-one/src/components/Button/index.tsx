import { ReactNode } from 'react'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  children?: ReactNode
  size?: 'medium' | 'large'
}

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
}: ButtonProps) => {
  const mode = variant === 'secondary' ? 'bg-purple-700' : 'bg-red-700'

  const result = size === 'medium' ? 'w-44' : 'w-96'
  return (
    <button
      className={`cursor:pointer h-12 border-solid font-bold text-white ${mode} ${result}`}
    >
      {children}
    </button>
  )
}

export default Button
