import { useState } from "react";

export default function Sidebar(){

const [sidebarVisible, setSidebarVisible] = useState(false);

  // const btn = document.querySelector('.mobile-menu-button');
  // const sidebar = document.querySelector('.sidebar');

  // btn.addEventListener('click', () => {
  //   sidebar.classList.toggle('-translate-x-full');
  // });

  return(
    <div className="relative min-h-screen md:flex">
      {/* mobile menu bar */}
      <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
        <a href="" className="block p-4 text-white font-bold font-gruppo">mzsantoz</a>
        <button  onClick={() => setSidebarVisible(sidebarVisible => true)} className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        </button>
      </div>

      {/* sidebar */}
      <div className={`bg-gray-200 text-black-100 w-64 space-y-6 py-7 px-2 shadow-md absolute md:relative md:translate-x-0 inset-y-0 left-0 transform ${sidebarVisible ? "-translate-x-full" : ""} -translate-x-full transition duration-200 ease-in-out`}>
        {/* logo */}
        <a href="#" className="flex items-center space-x-2 px-4">
          <img src="/images/logo.png" alt="" className="w-12 h-12"/>
          <span className="text-3xl font-extrabold font-gruppo">mzsantoz</span>
        </a>
        <span className="text-xs px-5 font-montserrat">With a slice of technology</span>
        {/* nav */}
        <nav>
          <a href="" className="block py-2 5 px-4 transition duration-200 hover:font-semibold hover:bg-gray-300 rounded">Home</a>
          <a href="/about" className="block py-2 5 px-4 transition duration-200 hover:font-semibold hover:bg-gray-300 rounded">About me</a>
          <a href="" className="block py-2 5 px-4 transition duration-200 hover:font-semibold hover:bg-gray-300 rounded">Articles</a>
          <a href="" className="block py-2 5 px-4 transition duration-200 hover:font-semibold hover:bg-gray-300 rounded">Contact</a>
        </nav>

        {/* social */}
        <ul className="flex items-center px-4 space-x-2 justify-around">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>

      </div>
      {/* content */}
      <div className="flex-1 p-10 text-2xl font-bold">
          content goes here
      </div>
    </div>
  )
}