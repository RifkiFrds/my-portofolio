"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  date: string;
}

export function ProjectCard({
  title,
  description,
  image,
  link,
  date,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="group rounded-2xl overflow-hidden border border-border bg-background shadow-sm"
    >
      {/* Image */}
      <div className="relative aspect-[12/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <span className="text-xs text-muted-foreground">{date}</span>

        <h3 className="text-lg font-semibold leading-tight">{title}</h3>

        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            View Project <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
