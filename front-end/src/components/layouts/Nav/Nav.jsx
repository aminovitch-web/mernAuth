import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <ul className="flex gap-20 mr-40">
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "text-white hover:text-gray-300 underline" : "text-white hover:text-gray-300"
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? "text-white hover:text-gray-300 underline" : "text-white hover:text-gray-300"
            }
          >
            Signup
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
