import Link from "next/link"
import Image from "next/image"
import getFormattedDate from "@/lib/getFormattedDate"

type Props = {
  post: PostMetadata
}

export default function ListItem({ post }: Props) {
  const {id, title, date, thumbnailSource, tags} = post
  const formattedDate = getFormattedDate(date)

  return (
    <li className="mt-4 text-2xl p-4 hover:bg-gray-100/70 shadow-md shadow-black/20 transition-colors dark:hover:bg-gray-700">
      <div className="flex gap-4">
        <Image
          className="rounded-md hidden sm:block"
          src={thumbnailSource}
          alt={`Thumbnail for article: "${title}"`}
          width={150}
          height={150}
        />
        <div className="flex flex-col justify-between gap-4">
          <div>
            <Link
              className="hover:text-black/70 font-light hover:underline dark:text-white dark:hover:text-gray-200"
              href={`/posts/${id}`}
              scroll
            >
              {title}
            </Link>
            <br />
            <p className="text-sm mt-1 text-gray-500">
              Date posted: <em>{formattedDate}</em>
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag, index) => 
              <Link  
                key={index}
                href={`/tags/${tag}`} 
                className="no-underline text-xs px-2 py-1 bg-gray-200 rounded-full hover:underline dark:bg-gray-600 dark:text-white"
              >
                {tag}
              </Link>
            )}
          </div>
        </div>
      </div>
    </li>
  )
}
