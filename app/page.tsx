import Posts from "./components/Posts"
import ProfilePicture from './components/ProfilePicture'

export const revalidate = 10

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <ProfilePicture/>
      <p className="mt-12 text-3xl text-center text-black dark:text-white">
        Welcome to Kenneth&apos;s Blog
      </p>
      <Posts/>
    </main>
  )
}
