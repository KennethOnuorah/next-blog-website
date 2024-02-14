"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import SearchBar from "./SearchBar"
import useViewportDimensions from "@/lib/useViewportDimensions"

import { FaGithub, FaSearch, FaMoon, FaSun } from 'react-icons/fa'

export default function Navbar() {
  const { width } = useViewportDimensions()

  const onMobileDevice = width < 768
  const [isMobileSearchButtonEnabled, setIsMobileSearchButtonEnabled] = useState(onMobileDevice ? true : false)
  const [isSearchBarFocused, setIsSearchBarFocused] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if(theme === "dark") setDarkMode(true)
  }, [])

  useEffect(() => {
    if(darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  return (
    <nav className="bg-gray-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col md:flex-row items-center">
        <h1 className={`text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0 ${((!onMobileDevice && isSearchBarFocused)) ? 'hidden' : 'block'}`}>
          <Link href={'/'} className=" text-white/90 no-underline hover:text-white">
            Kenneth Onuorah
          </Link>
        </h1>
        <div className={`flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl ${((!onMobileDevice && isSearchBarFocused) || (onMobileDevice && !isMobileSearchButtonEnabled)) ? 'hidden' : 'block'}`}>
          <button
            className={`${onMobileDevice ? 'block' : 'hidden'}`}
            onClick={() => {
              setIsMobileSearchButtonEnabled(false)
            }}
          >
            <FaSearch size={35}/>
          </button>
          <button
            className="transition-all active:scale-75"
            onClick={() => {
              setDarkMode(!darkMode)
            }}
          >
            {darkMode ? <FaSun size={38}/> : <FaMoon size={38}/>}
          </button>
          <Link 
            className="text-white/90 hover:text-white"
            href="https://github.com/KennethOnuorah/next-blog-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={40}/>
          </Link>
        </div>
        {(!onMobileDevice || (onMobileDevice && !isMobileSearchButtonEnabled)) && 
          <SearchBar
            onMobileDevice={onMobileDevice}
            setMobileSearch={setIsMobileSearchButtonEnabled}
            setIsSearchBarFocused={setIsSearchBarFocused}
            isMobileSearchButtonEnabled={isMobileSearchButtonEnabled}
            isSearchBarFocused={isSearchBarFocused}
          />
        }
      </div>
    </nav>
  )
}