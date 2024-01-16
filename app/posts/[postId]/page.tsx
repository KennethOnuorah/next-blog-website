import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import getFormattedDate from "@/lib/getFormattedDate"
import { getPostData, getSortedPostsData } from "@/lib/posts"

import { FaHome as Home } from "react-icons/fa";

//Next goal: Add a search bar and some new articles

export function generateStaticParams(){
  const posts = getSortedPostsData()
  return posts.map(post => ({
    postId: post.id
  }))
}

export function generateMetadata({ params } : { params: { postId: string} }): Metadata {
  const posts = getSortedPostsData()
  const { postId } = params

  const post = posts.find(post => post.id === postId)

  if(!post) {
    return {
      title: "Post not found"
    }
  }
  return {
    title: post?.title,
  }
}

export default async function PostPage({ params } : { params: { postId: string} }) {
  const posts = getSortedPostsData()
  const { postId } = params

  if(!posts.find(post => post.id === postId)) notFound()

  const {title, date, contentHtml} = await getPostData(postId)
  const publishedDate = getFormattedDate(date)

  return (
    <main className="px-6 prose prose-xl mx-auto">
      <h1 className="text-3xl mt-8 mb-0">{title}</h1>
      <p className="mt-0 italic">
        {publishedDate}
      </p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href="/">
            <div className=" flex items-center gap-1">
              <Home size={20}/>
              Back to Home
            </div>
          </Link>
        </p>
      </article>
    </main>
  )
}
