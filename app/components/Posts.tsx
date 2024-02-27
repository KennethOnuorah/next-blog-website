import ListItem from "./ListItem"
import ToolForm from "./ToolForm"

import { getAllPosts } from "@/lib/posts"
import PostsPagination from "./PostsPagination"

import getPaginatedPosts from "@/lib/getPaginatedPosts"

type Props = {
  currentPage: string
}

export default async function Posts({ currentPage } : Props) {
  const posts = await getAllPosts()
  if (!posts) return <p>Sorry, No Blog Posts Yet!</p>

  const postsPerPage = 4
  const pageCount = Math.ceil(posts.length / postsPerPage)
  const paginatedPosts = getPaginatedPosts(posts, postsPerPage)

  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <h2 className="text-4xl text-center font-bold text-black/90 dark:text-white">
        Posts
      </h2>
      <hr className="mt-6 dark:border-gray-500"/>
      <ToolForm/>
      <hr className="mb-6 dark:border-gray-500"/>
      <ul className="w-full mb-4 list-none">
        {paginatedPosts[JSON.parse(currentPage) - 1].map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
      {pageCount > 1 && <PostsPagination pageCount={pageCount} defaultPage={currentPage}/>}
    </section>
  )
}
