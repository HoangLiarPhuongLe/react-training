import { HEADER_NAVLIST } from '../../constants/navigation'
import logo from '../../assets/images/logo.png'
import searchicon from '../../assets/images/searchicon.svg'
import cart from '../../assets/images/cart.svg'
import account from '../../assets/images/account.svg'
import heart from '../../assets/images/heart.svg'
import { Link } from 'react-router-dom'
import ButtonIcon from '../ButtonIcon'
import Navbar from '../Navbar'
import { Dispatch, SetStateAction } from 'react'

const Header = ({
  cartlength,
  setSearchValue,
}: {
  cartlength: number
  setSearchValue: Dispatch<SetStateAction<string>>
}) => (
  <header className="flex items-center justify-between px-28 py-8">
    <div className="max-w-[500px]">
      <img className="cursor-pointer" src={logo} alt="logo" />
    </div>
    <div className="flex gap-6">
      <Navbar list={HEADER_NAVLIST} />
      <div className="flex flex-row items-center gap-6">
        <Link to="/cart">
          <div className="relative">
            <ButtonIcon source={cart} alt="cart" />
            <p className="absolute bottom-4 left-4 size-4 rounded-2xl bg-red-300 text-center text-xs text-white ">
              {cartlength}
            </p>
          </div>
        </Link>
        <ButtonIcon source={heart} alt="heart" />
        <ButtonIcon source={account} alt="account" />
      </div>
      <form className="relative flex flex-nowrap">
        <input
          className="rounded-md border px-3 py-1 text-lg outline-none"
          type="search"
          placeholder="Search"
          maxLength={20}
          onChange={(e) => {
            setSearchValue(e.target.value)
          }}
        />
        <img
          className="absolute bottom-1/3 right-4 cursor-pointer"
          src={searchicon}
          alt="search icon"
        />
      </form>
    </div>
  </header>
)

export default Header
