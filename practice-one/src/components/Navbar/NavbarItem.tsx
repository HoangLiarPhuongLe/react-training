import { Link } from 'react-router-dom'

const NavbarItem = ({ item }: { item: { content: string; to: string } }) => (
  <li
    key={item.content}
    className="cursor-pointer capitalize hover:font-bold hover:text-blue-400"
  >
    <Link to={item.to}>{item.content}</Link>
  </li>
)

export default NavbarItem
