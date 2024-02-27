export default function getPaginatedPosts(list: PostMetadata[], pageSize: number): PostMetadata[][] {
  let paginatedPostList: PostMetadata[][] = []
  const pageCount = list.length / pageSize
  
  for(let i = 0; i < pageCount; i++) paginatedPostList.push([])
  
  let pageTarget: number = -1
  for (let i = 0; i < list.length; i++) {
    if(i % pageSize === 0) pageTarget += 1
    paginatedPostList[pageTarget].push(list[i])
  }
  
  return paginatedPostList
}