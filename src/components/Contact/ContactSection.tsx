"use client";

import { motion, type Variants } from "framer-motion";
import { Linkedin, Mail, MapPin, Send, Github } from "lucide-react";
import { Button } from "../lightswind/button";

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
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggerContainer = {
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

export const ContactSection = () => {
  const handleSendMail = (e: React.MouseEvent) => {
    e.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement)?.value;
    const email = (document.getElementById("email") as HTMLInputElement)?.value;
    const message = (document.getElementById("message") as HTMLTextAreaElement)?.value;

    const mailtoLink = `mailto:muhamadrifkifirdaus22@gmail.com
      ?subject=Contact from ${encodeURIComponent(name)}
      &body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12"
        >
          {/* LEFT SIDE */}
          <motion.div variants={fadeUp} className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's Work Together
              </h2>
              <p className="text-muted-foreground max-w-md hidden sm:block">
                Have a project in mind or just want to say hi? Feel free to reach out.
              </p>
            </div>

            {/* MOBILE ICON ONLY */}
            <div className="grid grid-cols-4 gap-4 sm:hidden">
              <a
                href="mailto:muhamadrifkifirdaus22@gmail.com"
                className="p-4 rounded-xl bg-primary/10 text-primary flex justify-center"
              >
                <Mail />
              </a>
              <a
                href="https://github.com/rifkifrds"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-primary/10 text-primary flex justify-center"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/rifkifrds/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-primary/10 text-primary flex justify-center"
              >
                <Linkedin />
              </a>
              <a
                href="https://maps.google.com/?q=Tangerang, Indonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-primary/10 text-primary flex justify-center"
              >
                <MapPin />
              </a>
            </div>

            {/* DESKTOP ICON + TEXT */}
            <div className="space-y-6 hidden sm:block">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Mail />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:muhamadrifkifirdaus22@gmail.com"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    muhamadrifkifirdaus22@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Github />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <a
                    href="https://github.com/rifkifrds"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    rifkifrds
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Linkedin />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/rifkifrds/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    Muhamad Rifki Firdaus
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <MapPin />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Tangerang, Indonesia</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div variants={fadeUp}>
            <div className="backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
              <form className="space-y-6">
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <input
                    id="name"
                    className="w-full bg-transparent border-b px-0 py-2 outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full bg-transparent border-b px-0 py-2 outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b px-0 py-2 outline-none resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button size="lg" className="w-full" onClick={handleSendMail}>
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
