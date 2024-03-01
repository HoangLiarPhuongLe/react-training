import { listNavHeader } from '../../constants/constant'

const Navbar = () => {
  const navList = listNavHeader.map((item) => (
    <li
      key={item.content}
      className="cursor-pointer capitalize hover:font-bold hover:text-blue-400"
    >
      <a href={item.to}>{item.content}</a>
    </li>
  ))

  return (
    <nav className="flex items-center">
      <ul className="flex flex-row items-center gap-8 font-mono text-xl font-normal text-black">
        {navList}
      </ul>
    </nav>
  )
}

export default Navbar
