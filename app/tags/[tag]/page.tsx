import { Metadata } from "next";
import RelatedResults from "@/app/components/RelatedResults";

import { getAllPosts } from "@/lib/posts";

type Props = {
  params : {
    tag: string
  }
}

export async function generateStaticParams () {
  const posts = await getAllPosts('recent') as PostMetadata[]

  const tagGroups = posts.map(r => r.tags)
  const joinedTags = tagGroups.map(group => group.join(',')).join(',').split(',')
  const uniqueJoinedTags = joinedTags.filter((tag, index, array) => array.indexOf(tag) === index)

  return uniqueJoinedTags.map((tag) => ({
    tag: tag
  }))
}

export function generateMetadata({params: { tag }}: Props): Metadata {
  return {
    title: `Tag: "${tag.replace("%20", ' ')}"`,
    description: `Results for selected tag: "${tag.replace("%20", ' ')}"`
  }
}

export default async function TagPage({ params, searchParams }: { params: { tag: string }, searchParams: { page: string }}) {
  const { tag } = params
  const { page } = searchParams

  const res = await getAllPosts('recent')
  const posts = res?.filter(post => post.tags.includes(tag.replace('%20', ' ')))!

  return (
    <main className="px-6 mx-auto max-w-2xl">
      <h1 className="text-3xl mt-8 mb-0 font-bold text-center dark:text-white">
        {posts.length > 0 ? `Related articles with tag: "${tag.replace("%20", ' ')}"` : 'This tag does not exist'}
      </h1>
      <RelatedResults currentPage={page ? page : "1"} posts={posts} query={posts.length > 0}/>
    </main>
  )
}