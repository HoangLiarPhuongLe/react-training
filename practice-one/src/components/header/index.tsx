import logo from '../../assets/images/logo.png'
import searchicon from '../../assets/images/searchicon.svg'
import ButtonIcon from '../button-icon'
import Navbar from '../navbar'
import cart from '../../assets/images/cart.svg'
import account from '../../assets/images/account.svg'
import heart from '../../assets/images/heart.svg'

const Header = () => {
  return (
    <header className="flex items-center justify-between px-28 py-8">
      <div className="max-w-[500px]">
        <img className="cursor-pointer" src={logo} alt="logo" />
      </div>
      <div className="flex gap-6">
        <Navbar />
        <div className="flex flex-row items-center gap-6">
          <ButtonIcon source={cart} alt="cart" />
          <ButtonIcon source={heart} alt="heart" />
          <ButtonIcon source={account} alt="account" />
        </div>
        <div className="relative flex flex-nowrap">
          <input
            className="rounded-md border px-3 py-1 text-lg outline-none"
            type="search"
            placeholder="Search"
            maxLength={20}
          />
          <img
            className="absolute bottom-1/3 right-4 cursor-pointer"
            src={searchicon}
            alt="search icon"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
