type ButtonIconProps = {
  primary?: boolean
  source: string
  alt: string
}

const ButtonIcon = ({ source, alt, primary }: ButtonIconProps) => {
  return (
    <button
      className={`cursor-pointer rounded-full p-2 hover:shadow-sm ${primary ? 'bg-red-500' : ''}`}
    >
      <img src={source} alt={alt} />
    </button>
  )
}

export default ButtonIcon
