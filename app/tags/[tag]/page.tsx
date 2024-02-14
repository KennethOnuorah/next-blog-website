import { Metadata } from "next";
import RelatedArticles from "./components/RelatedArticles";
import { getAllPosts } from "@/lib/posts";

type Props = {
  params : {
    tag: string
  }
}

export function generateMetadata({params: { tag }}: Props): Metadata {
  return {
    title: `Tag: "${tag.replace("%20", ' ')}"`,
    description: `Page for selected tag: "${tag.replace("%20", ' ')}"`
  }
}

export default async function TagPage({params: { tag }}: Props) {
  const res = await getAllPosts()
  const posts = res?.filter(post => post.tags.includes(tag.replace('%20', ' ')))!

  return (
    <main className="px-6 mx-auto max-w-2xl">
      <h1 className="text-3xl mt-8 mb-0 font-bold text-center dark:text-white">
        {posts.length > 0 ? `Related articles with tag: "${tag.replace("%20", ' ')}"` : 'This tag does not exist'}
      </h1>
      <RelatedArticles posts={posts}/>
    </main>
  )
}