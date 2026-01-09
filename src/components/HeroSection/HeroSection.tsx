"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "../lightswind/button";
import { Download, ArrowRight } from "lucide-react";

/* Animation variant (TypeScript safe) */
const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // easeOut (cubic-bezier)
    },
  },
};

export const HeroSection = () => {
  return (
    <motion.div
      id="hero"
      className="text-foreground bg-transparent flex flex-col md:flex-row items-center max-w-7xl mx-auto w-full"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {/* Left Section */}
      <motion.div className="flex-1 space-y-4 p-6 text-left">
        <motion.h1 className="text-4xl font-bold" variants={fadeUp}>
          Muhamad Rifki Firdaus
          <motion.span
            className="text-sm text-blue-500 font-semibold block"
            variants={fadeUp}
          >
            He / Him
          </motion.span>
        </motion.h1>

        <motion.h2
          className="text-xl text-muted-foreground mt-1"
          variants={fadeUp}
        >
          Aspiring Software Engineer | Front-End Developer
        </motion.h2>

        <motion.p
          className="mt-4 text-xs text-justify text-muted-foreground max-w-xl"
          variants={fadeUp}
        >
          Front-End Developer focused on building intuitive, responsive, and
          user-centered web experiences. Strong interest in UI/UX, modern
          JavaScript, and scalable interface development. Always eager to learn,
          improve, and collaborate on impactful digital projects.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-3 pt-4 w-full sm:w-auto"
        >
          {/* Download CV */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
            <Button
              asChild
              variant="default"
              size="lg"
              className="w-full sm:w-auto"
            >
              <a
                href="/cv/CV-MUHAMAD-RIFKI-FIRDAUS.pdf"
                download
                className="inline-flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
          </motion.div>

          {/* View Projects */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Section (Image) */}
      <motion.div
        className="flex-1 flex justify-center p-6"
        initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{
          delay: 0.6,
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
          <img
            src="/images/rifki-formal.png"
            alt="Muhamad Rifki Firdaus"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
