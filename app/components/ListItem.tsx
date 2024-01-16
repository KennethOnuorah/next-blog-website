import Link from "next/link"
import Image from "next/image"
import getFormattedDate from "@/lib/getFormattedDate"

type Props = { 
  post: BlogPost
}

export default function ListItem({ post }: Props) {
  const { id, title, date, thumbnail } = post
  const formattedDate = getFormattedDate(date)
  
  return (
    <li className=" mt-4 text-2xl p-4 bg-gray-100 hover:bg-gray-200 rounded-md shadow-md shadow-black/20 transition-colors">
      <div className=" flex gap-4">
        <Image 
          className=" rounded-md hidden sm:block" 
          src={thumbnail} 
          alt={`Thumbnail for article: "${title}"`} 
          width={150} 
          height={150}
        />
        <div>
          <Link className=" underline hover:text-black/70" href={`/posts/${id}`}>
            {title}
          </Link>
          <br />
          <p className=" text-sm mt-1"><em>Date posted</em>: {formattedDate}</p>
        </div>
      </div>
    </li>
  )
}