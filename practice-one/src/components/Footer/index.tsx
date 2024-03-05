import logo from '../../assets/images/logo.png'
import Button from '../Button'
import NavbarFooter from '../NavbarFooter'

const Footer = () => (
  <footer className="flex justify-between bg-slate-600 px-28 py-16">
    <div>
      <img className="cursor-pointer" src={logo} alt="logo" />
      <p className="mb-8 mt-4 max-w-[424px] text-lg text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis,
        justo nec porttitor auctor, erat sapien faucibus lectus, vel tempor
        dolor augue et lectus.
      </p>
      <Button variant="tinary">login now</Button>
    </div>
    <div className="">
      <NavbarFooter />
    </div>
  </footer>
)

export default Footer
