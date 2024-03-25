import ButtonIcon from '../ButtonIcon'

type StarFiveProps = { list: { source: string; alt: string }[] }

const StarFive = ({ list }: StarFiveProps) => {
  const stars = list.map((star) => (
    <ButtonIcon
      source={star.source}
      alt={star.alt}
      key={star.source}
    ></ButtonIcon>
  ))

  return (
    <div className="mt-5">
      {stars}
      <span className=" text-slate-400">(2k)</span>
    </div>
  )
}

export default StarFive
