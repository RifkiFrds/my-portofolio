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
       A highly motivated Informatics Engineering student at Universitas Muhammadiyah Tangerang, specializing in Front
      End Web Development. Certified in Junior Web Developer (BNSP) through KOMDIGI, and successfully completed 
      the Dicoding x Indosat Ooredoo Hutchison (IDCamp) scholarship program up to the Advanced level. Skilled in 
      building impactful and user-centric digital products with modern web technologies. Known as a fast learner, detail
      oriented, and committed to delivering innovative and collaborative tech solutions.
      </p>
      <Separator />
    </motion.div>
  );
};
