import Posts from "./components/Posts"
import ProfilePicture from './components/ProfilePicture'

export const revalidate = 2400

export default function Home({ searchParams } : { searchParams : { page: string, sortBy: string } }) {
  const { page, sortBy } = searchParams

  return (
    <main className="px-6 mx-auto">
      <ProfilePicture/>
      <p className="mt-12 text-3xl text-center text-black dark:text-white">
        Welcome to Kenneth&apos;s Blog
      </p>
      <Posts currentPage={page ? page : "1"} sortBy={sortBy ? sortBy as SortingMethod : 'recent'}/>
    </main>
  )
}
