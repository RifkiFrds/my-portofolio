import { Separator } from "../lightswind/separator";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <motion.div
      id="about"
      className="text-foreground max-w-7xl mx-auto w-full px-6 py-12 space-y-4"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="text-muted-foreground text-justify text-sm max-w-3xl">
      Software Engineer and Founder of Godinov Indonesia with hands-on experience in building scalable web applications and AI-powered digital solutions for healthcare, education, and enterprise businesses. Experienced in delivering end-to-end software products, from product planning and frontend engineering to backend development and AI integration. Passionate about creating clean, user-centered, and production-ready applications using modern technologies while continuously exploring innovative solutions to solve real-world problems.
      </p>
      <Separator />
    </motion.div>
  );
};
