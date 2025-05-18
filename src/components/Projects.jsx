import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const ProjectCard = ({ title, description, image, technologies, githubLink, liveLink }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
      <div className="h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 flex items-center gap-1 transition-colors"
            aria-label={`GitHub repository for ${title}`}
          >
            <FaGithub /> Code
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 flex items-center gap-1 transition-colors"
            aria-label={`Live demo for ${title}`}
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  const projects = [
    {
      title: "CodeForge",
      description: "An interactive coding platform designed to help users master data structures and algorithms through curated challenges, real-time feedback, and progress tracking. Built with a modern tech stack to deliver a seamless and responsive learning experience",
      image: "/codeforge.png",
      technologies:  ["React.js","Tailwind CSS","Supabase","PostgreSQL","Node.js","Express.js"],
      githubLink: "https://github.com/Manojreddykamasani/CodeForge",
      liveLink:"https://codeforge-012.netlify.app/",
    },
    {
      title: "PrediX",
      description: "Developed a machine learning-based web application that predicts the outcome of IPL cricket matches. Leveraged historical match data and key player statistics to train predictive models. The project features an interactive UI to input match conditions and display predicted results. Built with a full-stack approach using React for frontend and Flask/Node.js for backend APIs",
      image: "/predix.png",
      technologies: ["React", "Node.js", "MongoDB", "Express","Flask","Machine Learning","Deep Learning"],
      githubLink: "https://github.com/Manojreddykamasani/ipl-prediction-with-login-system",
    },
    {
      title: "Ajaika",
      description: "A responsive frontend eCommerce website using a dummy API to display products and simulate cart functionality. Built to demonstrate modern UI design, routing, and state management — without login or payment features",
      image: "/ajaika.png",
      technologies: ["React", "Tailwind CSS","Dummy api"],
      githubLink: "https://github.com/Manojreddykamasani/ajaika",
      liveLink: "https://ajaika.vercel.app/",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one is crafted with attention to detail and a focus on user
            experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Manojreddykamasani"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md transition-colors"
          >
            See More Projects <FaGithub />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
