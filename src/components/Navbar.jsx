"use client"

import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-purple-600">
              Portfolio
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-purple-600 transition-colors">
              Home
            </a>
            <a href="#projects" className="hover:text-purple-600 transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-purple-600 transition-colors">
              Skills
            </a>
            <a href="#about" className="hover:text-purple-600 transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-purple-600 transition-colors">
              Contact
            </a>
            <a
              href="/resume.pdf"
              download
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Resume
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <a
            href="#home"
            className="block px-3 py-2 rounded-md hover:bg-gray-200 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#projects"
            className="block px-3 py-2 rounded-md hover:bg-gray-200 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="block px-3 py-2 rounded-md hover:bg-gray-200 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a
            href="#about"
            className="block px-3 py-2 rounded-md hover:bg-gray-200 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md hover:bg-gray-200 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <a
            href="/assets/resume.pdf"
            download
            className="block px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
