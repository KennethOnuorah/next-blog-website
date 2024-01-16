import Image from "next/image"

export default function ProfilePicture() {
  return (
    <section className=" w-full mx-auto">
      <Image
        className=" border-4 border-white drop-shadow-2xl shadow-black rounded-full mx-auto mt-8"
        src={'/images/ken.png'} 
        width={200} 
        height={200} 
        alt="Kenneth Onuorah" 
        priority
      />
    </section>
  )
}
