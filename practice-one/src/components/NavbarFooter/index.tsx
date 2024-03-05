import { FOOTER_NAVLIST } from '../../constants/navigation'
import NavbarFooterItems from './NavbarFooterItems'

const NavbarFooter = () => {
  const listNavbarFooter = FOOTER_NAVLIST.map((item) => (
    <li key={item.title} className=" font-bold capitalize text-white ">
      <p className="mb-4 text-2xl">{item.title}</p>
      <NavbarFooterItems contents={item.contents} />
    </li>
  ))
  return <ul className="flex gap-16">{listNavbarFooter}</ul>
}

export default NavbarFooter
