import React from 'react'

export default function Header() {
  return (
    <header className="bg-indigo-500 h-20 w-full flex items-center justify-between fixed">
        <label className="text-white  pl-12 md:pl-24 md:text-4xl text-3xl">Crud-Auth-System</label>
        <nav>
        <ul className="flex gap-4 mr-12">
            <li><a href="/login" className="text-white hover:text-gray-300">Login</a></li>
            <li><a href="/signup" className="text-white hover:text-gray-300">Signup</a></li>
            <li><a href="/articles" className="text-white hover:text-gray-300">Articles</a></li>
        </ul>
    </nav>
    </header>
  )
}
