import Link from "next/link"
import { notFound } from "next/navigation"
import ThemedMarkdown from "./components/ThemedMarkdown"

import getFormattedDate from "@/lib/getFormattedDate"
import getApproximateReadTime from "@/lib/getApproximateReadTime"
import { getPostByName, getAllPosts } from "@/lib/posts"

import { FaHome as Home } from "react-icons/fa"
import { FaRegClock as Time } from 'react-icons/fa6'

export const revalidate = 0

type Props = {
  params: {
    postId: string
  }
}

export async function generateStaticParams() {
  const res = await getAllPosts()
  const posts = res!

  return posts.map((post) => ({
    postId: post.id
  }))
}

export async function generateMetadata({params: {postId}}: Props) {
  const post = await getPostByName(`${postId}.md`)

  if (!post) {
    return {
      title: "Post not found",
    }
  }
  return {
    title: post.meta.title,
  }
}

export default async function PostPage({params: {postId}}: Props) {
  const post = await getPostByName(`${postId}.md`)

  if (!post) notFound

  const {meta, content} = post!
  const publishedDate = getFormattedDate(meta.date)

  return (
    <main className="px-6 prose prose-xl mx-auto dark:prose-invert">
      <h2 className="text-4xl text-center mt-12 mb-4 font-bold sm:text-left">{meta.title}</h2>
      <p className="text-2xl text-center italic text-gray-500 sm:text-left">{publishedDate}</p>
      <div className="flex justify-center flex-col items-center gap-4 sm:justify-start sm:flex-row">
        <div className="flex gap-2 flex-wrap justify-center">
          {meta.tags.map((tag, index) => 
            <Link  
              key={index}
              href={`/tags/${tag}`} 
              className="no-underline text-xs px-2 py-1 bg-gray-200 rounded-full hover:underline dark:bg-gray-600 dark:text-white"
            >
              {tag}
            </Link>
          )}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Time/> {getApproximateReadTime(content)}
        </div>
      </div>
      <ThemedMarkdown>{content}</ThemedMarkdown>
      <p className="mb-10">
        <Link className="flex gap-2 items-center" href="/">
          <Home />
          Back to Home
        </Link>
      </p>
    </main>
  )
}
