import { useFormStatus } from "react-dom"

export default function RefreshStatus() {
  const { pending, } = useFormStatus()

  return (
    <h3 className="italic text-gray-500">
      {pending ? "Please wait..." : "Last updated a moment ago"}
    </h3>
  )
}
