import NavbarItem from './NavbarItem'

type NavbarProps = { list: { to: string; content: string }[] }

const Navbar = ({ list }: NavbarProps) => {
  const navList = list.map((item) => (
    <NavbarItem key={item.content} item={item} />
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
