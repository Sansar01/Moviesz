import React from 'react'
import logo from '../assests/logo.png'
import usericon from '../assests/user.png'
import { NavLink } from 'react-router-dom'
import { IoSearchOutline } from 'react-icons/io5'

function Header() {
  const navigation = [
    {
      label: 'Tv Shows',
      href: 'tv',
    },
    {
      label: 'Movies',
      href: 'movies',
    },
  ]

  return (
    <header className="fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75">
      <div className="container mx-auto px-3 flex items-center h-full">
        <div>
          <img src={logo} alt="logo" width={120} />
        </div>
        <nav className="hidden lg:flex items-center gap-1 ml-5">
          {navigation.map((nav, index) => (
            <NavLink
              key={nav.label}
              to={nav.href}
              className={({ isActive }) =>
                `px-2 hover:text-neutral-100 ${isActive && 'text-neutral-100'}`
              }
            >
              {nav.label}
            </NavLink>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-5">
          <div className="text-xl text-white">
            <IoSearchOutline />
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all">
            <img src={usericon} alt="usericon" width="w-full h-full" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
