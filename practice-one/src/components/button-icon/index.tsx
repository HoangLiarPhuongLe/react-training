const ButtonIcon = (props: ButtonIconProps) => {
  const { source, alt, primary } = props
  return (
    <button
      className={`cursor-pointer rounded-full p-2 hover:shadow-sm ${primary ? 'bg-red-500' : ''}`}
    >
      <img src={source} alt={alt} />
    </button>
  )
}

type ButtonIconProps = {
  primary?: boolean
  source: string
  alt: string
}

export default ButtonIcon
