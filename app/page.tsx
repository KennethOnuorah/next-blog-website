import Posts from "./components/Posts"
import ProfilePicture from './components/ProfilePicture'

export default function Home() {
  return (
    <main className=" px-6 mx-auto">
      <ProfilePicture/>
      <p className=" mt-12 text-3xl text-center text-black">
        Welcome to Kenneth's Blog
      </p>
      <Posts/>
    </main>
  )
}
