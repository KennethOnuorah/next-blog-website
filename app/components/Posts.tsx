import { getAllPosts } from "@/lib/posts"
import ListItem from "./ListItem"

export default async function Posts() {
  const posts = await getAllPosts()

  if (!posts) {
    return <p>Sorry, No Blog Posts Yet!</p>
  }

  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <h2 className="text-4xl text-center font-bold text-black/90 dark:text-white">
        Recent Posts
      </h2>
      <hr className="mt-6 mb-6 dark:border-gray-500"/>
      <ul className="w-full mb-4 list-none">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  )
}
