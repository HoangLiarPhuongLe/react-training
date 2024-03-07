import { ReactNode } from 'react'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tinary'
  children?: ReactNode
  size?: 'medium' | 'large'
}

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
}: ButtonProps) => {
  let mode = ''
  if (variant === 'primary') {
    mode = 'bg-purple-500 text-white'
  } else if (variant === 'secondary') {
    mode = 'bg-red-600 text-white'
  } else mode = 'bg-white text-fuchsia-700'

  const result = size === 'medium' ? 'w-44' : 'w-96'

  return (
    <button
      className={`cursor:pointer bg h-12 border-solid font-bold capitalize ${mode} ${result}`}
    >
      {children}
    </button>
  )
}

export default Button
