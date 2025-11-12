import { motion } from "framer-motion";
import { link } from "framer-motion/client";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative bg-slate-900 border-t border-slate-800 py-16 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-4"
            >
              Portoku
            </motion.h3>
            <p className="text-slate-400 text-lg">
              Building modern web experiences with passion and creativity.
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
            />
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-6 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["About Me", "Skills", "Projects", "Certificates"].map(
                (item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.a
                      href={`#${item.toLowerCase().replace(" ", "")}`}
                      whileHover={{ x: 5, color: "#818cf8" }}
                      className="text-slate-400 hover:text-indigo-400 transition-all duration-200 flex items-center gap-2"
                    >
                      <motion.span
                        whileHover={{ scale: 1.2 }}
                        className="text-indigo-500"
                      >
                        →
                      </motion.span>
                      {item}
                    </motion.a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-6 text-lg">
              Connect With Me
            </h4>
            <div className="flex gap-4">
              {[
                {
                  name: "GitHub",
                  icon: (
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  ),
                },
                {
                  name: "LinkedIn",
                  icon: (
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  ),
                },
                {
                  name: "Email",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  ),
                  stroke: true,
                },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href="#"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.15, rotate: 5, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-slate-800 hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50 group"
                  aria-label={social.name}
                >
                  <svg
                    className="w-6 h-6 group-hover:scale-110 transition-transform"
                    fill={social.stroke ? "none" : "currentColor"}
                    stroke={social.stroke ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                  >
                    {social.icon}
                  </svg>
                </motion.a>
              ))}
            </div>

            {/* Newsletter / CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <p className="text-slate-400 text-sm mb-3">
                Stay updated with my latest projects
              </p>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 text-sm"
              >
                Subscribe
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-8 border-t border-slate-800 text-center"
        >
          <motion.p
            className="text-slate-400 text-sm"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            &copy; {currentYear} Portoku. Built with React & Tailwind CSS.
          </motion.p>
          
          
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
