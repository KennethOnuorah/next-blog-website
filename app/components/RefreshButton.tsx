import { useFormStatus } from "react-dom"
import { CircularProgress } from "@mui/material"
import { IoMdRefresh as Refresh } from "react-icons/io"

export default function RefreshButton() {
  const { pending, } = useFormStatus()

  return (
    <button 
      name="refresh"
      type="submit"
      title="Refresh feed" 
      className="p-2 text-gray-500 dark:hover:text-gray-100"
    >
      {pending ? <CircularProgress color="inherit" size={21}/> : <Refresh size={25}/>}
    </button>
  )
}
