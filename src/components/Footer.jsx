import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-purple-400">Manoj Reddy</h2>
            <p className="text-gray-400 mt-2">Full Stack Developer</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/Manojreddykamasani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/manoj-reddy-50b70133a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:manojreddykamasani@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {currentYear} Manoj Reddy. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">Designed and built with ❤️</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
