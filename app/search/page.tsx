import { Metadata } from "next"
import { notFound } from "next/navigation"

import { getSortedPostsData } from "@/lib/posts"

import SearchResults from "./components/SearchResults"

export function generateMetadata({ searchParams } : { searchParams: { q: string} }): Metadata {
  const { q } = searchParams

  if(!q){
    return {
      title: "Results not found"
    }
  }
  return {
    title: `Search: "${q}"`,
    description: `List of blog posts containing "${q}"`
  }
}

export default function SearchPage({ searchParams } : { searchParams: { q: string} }) {
  const { q } = searchParams
  const searchResultPosts = getSortedPostsData().filter(post => post.title.includes(q))

  if(!q) notFound()

  return (
    <main className="px-6 mx-auto">
      <h1 className="text-3xl mt-8 mb-0 font-bold text-center">
        {searchResultPosts.length} result{searchResultPosts.length !== 1 && 's'} found
      </h1>
      <SearchResults query={q}/>
    </main>
  )
}
