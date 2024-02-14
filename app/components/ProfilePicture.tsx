import Image from "next/image"

export default function ProfilePicture() {
  return (
    <figure className="w-full mx-auto">
      <Image
        className="border-4 border-white shadow-lg shadow-black/30 rounded-full mx-auto mt-8 dark:shadow-white/20"
        src={'/images/ken.png'} 
        width={200} 
        height={200} 
        alt="Kenneth Onuorah" 
        priority
      />
    </figure>
  )
}
