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

type SortingMethod = 'recent' | 'oldest' | 'a_z' | 'z_a'