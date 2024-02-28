import { Metadata } from "next"
import { notFound } from "next/navigation"

import { getAllPosts } from "@/lib/posts"

import RelatedResults from "../components/RelatedResults"

export function generateMetadata({ searchParams } : { searchParams: { q: string} }): Metadata {
  const { q } = searchParams

  if(!q){
    return {
      title: "Results not found"
    }
  }
  return {
    title: `Search: "${q}"`,
    description: `List of blog posts containing search term: "${q}"`
  }
}

export default async function SearchPage({ searchParams } : { searchParams: { q: string, page: string } }) {
  const { q, page } = searchParams
  const res = await getAllPosts('recent')
  const searchResultPosts = res?.filter(post => post.title.toLowerCase().includes(q.toLowerCase()))

  if(!q) notFound()

  return (
    <main className="px-6 mx-auto">
      <h1 className="text-3xl mt-8 mb-0 font-bold text-center dark:text-white">
        {searchResultPosts?.length} result{searchResultPosts?.length !== 1 && 's'} found
      </h1>
      <RelatedResults currentPage={page ? page : "1"} posts={searchResultPosts!} query={searchResultPosts!.length >= 1}/>
    </main>
  )
}
