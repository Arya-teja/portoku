import { motion } from "framer-motion";
import Css from "../assets/CSS.png";
import Html from "../assets/HTML.png";
import Js from "../assets/JS.png";
import React from "../assets/React.jpg";
import Next from "../assets/Next.jpg";
import Git from "../assets/git.png";
import Tailwind from "../assets/Tailwind.png";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      icon: Html,
      color: "from-orange-500 to-red-500",
      description: "Semantic markup & accessibility",
      level: 100,
    },
    {
      name: "CSS",
      icon: Css,
      color: "from-blue-500 to-cyan-500",
      description: "Modern styling & animations",
      level: 100,
    },
    {
      name: "JavaScript",
      icon: Js,
      color: "from-yellow-500 to-amber-500",
      description: "ES6+ & async programming",
      level: 88,
    },
    {
      name: "React JS",
      icon: React,
      color: "from-cyan-500 to-blue-500",
      description: "Component-based architecture",
      level: 85,
    },
    {
      name: "Next JS",
      icon: Next,
      color: "from-slate-500 to-gray-700",
      description: "SSR & static site generation",
      level: 85,
    },
    {
      name: "Tailwind",
      icon: Tailwind,
      color: "from-teal-500 to-cyan-500",
      description: "Utility-first CSS framework",
      level: 95,
    },
    {
      name: "Git & GitHub",
      icon: Git,
      color: "from-teal-500 to-cyan-500",
      description: "Version control & collaboration",
      level: 95,
    },
    {
      name: "Nest.JS",
      icon: Git,
      color: "from-teal-500 to-cyan-500",
      description: "Backend development framework",
      level: 80,
    },
    {
      name: "PostgreSQL",
      icon: Git,
      color: "from-teal-500 to-cyan-500",
      description: "Relational database management",
      level: 80,
    },
    {
      name: "Prisma",
      icon: Git,
      color: "from-teal-500 to-cyan-500",
      description: "ORM for database access",
      level: 95,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
    >
      {/* Animated background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
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
            Skills & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-xl max-w-2xl mx-auto"
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/30 perspective-1000"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Animated gradient overlay */}
              <motion.div
                className={`absolute inset-0 bg-linear-to-br ${skill.color} opacity-0 rounded-2xl`}
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`text-5xl w-20 h-20 flex items-center justify-center rounded-xl bg-linear-to-br ${skill.color} bg-opacity-10 shadow-lg`}
                  >
                    <img
                      src={skill.icon}
                      alt=""
                      className="h-full object-cover"
                    />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {skill.level}% Proficiency
                    </p>
                  </div>
                </div>

                <p className="text-slate-400 mb-4">{skill.description}</p>

                {/* Progress Bar */}
                <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  />
                </div>
              </div>

              {/* Animated corner decoration */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-indigo-500/10 to-purple-500/10 rounded-bl-full"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 100, scale: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Glow effect */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 blur-xl`}
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats with Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            {
              value: "1",
              label: "Years Experience",
              color: "indigo",
              delay: 0,
            },
            {
              value: "3",
              label: "Projects Completed",
              color: "purple",
              delay: 0.1,
            },
            { value: "1", label: "Happy Clients", color: "pink", delay: 0.2 },
            { value: "5+", label: "Certificates", color: "cyan", delay: 0.3 },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={statVariants}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="relative text-center p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-indigo-500 transition-all duration-300 overflow-hidden group"
            >
              <motion.div
                className={`absolute inset-0 bg-${stat.color}-500/5`}
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              />
              <motion.p
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: stat.delay,
                  type: "spring",
                }}
                className={`text-4xl font-bold text-${stat.color}-400 mb-2 relative z-10`}
              >
                {stat.value}
              </motion.p>
              <p className="text-slate-400 relative z-10">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
