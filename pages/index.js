import Heading from '../components/Head'
import Sidebar from '../components/Sidebar'
import MobileMenu from '../components/MobileMenu'
import AllPosts from '../components/AllPosts'

export default function Home() {
  return (
    <>
      <Heading />
      <div className="relative min-h-screen md:flex bg-dracula-light dark:bg-nosferatu">
        <MobileMenu />
        <Sidebar />
        <div className="flex-1 p-1">
          <AllPosts />
        </div>
      </div>
    </>
  )
}
