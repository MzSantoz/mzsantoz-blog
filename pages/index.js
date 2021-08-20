import Heading from '../components/Head'
import Sidebar from '../components/Sidebar'
import MobileMenu from '../components/MobileMenu'
import ContentSection from '../components/ContentSection'

export default function Home() {
  return (
    <>
    <Heading />
    <div className="relative min-h-screen md:flex">
    <MobileMenu />
      <Sidebar />
      <div className="flex-1 p-1 text-2xl">
        <ContentSection />
      </div>
    </div>
    </>
  )
}
