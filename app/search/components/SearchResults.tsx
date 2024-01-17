import { getFilteredSortedPostsData } from "@/lib/posts"
import ListItem from "@/app/components/ListItem"

type Props = {
  query: string
}

export default function SearchResults({ query }: Props) {
  const posts = getFilteredSortedPostsData(query)
  
  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <hr className="mt-4"/>
      {posts.length >= 1 ? 
        <ul className="w-full mb-4">
          {posts.map(post => <ListItem key={post.id} post={post}/>)}
        </ul> :
        <h1 className="mt-12 text-center text-4xl text-gray-500">
          ¯\_(ツ)_/¯
        </h1>
      }
    </section>
  )
}
