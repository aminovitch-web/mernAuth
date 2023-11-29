import React from 'react'
import Nav from '../Nav/Nav';
export default function Header() {
  return (
    <header className="bg-indigo-500 h-20 w-full flex items-center justify-between fixed">
        <label className="text-white  pl-12 md:pl-24 md:text-4xl text-3xl">Crud-Auth-System</label>
       <Nav />
    </header>
  )
}
