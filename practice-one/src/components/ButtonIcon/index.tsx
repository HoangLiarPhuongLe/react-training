type ButtonIconProps = {
  variant?: 'primary' | 'secondary'
  source: string
  alt: string
}

const ButtonIcon = ({ source, alt, variant = 'primary' }: ButtonIconProps) => (
  <button
    className={`cursor-pointer rounded-full p-2 hover:shadow-sm ${variant === 'secondary' ? 'bg-red-500' : ''}`}
  >
    <img src={source} alt={alt} />
  </button>
)

export default ButtonIcon
