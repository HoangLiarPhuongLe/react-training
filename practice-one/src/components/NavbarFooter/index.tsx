import { FOOTER_NAVLIST } from '../../constants/constant'

const NavbarFooter = () => {
  const listNavbarFooter = FOOTER_NAVLIST.map((item) => (
    <li key={item.title} className=" font-bold capitalize text-white ">
      <p className="mb-4 text-2xl">{item.title}</p>
      <ul className="space-y-2">
        {item.contents.map((content) => {
          if (!Array.isArray(content))
            return (
              <li
                className="text-lg font-light hover:underline"
                key={content.info}
              >
                <a href={content.to}>{content.info}</a>
              </li>
            )
          return (
            <ul className="mt-4 flex space-x-3">
              {content.map((item) => (
                <li key={item.info.alt}>
                  <a href={item.to}>{<item.info.img />}</a>
                </li>
              ))}
            </ul>
          )
        })}
      </ul>
    </li>
  ))
  return <ul className="flex gap-16">{listNavbarFooter}</ul>
}

export default NavbarFooter
