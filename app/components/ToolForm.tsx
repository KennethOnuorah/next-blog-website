'use client'

import { useRef, useState, useCallback } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { refreshFeed } from "@/actions/actions"
import { IoFilter as Sort } from "react-icons/io5"

import { Menu } from "@mui/material"

import RefreshButton from "./RefreshButton"
import RefreshStatus from "./RefreshStatus"

export default function ToolForm() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [filtersOpened, setFiltersOpened] = useState(false)
  const [currentFilter, setCurentFilter] = useState<SortingMethod>(
    searchParams!.has("sortBy") ? searchParams!.get("sortBy") as SortingMethod : 'recent'
  )
  const filterOptions: {[key: string]: SortingMethod} = {
    "Sort by Recent": 'recent',
    "Sort by Oldest": 'oldest',
    "Sort by A-Z": 'a_z',
    "Sort by Z-A": 'z_a',
  }
  const filterRef = useRef<HTMLButtonElement>(null)

  const addQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams!.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  return (
    <form 
      action={async() => {
        await refreshFeed()
      }} 
      className="flex justify-between items-center"
    >
      <button
        ref={filterRef}
        name="filter"
        title="Sort results" 
        className="p-2 text-gray-500 dark:hover:text-gray-100"
        onClick={(e) => {
          e.preventDefault()
          setFiltersOpened(!filtersOpened)
        }}
      >
        <Sort size={25}/>
      </button>
      <Menu
        open={filtersOpened}
        anchorEl={filterRef.current}
        onClose={() => setFiltersOpened(false)}  
        disableScrollLock
      >
        <h3 className="p-2 text-center font-bold">
          All Sorts
        </h3>
        <hr />
        <div className="flex flex-col text-center mx-2 mt-2">
          {Object.entries(filterOptions).map((option, index) => 
            <button
              key={index}
              id={option[1]}
              className="hover:bg-gray-200 p-2 rounded-md" 
              onClick={(e) => {
                setFiltersOpened(false)
                setCurentFilter(e.currentTarget.id as SortingMethod)
                router.push(pathname + '?' + addQueryString('sortBy', option[1]))
              }}
            >
              {option[0]} {currentFilter === option[1] && '✅'}
            </button>
          )}
        </div>
      </Menu>
      <RefreshStatus/>
      <RefreshButton/>
    </form>
  )
}
