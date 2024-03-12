import ButtonIcon from '../../../../components/ButtonIcon'
import Tshirt from '../../../../assets/images/tshirt.svg'
import Jacket from '../../../../assets/images/jacket.svg'
import Shirt from '../../../../assets/images/shirt.svg'
import Jeans from '../../../../assets/images/jeans.svg'

const Slides = () => {
  return (
    <ul className="flex gap-7">
      <li>
        <ButtonIcon source={Tshirt} alt="t-shirt"></ButtonIcon>
        <p className="text-center font-semibold capitalize text-white">
          t-shirt
        </p>
      </li>
      <li>
        <ButtonIcon source={Jacket} alt="jacket"></ButtonIcon>
        <p className="text-center font-semibold capitalize text-white">
          jacket
        </p>
      </li>
      <li>
        <ButtonIcon source={Shirt} alt="shirt"></ButtonIcon>
        <p className="text-center font-semibold capitalize text-white">shirt</p>
      </li>
      <li>
        <ButtonIcon source={Jeans} alt="jeans"></ButtonIcon>
        <p className="text-center font-semibold capitalize text-white">jeans</p>
      </li>
    </ul>
  )
}

export default Slides
