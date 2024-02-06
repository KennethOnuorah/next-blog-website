"use client"

import Link from "next/link"
import { useState, useRef } from "react"
import SearchBar from "./SearchBar"

import useViewportDimensions from "@/lib/useViewportDimensions"
import { FaGithub, FaLinkedin, FaSearch } from 'react-icons/fa'

export default function Navbar() {
  const { width } = useViewportDimensions()

  const onMobileDevice = width < 768
  const [isMobileSearchButtonEnabled, setIsMobileSearchButtonEnabled] = useState(onMobileDevice ? true : false)
  const [isSearchBarFocused, setIsSearchBarFocused] = useState(false)

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