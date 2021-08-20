export default function MobileMenu(){
  return(
          <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
          <a href="" className="block p-4 text-white font-bold font-gruppo">mzsantoz</a>
          <button className="p-4 focus:outline-none focus:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          </button>
        </div>
  )
}