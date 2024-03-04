type NavbarFooterItemsProps = {
  contents: (
    | {
        to: string
        info: string
      }
    | {
        to: string
        info: {
          img: () => JSX.Element
          alt: string
        }
      }[]
  )[]
}

const NavbarFooterItems = ({ contents }: NavbarFooterItemsProps) => {
  return (
    <ul className="space-y-2">
      {contents.map((content) => {
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
  )
}

export default NavbarFooterItems
