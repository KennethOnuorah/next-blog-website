"use client"

import { Dispatch, KeyboardEvent, SetStateAction, useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

type Props = {
  onMobileDevice: boolean
  setMobileSearch: Dispatch<SetStateAction<boolean>>
  isMobileSearchButtonEnabled: boolean
}

export default function SearchBar({onMobileDevice, setMobileSearch, isMobileSearchButtonEnabled } : Props){
  const router = useRouter()
  const [query, setQuery] = useState("")
  const searchBarRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if(!isMobileSearchButtonEnabled) searchBarRef.current?.focus()
  }, [isMobileSearchButtonEnabled])

  return (
    <input
      className="transition-all rounded-md py-2 px-4 bg-gray-700 text-white focus:outline-white/90"
      ref={searchBarRef}
      type="search"
      name="Search bar"
      placeholder='🔍 Search posts'
      onBlur={() => setMobileSearch(onMobileDevice ? true : false)}
      onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => {
        setQuery(e.currentTarget.value)
        if(e.key === "Enter" && query !== "") {
          e.currentTarget.value = ""
          router.push(`/search?q=${query}`)
        }
      }}
    />
  )
}