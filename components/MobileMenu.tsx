import Image from 'next/image'

export default function MobileMenu() {
  return (
    <div className="bg-gray-50 dark:bg-nosferatu text-aro dark:text-gray-300 flex justify-between items-center md:hidden shadow-md">
      <a href="" className="block p-4 text-aro font-bold font-gruppo text-lg">
        <Image
          className="rounded-full"
          src="/images/logo.png"
          width="32px"
          height="32px"
        />
      </a>
      <button className="p-4 focus:outline-none focus:bg-aro">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  )
}
