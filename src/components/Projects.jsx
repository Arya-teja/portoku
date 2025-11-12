import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured online shopping platform with cart, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      image: "🛒",
      gradient: "from-blue-500 to-cyan-500",
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task manager with real-time updates, team features, and productivity analytics.",
      tech: ["Next.js", "Firebase", "Tailwind"],
      image: "✅",
      gradient: "from-purple-500 to-pink-500",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern and responsive portfolio website showcasing projects and skills with smooth animations.",
      tech: ["React", "Tailwind", "Vite"],
      image: "💼",
      gradient: "from-indigo-500 to-purple-500",
      link: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather application with forecasts, interactive maps, and location-based data.",
      tech: ["React", "API", "CSS"],
      image: "🌤️",
      gradient: "from-cyan-500 to-blue-500",
      link: "#",
    },
    {
      title: "Social Media App",
      description:
        "Social networking platform with posts, comments, likes, and real-time chat functionality.",
      tech: ["Next.js", "PostgreSQL", "Tailwind"],
      image: "📱",
      gradient: "from-pink-500 to-rose-500",
      link: "#",
    },
    {
      title: "Blog Platform",
      description:
        "Content management system with markdown support, SEO optimization, and analytics.",
      tech: ["Next.js", "MDX", "Tailwind"],
      image: "📝",
      gradient: "from-amber-500 to-orange-500",
      link: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen px-4 py-20 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent"
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-xl max-w-2xl mx-auto"
          >
            A showcase of my recent work and personal projects
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{
                y: -10,
                rotateY: 5,
                rotateX: 5,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/30"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Project Image/Icon with Parallax */}
              <div className="relative h-56 overflow-hidden">
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                >
                  <motion.div
                    animate={{
                      rotate: hoveredIndex === index ? 360 : 0,
                      scale: hoveredIndex === index ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                    className="text-7xl"
                  >
                    {project.image}
                  </motion.div>
                </motion.div>

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-slate-900/20"
                  animate={{
                    backgroundColor:
                      hoveredIndex === index
                        ? "rgba(15, 23, 42, 0.5)"
                        : "rgba(15, 23, 42, 0.2)",
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Animated particles */}
                {hoveredIndex === index && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          x: Math.random() * 200 - 100,
                          y: Math.random() * 200 - 100,
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                        className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full"
                      />
                    ))}
                  </>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4 relative">
                <motion.h3
                  className="text-2xl font-bold text-white"
                  animate={{
                    color:
                      hoveredIndex === index
                        ? "rgb(129, 140, 248)"
                        : "rgb(255, 255, 255)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: techIndex * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1 text-xs font-medium bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20 hover:bg-indigo-500/20 transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Button */}
                <motion.a
                  href={project.link}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-200 mt-4 group/link"
                >
                  <span>View Project</span>
                  <motion.svg
                    animate={{
                      x: hoveredIndex === index ? 5 : 0,
                    }}
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </motion.svg>
                </motion.a>

                {/* Glow Effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-br ${project.gradient} rounded-2xl blur-xl -z-10`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 0.2 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300"
          >
            View All Projects
            <motion.svg
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
