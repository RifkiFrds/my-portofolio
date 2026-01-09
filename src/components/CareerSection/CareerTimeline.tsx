import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Briefcase, ShoppingCart } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "Oct 2025 – Present",
      title: "Web Developer Intern",
      subtitle: "PT. Inspirasi Solusi Kreatif — Jakarta, Indonesia",
      description:
        "Developing and maintaining responsive web interfaces using React.js and modern front-end practices. Integrating RESTful APIs from Laravel backend, building reusable UI components, and collaborating closely with backend developers to ensure data accuracy, performance, and UI/UX consistency based on product requirements.",
      icon: <Briefcase className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2025 – Present",
      title: "Co-Founder & Front-End Developer (Project-Based)",
      subtitle: "GODINOV Software House",
      description:
        "Building and maintaining responsive web interfaces for small-scale business and organizational projects. Responsible for front-end architecture, UI implementation, and collaboration with backend and marketing team members to deliver functional and user-focused web solutions.",
      icon: <Briefcase className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "Sep 2022 – Feb 2023",
      title: "E-Commerce Marketing Intern",
      subtitle: "PT. Wingoh Albindo — Tangerang, Indonesia",
      description:
        "Assisted in managing product listings across e-commerce platforms, supported digital marketing and promotional activities, and maintained effective communication within the team to ensure smooth daily operations. Demonstrated strong discipline, responsibility, and teamwork, achieving an overall Grade A (Excellent Performance).",
      icon: <ShoppingCart className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Professional Experience"
        subtitle="Hands-on industry experience through internships and real-world projects"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.12}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
