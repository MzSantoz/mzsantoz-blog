import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="overflow-y-auto items-center px-4 pb-4">
      <Link href="/">
        <a className="block py-2.5 px-4 transition duration-200 hover:font-semibold hover:bg-gray-300 rounded dark:hover:bg-dracula-cyan dark:hover:text-dracula border-b-2 dark:border-dracula-cyan">
          Home
        </a>
      </Link>
      <Link href="/about">
        <a className="block py-2.5 px-4 transition duration-200 hover:font-semibold hover:bg-gray-300 rounded dark:hover:bg-dracula-cyan dark:hover:text-dracula border-b-2 dark:border-dracula-cyan">
          About
        </a>
      </Link>
      <Link href="/">
        <a className="block py-2.5 px-4 transition duration-200 hover:font-semibold hover:bg-gray-300 rounded dark:hover:bg-dracula-cyan dark:hover:text-dracula border-b-2 dark:border-dracula-cyan">
          Posts
        </a>
      </Link>
      <Link href="/">
        <a className="block py-2.5 px-4 transition duration-200 hover:font-semibold hover:bg-gray-300 rounded dark:hover:bg-dracula-cyan dark:hover:text-dracula border-b-2 dark:border-dracula-cyan">
          Contact
        </a>
      </Link>
    </nav>
  )
}
