const NavbarItem = ({ item }: { item: { content: string; to: string } }) => (
  <li
    key={item.content}
    className="cursor-pointer capitalize hover:font-bold hover:text-blue-400"
  >
    <a href={item.to}>{item.content}</a>
  </li>
)

export default NavbarItem
