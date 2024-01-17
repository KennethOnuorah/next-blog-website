import { getSortedPostsData } from "@/lib/posts"
import ListItem from "./ListItem"

export default function Posts() {
  const posts = getSortedPostsData()

  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <h2 className="text-4xl text-center font-bold text-black/90">
        Recent Posts
      </h2>
      <hr className="mt-6 mb-6"/>
      <ul className="w-full mb-4">
        {posts.map(post => <ListItem key={post.id} post={post}/>)}
      </ul>
    </section>
  )
}
