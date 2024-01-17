"use client"

import { Dispatch, FocusEvent, KeyboardEvent, SetStateAction, useState } from "react"
import { useRouter } from "next/navigation"

type Props = {
  setFocus: Dispatch<SetStateAction<boolean>>
  isFocused: boolean
}

export default function SearchBar({ setFocus, isFocused } : Props) {
  const router = useRouter()
  const [query, setQuery] = useState("")

  return (
    <input 
      className={`transition-all rounded-md py-2 px-4 bg-gray-700 text-white focus:outline-white/90 ${isFocused && 'w-full'}`}
      type="search"
      name="Search bar"
      placeholder='🔍 Search posts'
      onFocus={() => setFocus(true)}
      onBlur={(e: FocusEvent<HTMLInputElement>) => {
        e.currentTarget.value = ""
        setFocus(false)
      }}
      onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => {
        setQuery(e.currentTarget.value)
        if(e.key === "Enter" && query !== "") router.push(`/search?q=${query}`)
      }}
    />
  )
}