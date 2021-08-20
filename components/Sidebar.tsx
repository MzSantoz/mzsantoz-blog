import Nav from '../components/Nav'
import SocialMedia from './SocialMedia'
import ThemeToggle from './ThemeToggle'

export default function Sidebar() {
  return (
    <div className=" bg-dracula-light text-gray-700 dark:bg-dracula-dark dark:text-gray-200 w-64 border-r-2 rounded-r-2xl dark:border-dracula-cyan space-y-6 py-7 px-2 shadow-lg absolute md:relative md:translate-x-0 inset-y-0 left-0 transform -translate-x-full transition duration-500 ease-in-out">
      <a href="#" className="flex flex-col items-center space-x-2 px-4">
        <span className="text-2xl font-extrabold font-gruppo">
          Moisés Santos
        </span>
        <span className="text-xs px-4 font-montserrat dark:text-dracula-cyan">
          With a slice of technology
        </span>
      </a>

      <Nav />
      <SocialMedia />
      <ThemeToggle />
    </div>
  )
}
