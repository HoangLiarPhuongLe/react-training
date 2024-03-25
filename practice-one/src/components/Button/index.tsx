import { ReactNode } from 'react'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tinary'
  children?: ReactNode
  size?: 'small' | 'medium' | 'large'
  checked?: boolean
  onClick?: () => void
  disabled?: boolean
}

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  checked,
  disabled
}: ButtonProps) => {
  let mode = ''
  if (variant === 'primary') {
    mode = 'bg-purple-500 text-white'
  } else if (variant === 'secondary') {
    mode = 'text-black border-2'
  } else mode = 'bg-white text-fuchsia-700'

  let result = ''
  if (size === 'large') {
    result = 'w-full'
  } else if (size === 'medium') {
    result = 'w-44'
  } else result = 'w-24'

  let focus = ''
  checked ? (focus = 'text-white bg-blue-500') : (focus = 'bg-white')

  let isDisabled = ''
  disabled ? (isDisabled = 'bg-gray-600 text-slate-500') : (isDisabled = '')

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`cursor:pointer bg h-12 border-solid font-bold capitalize ${isDisabled} ${mode} ${result} ${focus} `}
    >
      {children}
    </button>
  )
}

export default Button
