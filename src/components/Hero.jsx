import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-purple-600 dark:text-purple-400">Hello, I'm</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Manoj Reddy
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
              Fullstack Developer
            </h2>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-lg">
              I build exceptional, accessible full-stack web applications that combine sleek design with robust functionality. Leveraging modern technologies and AI, I create intelligent, user-centric digital experiences that solve real-world problems efficiently and elegantly
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md transition-colors flex items-center gap-2"
              >
                View My Work <FaArrowDown className="animate-bounce" />
              </a>
              <a
                href="/resume.pdf"
                download
                className="bg-transparent border-2 border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-md transition-colors"
              >
                Download CV
              </a>
            </div>
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/Manojreddykamasani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 text-2xl transition-colors"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/manoj-reddy-50b70133a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 text-2xl transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-full border-4 border-purple-600 dark:border-purple-400 shadow-xl">
                <img src="/dp.jpg" alt="Your Name" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
