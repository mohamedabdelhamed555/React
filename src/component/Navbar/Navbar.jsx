import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 py-4 text-white uppercase">
      <div className="container mx-auto px-8 py-4 flex flex-wrap items-center justify-between">
        <NavLink className="text-2xl font-bold text-white" to={''}>
          Start Framework
        </NavLink>

        <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
          <ul className="flex flex-col md:flex-row md:ml-auto">
            <li className="my-2 md:my-0">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'text-white text-sm font-bold border-b-2 border-white pb-1 mx-2'
                    : 'text-white text-sm font-bold hover:text-gray-300 mx-2'
                }
                to="/about"
              >
                about
              </NavLink>
            </li>
            <li className="my-2 md:my-0">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'text-white text-sm font-bold border-b-2 border-white pb-1 mx-2'
                    : 'text-white text-sm font-bold hover:text-gray-300 mx-2'
                }
                to="/Portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="my-2 md:my-0">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'text-white text-sm font-bold border-b-2 border-white pb-1 mx-2'
                    : 'text-white text-sm font-bold hover:text-gray-300 mx-2'
                }
                to="/contact"
              >
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
