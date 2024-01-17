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
      <ul className="w-full mb-4">
        {posts.map(post => <ListItem key={post.id} post={post}/>)}
      </ul>
    </section>
  )
}
