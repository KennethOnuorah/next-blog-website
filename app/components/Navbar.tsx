"use client"

import { useState } from "react"

import Link from "next/link"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import SearchBar from "./SearchBar"

export default function Navbar() {
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  return (
    <nav className="bg-gray-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row items-center">
        <h1 className={`text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0 ${isSearchFocused ? "hidden" : "block"}`}>
          <Link href={'/'} className=" text-white/90 no-underline hover:text-white">
            Kenneth Onuorah
          </Link>
        </h1>
        <div className={`flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl ${isSearchFocused ? "hidden" : "block"}`}>
          <Link 
            className="text-white/90 hover:text-white" 
            href="https://www.linkedin.com/in/kenneth-onuorah-64640419b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={40}/>
          </Link>
          <Link 
            className="text-white/90 hover:text-white"
            href="https://github.com/KennethOnuorah/next-blog-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={40}/>
          </Link>
        </div>
        <SearchBar setFocus={setIsSearchFocused} isFocused={isSearchFocused}/>
      </div>
    </nav>
  )
}
