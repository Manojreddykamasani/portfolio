const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-4"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg blur-xl opacity-20"></div>
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img src="/dp.jpg" alt="Your Name" className="w-full h-auto" />
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
              Full-Stack Developer & AI Enthusiast
            </h3>
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
              
Hello! I'm Manoj, a full-stack developer passionate about building intelligent and impactful web experiences.
 I love crafting everything from responsive frontends to powerful backend systems. Whether it’s a sleek UI or integrating AI to solve real-world problems, my goal is to create clean, scalable, and high-performing digital solutions
            </p>
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
              I'm currently pursuing BTeach in Keshav Memorial Institute of Technology in Hyderabad, India. I have a strong foundation in web development technologies such as React, Node.js, and Express.js. I also have experience with databases like MongoDB and MySQL.
            </p>
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
             I'm always interested
              in new technologies and continuously improving my skills.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">Education</h4>
                <ul className="space-y-4">
                  <li>
                    <p className="font-medium">Bachelor of Technology In Cse(AIML)</p>
                    <p className="text-gray-600 dark:text-gray-400">Keshav Memorial Institute of Technology, 2023-present</p>
                  </li>
                  <li>
                    <p className="font-medium">Intermediate</p>
                    <p className="text-gray-600 dark:text-gray-400">Sri Chaitanya, 2021-23</p>
                  </li>
                </ul>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
