import { motion } from "framer-motion";
import { link } from "framer-motion/client";
import Revou from "../assets/Revou.jpg";
import Dicoding from "../assets/Dicoding.jpg";

const Certificate = () => {
  const certificates = [
    {
      title: "RevoU Fundamental Course Software Engineering",
      issuer: "RevoU",
      date: "2024",
      icon: Revou,
      color: "from-cyan-500 to-blue-500",
      link: "https://certificates.revou.co/muhammad-arya-wiryateja-certificate-completion-damc.pdf",
      credentialId: "UC-XXXXX-XXXXX",
    },
    {
      title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
      issuer: "Dicoding",
      date: "2025",
      icon: Dicoding,
      color: "from-yellow-500 to-amber-500",
      link: "https://www.dicoding.com/certificates/0LZ051D53X65",
      credentialId: "CERT-XXXXX-XXXXX",
    },
    {
      title: "Belajar Dasar Git dengan GitHub",
      issuer: "Dicoding",
      date: "2025",
      icon: Dicoding,
      color: "from-slate-500 to-gray-700",
      link: "https://www.dicoding.com/certificates/MEPJ2EGDWP3V",
      credentialId: "VER-XXXXX-XXXXX",
    },
    {
      title: "Belajar Membuat Front-End Web untuk Pemula",
      issuer: "Dicoding",
      date: "2025",
      icon: Dicoding,
      color: "from-teal-500 to-cyan-500",
      link: "https://www.dicoding.com/certificates/4EXG3NW4DZRL",
      credentialId: "TW-XXXXX-XXXXX",
    },
    {
      title: "Belajar Fundamental Front-End Web Development",
      issuer: "Dicoding",
      date: "2025",
      icon: Dicoding,
      color: "from-indigo-500 to-purple-500",
      link: "https://www.dicoding.com/certificates/1RXYQ27MKZVM",
      credentialId: "TOP-XXXXX-XXXXX",
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding",
      date: "2025",
      icon: Dicoding,
      color: "from-green-500 to-emerald-500",
      link: "https://www.dicoding.com/certificates/EYX4K9425PDL",
      credentialId: "FCC-XXXXX-XXXXX",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -20 },
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
      id="certificate"
      className="relative min-h-screen px-4 py-20 overflow-hidden"
    >
      {/* Background Effects */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-10 right-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          rotate: -360,
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
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
            Certificates & Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-xl max-w-2xl mx-auto"
          >
            Professional certifications and courses I've completed
          </motion.p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -8,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/30"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Animated Background decoration */}
              <motion.div
                className={`absolute inset-0 bg-linear-to-br ${cert.color} rounded-2xl`}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.08 }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <div className="relative space-y-4 z-10">
                {/* Icon and Date */}
                <div className="flex items-start justify-between">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`text-5xl w-20 h-20 flex items-center justify-center rounded-xl bg-linear-to-br ${cert.color} bg-opacity-10 shadow-lg`}
                  >
                    <img
                      src={cert.icon}
                      alt=""
                      className="h-full object-cover"
                    />
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-sm text-slate-500 font-medium bg-slate-700/50 px-3 py-1 rounded-full"
                  >
                    {cert.date}
                  </motion.span>
                </div>

                {/* Certificate Info */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-indigo-400 font-medium mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-slate-500 font-mono bg-slate-900/50 px-2 py-1 rounded inline-block">
                    ID: {cert.credentialId}
                  </p>
                </motion.div>

                {/* Verify Button */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 px-4 py-3 bg-slate-700/50 hover:bg-indigo-500/20 text-slate-300 hover:text-indigo-300 rounded-xl text-sm font-medium transition-all duration-200 border border-slate-600 hover:border-indigo-500 relative overflow-hidden group/btn"
                >
                  <a href={cert.link} className="relative z-10">
                    View Certificate
                  </a>
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${cert.color}`}
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ opacity: 0.1 }}
                  />
                </motion.button>
              </div>

              {/* Animated corner decoration */}
              <motion.div
                className="absolute bottom-0 right-0 w-24 h-24 bg-linear-to-tl from-indigo-500/10 to-purple-500/10 rounded-tl-full"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 100, scale: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Glow effect */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-br ${cert.color} rounded-2xl blur-xl -z-10`}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block p-10 bg-linear-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl border border-indigo-500/20 relative overflow-hidden"
          >
            {/* Animated background particles */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 opacity-20"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-40 h-40 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl"
                  style={{
                    top: `${i * 30}%`,
                    left: `${i * 30}%`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </motion.div>

            <div className="relative z-10">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white mb-3"
              >
                Always Learning 🚀
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-400 mb-6 max-w-md mx-auto text-lg"
              >
                Continuously expanding my skills and staying up-to-date with the
                latest technologies
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex gap-4 justify-center flex-wrap"
              >
                <motion.span
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-6 py-3 bg-indigo-500/10 text-indigo-300 rounded-full text-sm font-medium border border-indigo-500/20 hover:bg-indigo-500/20 transition-all cursor-default"
                >
                  📚 Currently Project: Next JS
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-6 py-3 bg-purple-500/10 text-purple-300 rounded-full text-sm font-medium border border-purple-500/20 hover:bg-purple-500/20 transition-all cursor-default"
                >
                  🎯 Next Goal: Integrating Next.js with Node.js API and MongoDB
                </motion.span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificate;
