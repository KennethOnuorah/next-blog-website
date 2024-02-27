'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"

import { Pagination } from "@mui/material"

type Props = {
  pageCount: number
  defaultPage: string
}

export default function PostsPagination({ pageCount, defaultPage } : Props) {
  const router = useRouter()
  const pathname = usePathname()
  
  useEffect(() => {

  }, [pathname])

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    router.push(`/?page=${value}`)
  }

  return (
    <div className="flex justify-center text-gray-500 mb-2">
      <Pagination 
        count={pageCount}
        defaultPage={JSON.parse(defaultPage)}
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
