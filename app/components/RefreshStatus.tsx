import { useFormStatus } from "react-dom"
import RefreshStatusText from "./RefreshStatusText"

export default function RefreshStatus() {
  const { pending, } = useFormStatus()

  return (
    <h3 className="italic text-gray-500">
      <RefreshStatusText pending={pending}/>
    </h3>
  )
}
