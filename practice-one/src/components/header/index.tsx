import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <header className="flex justify-between px-8 py-4">
      <div className="max-w-[500px]">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex gap-5">
        <nav className="flex flex-row gap-4 font-mono text-lg font-normal text-black">
          <a className="cursor-pointer hover:text-blue-600 ">Home</a>
          <a className="cursor-pointer hover:text-blue-600">Shop</a>
          <a className="cursor-pointer hover:text-blue-600">About Us</a>
          <a className="cursor-pointer hover:text-blue-600">Contact</a>
        </nav>
        <form className="border-2 border-solid border-slate-600">
          <input type="search" className="border-2" placeholder="Search" />
        </form>
      </div>
    </header>
  )
}

export default Header
