import ListItem from "@/app/components/ListItem"
import PostsPagination from "./PostsPagination"

import getPaginatedPosts from "@/lib/getPaginatedPosts"

type Props = {
  posts: PostMetadata[]
  query: boolean
  currentPage: string
}

export default function RelatedResults({ posts, query, currentPage }: Props) { 
  const postsPerPage = 4
  const pageCount = Math.ceil(posts.length / postsPerPage)
  const paginatedPosts = getPaginatedPosts(posts, postsPerPage)

  return (
    <>
      <section className="mt-6 mx-auto max-w-2xl">
        <hr className="mt-4 dark:border-gray-500"/>
        {query ? 
          <ul className="w-full mb-4">
            {paginatedPosts[JSON.parse(currentPage) - 1].map(post => <ListItem key={post.id} post={post}/>)}
          </ul> :
          <h1 className="mt-12 text-center text-4xl text-gray-500">
            ¯\_(ツ)_/¯
          </h1>
        }
      </section>
      {pageCount > 1 && <PostsPagination pageCount={pageCount} defaultPage={currentPage}/>}
    </>
  )
}
