import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaPython, FaGithub } from "react-icons/fa"
import { SiExpress, SiMysql, SiMongodb, SiPostgresql, SiCplusplus, SiTensorflow } from "react-icons/si"

const SkillCard = ({ icon, name, category }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105">
      <div className="flex flex-col items-center">
        <div className="text-4xl text-purple-600 dark:text-purple-400 mb-4">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <span className="text-sm text-gray-500 dark:text-gray-400">{category}</span>
      </div>
    </div>
  )
}

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, category: "Frontend" },
    { name: "CSS3", icon: <FaCss3Alt />, category: "Frontend" },
    { name: "JavaScript", icon: <FaJs />, category: "Frontend" },
    { name: "React", icon: <FaReact />, category: "Frontend" },
    { name: "Node.js", icon: <FaNodeJs />, category: "Backend" },
    { name: "Express", icon: <SiExpress />, category: "Backend" },
    { name: "Python", icon: <FaPython />, category: "Programming" },
    { name: "C++", icon: <SiCplusplus />, category: "Programming" },
    { name: "Java", icon: <FaJava />, category: "Programming" },
    { name: "MySQL", icon: <SiMysql />, category: "Database" },
    { name: "MongoDB", icon: <SiMongodb />, category: "Database" },
    { name: "PostgreSQL", icon: <SiPostgresql />, category: "Database" },
    { name: "GitHub", icon: <FaGithub />, category: "Tools" },
    { name: "Machine Learning", icon: <FaPython />, category: "AI" },
    { name: "Deep Learning", icon: <SiTensorflow />, category: "AI" },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world. Here are my main areas of
            expertise:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
