type PostMetadata = {
  id: string
  title: string
  date: string
  tags: string[]
  thumbnailSource: string
}

type BlogPost = {
  meta: PostMetadata
  content: string
}

type Dimension = {
  width: number
  height: number
}

type Filter = 'recent' | 'oldest' | 'a_z' | 'z_a'