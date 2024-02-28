'use client'

import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { useSearchParams } from "next/navigation"

import { Pagination } from "@mui/material"

type Props = {
  pageCount: number
  defaultPage: string
}

export default function PostsPagination({ pageCount, defaultPage } : Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [currentPage, setCurrentPage] = useState(searchParams!.has('page') ? searchParams!.get('page') as string : '1')
  
  const addQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams!.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  useEffect(() => {
    const page = searchParams!.has('page') ? searchParams!.get('page') as string : '1'
    setCurrentPage(page)
  }, [searchParams])

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    router.push(pathname + '?' + addQueryString('page', value.toString()))
  }

  return (
    <div className="flex justify-center text-gray-500 mb-2">
      <Pagination 
        count={pageCount}
        defaultPage={JSON.parse(defaultPage)}
        page={JSON.parse(currentPage)}
        sx={{
          ul: {
            "& .MuiPaginationItem-root": {
              color: "rgb(107, 114, 128)"
            },
            "& .MuiPaginationItem-root:is(.Mui-selected)": {
              fontSize: "large"
            }
          }
        }}
        onChange={handlePageChange}
      />
    </div>
  )
}
