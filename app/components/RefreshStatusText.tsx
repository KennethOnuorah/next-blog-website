'use client'

import getElapsedTime from "@/lib/getElapsedTime"
import { useEffect, useState } from "react"

type Props = {
  pending: boolean
}

export default function RefreshStatusText({ pending }: Props) {
  const [isMounted, setIsMounted] = useState(false)
  const [dateLastUpdated, setDateLastUpdated] = useState(0)

  useEffect(() => {
    setDateLastUpdated(JSON.parse(localStorage.getItem('dateLastUpdated')!) as number)
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if(!pending) return
    localStorage.setItem('dateLastUpdated', new Date().getTime().toString())
    setDateLastUpdated(JSON.parse(localStorage.getItem('dateLastUpdated')!) as number)
  }, [pending])

  return pending ? "Fetching new posts..." : isMounted ? getElapsedTime(dateLastUpdated) : 'Please wait...'
}
