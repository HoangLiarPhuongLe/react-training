import logo from '../../assets/images/logo.png'
import Button from '../button'
import NavbarFooter from '../navbarfooter'
import cart from '../../assets/images/cart.svg'
import ButtonIcon from '../button-icon'
import heart from '../../assets/images/heart.svg'

const Footer = () => {
  return (
    <footer className="flex justify-between bg-slate-600 px-28 py-16">
      <div>
        <img className="cursor-pointer" src={logo} alt="logo" />
        <p className="mb-8 mt-4 max-w-[424px] text-lg text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis,
          justo nec porttitor auctor, erat sapien faucibus lectus, vel tempor
          dolor augue et lectus.{' '}
        </p>
        <Button>login now</Button>
      </div>
      <div className="">
        <NavbarFooter />
      </div>
    </footer>
  )
}

export default Footer
