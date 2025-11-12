import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import profileImage from "../assets/Foto Jas 2.jpg";

// Typing Animation Component
const TypingText = ({ phrases = ["Full Stack Developer"] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 1500);
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, phrases]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
      {phrases[index].substring(0, subIndex)}
      <span className={`${blink ? "opacity-100" : "opacity-0"}`}>|</span>
    </span>
  );
};

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.9, 1],
    [0.8, 1, 1, 0.8]
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden bg-slate-950"
    >
      {/* Animated Geometric Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-purple-500/10 via-pink-500/10 to-indigo-500/10 rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-indigo-400 font-semibold text-lg tracking-wide mb-4">
                👋 Hello, I'm
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                  Arya
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-200 font-medium">
                <TypingText />
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-400 text-lg leading-relaxed max-w-xl"
            >
              I craft modern, scalable web applications with a focus on clean
              code, stunning UI, and exceptional user experiences. Specialized
              in React ecosystem and passionate about bringing ideas to life
              through code.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { label: "Projects", value: "2" },
                { label: "Experience", value: "<1 yrs" },
                { label: "Certificates", value: "5+" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-sm mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://mail.google.com/mail/u/0/?fs=1&to=wiryatejaarya@gmail.com&tf=cm"
                className="px-8 py-4 border-2 border-slate-700 text-slate-300 rounded-2xl font-semibold hover:bg-slate-800 hover:border-indigo-500/50 transition-all duration-300"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Glass Card with Image */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              {/* Glass Card Container */}
              <div className="relative w-80 sm:w-96 h-[480px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-slate-800/40 backdrop-blur-xl border border-slate-700/50 shadow-2xl shadow-indigo-500/10 p-6">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-indigo-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" />

                {/* Profile Image Container */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-6">
                  {/* Rotating Border */}
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1"
                    >
                      <div className="w-full h-full rounded-full bg-slate-900" />
                    </motion.div>

                    {/* Image */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-slate-900 shadow-xl"
                    >
                      <img
                        src={profileImage}
                        alt="Arya - Full Stack Developer"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>

                  {/* Info Section */}
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-bold text-white">Arya</h3>
                    <p className="text-indigo-400 font-medium">
                      Full Stack Developer
                    </p>

                    {/* Social Contact Icons */}
                    <div className="flex justify-center gap-3 pt-4">
                      {[
                        {
                          icon: "linkedin",
                          href: "https://linkedin.com/in/yourusername",
                          label: "LinkedIn",
                        },
                        {
                          icon: "github",
                          href: "https://github.com/yourusername",
                          label: "GitHub",
                        },
                        {
                          icon: "email",
                          href: "https://mail.google.com/mail/u/0/?fs=1&to=wiryatejaarya@gmail.com&tf=cm",
                          label: "Email",
                        },
                        {
                          icon: "phone",
                          href: "https://wa.me/081311849951",
                          label: "Phone",
                        },
                      ].map((contact, i) => (
                        <motion.a
                          key={i}
                          href={contact.href}
                          target={
                            contact.icon !== "email" && contact.icon !== "phone"
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            contact.icon !== "email" && contact.icon !== "phone"
                              ? "noopener noreferrer"
                              : undefined
                          }
                          whileHover={{ scale: 1.2, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="group relative w-12 h-12 rounded-xl bg-slate-800/60 border border-slate-700/50 hover:border-indigo-500/50 hover:bg-indigo-500/10 flex items-center justify-center cursor-pointer transition-all duration-300"
                          title={contact.label}
                        >
                          {contact.icon === "linkedin" && (
                            <svg
                              className="w-6 h-6 text-slate-400 group-hover:text-indigo-400 transition-colors"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          )}
                          {contact.icon === "github" && (
                            <svg
                              className="w-6 h-6 text-slate-400 group-hover:text-indigo-400 transition-colors"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                          {contact.icon === "email" && (
                            <svg
                              className="w-6 h-6 text-slate-400 group-hover:text-indigo-400 transition-colors"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          )}
                          {contact.icon === "phone" && (
                            <svg
                              className="w-6 h-6 text-slate-400 group-hover:text-indigo-400 transition-colors"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
                          )}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-indigo-500/5 rounded-full blur-2xl" />
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl" />
              </div>

              {/* Floating Particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  className="absolute w-2 h-2 bg-indigo-400 rounded-full blur-sm"
                  style={{
                    top: `${20 + i * 30}%`,
                    right: `-${10 + i * 5}px`,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
