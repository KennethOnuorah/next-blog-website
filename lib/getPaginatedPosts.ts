export default function getPaginatedPosts(list: PostMetadata[], pageSize: number): PostMetadata[][] {
  let paginatedPosts: PostMetadata[][] = []
  const pageCount = list.length / pageSize
  
  for(let i = 0; i < pageCount; i++) paginatedPosts.push([])
  
  let targetPage: number = -1
  for (let i = 0; i < list.length; i++) {
    if(i % pageSize === 0) targetPage += 1
    paginatedPosts[targetPage].push(list[i])
  }
  
  return paginatedPosts
}