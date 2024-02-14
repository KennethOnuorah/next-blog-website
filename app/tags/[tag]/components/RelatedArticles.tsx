import ListItem from "@/app/components/ListItem"

type Props = {
  posts: PostMetadata[]
}

export default function RelatedArticles({ posts }: Props) {  
  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <hr className="mt-4 dark:border-gray-500"/>
      {posts.length > 0 ? 
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
