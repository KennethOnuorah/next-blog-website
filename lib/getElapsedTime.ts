export default function getElapsedTime(lastUpdated: number): string {
  const seconds = (new Date().getTime() - lastUpdated) / 1000

  if(seconds >= 0 && seconds < 60) {
    return `Last updated a moment ago`
  }
  else if(seconds >= 60 && seconds < 3600) {
    const min = Math.floor((seconds / 60))
    return `Last updated ${min} minute${min != 1 ? "s" : ""} ago`
  }
  else if(seconds >= 3600 && seconds < 86400) {
    const hour = Math.floor((seconds / 3600))
    return `Last updated ${hour} hour${hour != 1 ? "s" : ""} ago`
  }
  else if(seconds >= 86400 && seconds < 604800) {
    const days = Math.floor((seconds / 86400))
    return `Last updated ${days} day${days != 1 ? "s" : ""} ago`
  }
  else if(seconds >= 604800 && seconds < 2628000) {
    const weeks = Math.floor((seconds / 604800))
    return `Last updated ${weeks} week${weeks != 1 ? "s" : ""} ago`
  }
  else if(seconds >= 2628000 && seconds < 31535965) {
    const months = Math.floor((seconds / 2628000))
    return `Last updated ${months} month${months != 1 ? "s" : ""} ago`
  }
  else if(seconds >= 31535965) {
    const year = Math.floor((seconds / 31535965))
    return `Last updated ${year} year${year != 1 ? "s" : ""} ago`
  }else{
    return "NaN"
  }
}