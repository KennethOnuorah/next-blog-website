const AVERAGE_WPM = 238

export default function getApproximateReadTime(content: string): string {
  const wordLength = content.split(' ').length
  const periodPauseTime = content.match(/\. /g || [])?.length! * 0.0083
  const commaPauseTime = content.match(/\, /g || [])?.length! * 0.006
  
  const totalReadTime = (wordLength / AVERAGE_WPM) + periodPauseTime + commaPauseTime

  if(totalReadTime >= 1){
    return `${Math.round(totalReadTime)} min read`
  }else{
    const seconds = parseFloat(totalReadTime.toFixed(1)) * 60
    return `${(seconds)} sec read`
  }
}