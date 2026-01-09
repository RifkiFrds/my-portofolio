"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "../lightswind/ProjectCard";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "HIMTI Universitas Muhammadiyah Tangerang",
      description:
        "Official website of HIMTI UMT featuring event information, competition registration, learning groups, and activity documentation. Developed using React (Vite) and Tailwind CSS with a clean and modern UI.",
      image:
        "https://res.cloudinary.com/dw7zrlpyz/image/upload/v1766751731/godinov_portfolio-image/e7btanazgb30ob0hsfyg.png",
      link: "https://web.himtiumt.or.id/",
      date: "2025",
    },
    {
      title: "SATSET AI — Productivity Web Application",
      description:
        "An AI-powered web application designed to help students complete academic tasks more efficiently. Features include an AI chatbot, paper outline generator, instant journal summaries, and PWA support.",
      image:
        "https://res.cloudinary.com/dw7zrlpyz/image/upload/v1766751794/godinov_portfolio-image/ozjfkc8mcvkqxomlnylg.png",
      link: "https://satset-ai.netlify.app/",
      date: "2025",
    },
    {
      title: "HIMTI Learning Group & HIMTIChat AI",
      description:
        "A modern learning community platform integrated with IBM Granite AI. Includes PWA support, interactive animations, dynamic mentor filtering, smart chat history, voice input, and conversation export features.",
      image:
        "https://res.cloudinary.com/dw7zrlpyz/image/upload/v1766751829/godinov_portfolio-image/rnfj9gaaojj9bbu3gu9o.png",
      link: "https://kelompok-belajar-himti.netlify.app/",
      date: "2025",
    },
    {
      title: "GOCARI — Tangerang City Community Platform",
      description:
        "A digital community platform focused on education, MSME empowerment, and social initiatives in Tangerang City. Built using Next.js and Supabase to deliver scalable, fast, and accessible community-driven features.",
      image:
        "https://res.cloudinary.com/dw7zrlpyz/image/upload/v1766751659/godinov_portfolio-image/l1fftoq9isfcz39mqibq.png",
      link: "http://gocari-id.netlify.app/",
      date: "2025",
    },
    {
     title: "Banten Storyteller — Community Storytelling PWA",
     description:
      "A Progressive Web Application for community-based storytelling in Banten, featuring offline-first access, installable PWA support, push notifications, and smart caching strategies. Built with Vanilla JavaScript, Service Workers, and Web App Manifest to ensure performance and reliability.",
      image:
        "https://i.ibb.co.com/vxyjpRXM/bantenstory.png",
      link: "https://bantenstoryteller.netlify.app",
      date: "2025",
    },
    {
      title: "ADAKOM Naik Kelas — Business & Learning Platform",
      description:
        "A business and education platform for MSMEs and professionals. Provides information on learning programs, business consulting, partnerships, and growth-focused content with a responsive and user-friendly design.",
      image:
        "https://res.cloudinary.com/dw7zrlpyz/image/upload/v1766752679/godinov_portfolio-image/hkjdpzetx0csqhdkhbwp.png",
      link: "https://adakomnaikkelas.com/",
      date: "2023",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-14"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </motion.section>
  );
};
