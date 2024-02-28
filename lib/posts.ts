import fm from 'front-matter'

type FileTree = {
  "tree": [
    {
      "path": string 
    }
  ]
}

const sortingMethods: {[key: string]: (a: PostMetadata, b: PostMetadata) => number} = {
  'recent': (a: PostMetadata, b: PostMetadata) => a.date < b.date ? 1 : -1,
  'oldest': (a: PostMetadata, b: PostMetadata) => a.date > b.date ? 1 : -1,
  'a_z': (a: PostMetadata, b: PostMetadata) => a.title.localeCompare(b.title),
  'z_a': (a: PostMetadata, b: PostMetadata) => b.title.localeCompare(a.title),
}

export async function getPostByName(fileName: string): Promise<BlogPost | undefined> {
  const res = await fetch(`https://raw.githubusercontent.com/KennethOnuorah/mdx-blogposts/main/posts/${fileName}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  if(!res.ok) return undefined

  const rawMarkdown = await res.text()
  const metadata = fm<{ title: string, date: string, tags: string[], thumbnailSource: string}>(rawMarkdown)
  const content = rawMarkdown.replace(`---\n${metadata.frontmatter!}\n---`, '')
  const id = fileName.replace('.md', '')

  return {
    meta: {
      id,
      title: metadata.attributes.title,
      date: metadata.attributes.date,
      tags: metadata.attributes.tags,
      thumbnailSource: metadata.attributes.thumbnailSource
    },
    content: content
  }
}

export async function getAllPosts(sortingMethod: SortingMethod): Promise<PostMetadata[] | undefined>{
  const res = await fetch('https://api.github.com/repos/KennethOnuorah/mdx-blogposts/git/trees/main?recursive=1', {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  if(!res.ok) return undefined
  const repoFileTree: FileTree = await res.json()
  const files = repoFileTree.tree.map(obj => obj.path).filter(path => path.endsWith('.md') && !path.startsWith("README"))
  const posts: PostMetadata[] = []
  for(const file of files){
    const post = await getPostByName(file.replace('posts/', ''))
    if(post){
      const { meta } = post
      posts.push(meta)
    }
  }
  return posts.sort(sortingMethods[sortingMethod])
}