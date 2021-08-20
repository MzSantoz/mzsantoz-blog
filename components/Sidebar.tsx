import { useState } from "react";

export default function Sidebar(){

  return(
    
      <div className={`bg-gray-200 text-black-100 w-64 space-y-6 py-7 px-2 shadow-md absolute md:relative md:translate-x-0 inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out`}>

        <a href="#" className="flex items-center space-x-2 px-4">
          <img src="/images/logo.png" alt="" className="w-12 h-12"/>
          <span className="text-3xl font-extrabold font-gruppo">mzsantoz</span>
        </a>
        <span className="text-xs px-5 font-montserrat">With a slice of technology</span>


        <nav>
          <a href="" className="block py-2 5 px-4 transition duration-200 hover:font-semibold hover:bg-gray-300 rounded">Home</a>
          <a href="/about" className="block py-2 5 px-4 transition duration-200 hover:font-semibold hover:bg-gray-300 rounded">About me</a>
          <a href="" className="block py-2 5 px-4 transition duration-200 hover:font-semibold hover:bg-gray-300 rounded">Articles</a>
          <a href="" className="block py-2 5 px-4 transition duration-200 hover:font-semibold hover:bg-gray-300 rounded">Contact</a>
        </nav>

        <ul className="flex items-center px-4 space-x-2 justify-around">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>

      </div>

  )
}