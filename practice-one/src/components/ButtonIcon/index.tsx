export type ButtonIconProps = {
  variant?: 'primary' | 'secondary'
  source: string
  alt: string
}

const ButtonIcon = ({ source, alt, variant = 'primary' }: ButtonIconProps) => (
  <button
    className={`cursor-pointer p-1 ${variant === 'secondary' ? 'bg-red-500' : ''}`}
  >
    <img src={source} alt={alt} />
  </button>
)

export default ButtonIcon
