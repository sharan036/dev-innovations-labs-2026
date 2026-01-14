import React from 'react';
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
const projects = [
  {
    title: "HeartFelt",
    category: "Mobile & Web Application",
    description: "HeartFelt lets you preserve your cherished memories through beautiful digital keepsakes, perfect for honoring life's most meaningful moments.",
    image: "linear-gradient(135deg, hsl(186 100% 50% / 0.2) 0%, hsl(216 50% 15%) 100%)",
    imageUrl: "assets/projects/Heartfelt.png",
    tags: ["React Native", "Node.js", "PostgreSQL"],
    url: "https://theheartfelt.in/",
  },
  {
    title: "ROAC | Rise of All Carriers",
    category: "Web Application",
    description: "Multi-vendor marketplace with seamless payment integration and inventory management.",
    image: "linear-gradient(135deg, hsl(270 100% 50% / 0.2) 0%, hsl(216 50% 15%) 100%)",
    imageUrl: "assets/projects/theroac.png",
    tags: ["Next.js", "Node.js", "Stripe", "PostgreSQL"],
    url: "https://www.theroac.com/",
  },
  {
    title: "Neuros",
    category: "Web Application",
    description: "Artificial Intelligence refers to the development of computer systems that can perform tasks that would typically require human intelligence.",
    image: "linear-gradient(135deg, hsl(150 100% 50% / 0.2) 0%, hsl(216 50% 15%) 100%)",
    imageUrl: "assets/projects/Neuros.png",
    tags: ["React TypeScript", "Node.js",],
    url: "https://neurosai.in/home/",
  },
  {
    title: "FitFathom",
    category: "HTML PWA Application",
    description: "FitFathom is a Progressive Web App (PWA) designed to help users track their fitness journey with ease and convenience.",
    image: "linear-gradient(135deg, hsl(30 100% 50% / 0.2) 0%, hsl(216 50% 15%) 100%)",
    imageUrl: "assets/projects/FitFathom.png",
    tags: ["HTML", "CSS", "JavaScript", "PWA"],
    url: "https://fitfathom.com/",
  },
];

const ProjectsPage: React.FC = () => {
    return (<>
        <Header/>
        <section className="py-12 section-gradient mt-20">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                    <div>
                        <span className="inline-block px-4 py-2 rounded-full bg-secondary border border-border text-sm text-primary font-mono mb-4">
                        Our Projects
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        Featured <span className="gradient-text">Case Studies</span>
                        </h2>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <a
                    key={project.title}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 hover-lift block"
                    >
                    {/* Project Image/Gradient */}
                    <div
                        className="h-64 w-full relative"
                        style={{ background: project.image }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent">
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-fill"
                        />
                        </div>
                        
                        {/* Floating icon */}
                        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                        <ArrowUpRight className="w-5 h-5 text-primary" />
                        </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                        <span className="text-sm text-primary font-mono mb-2 block">
                        {project.category}
                        </span>
                        <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground border border-border"
                            >
                            {tag}
                            </span>
                        ))}
                        </div>
                    </div>
                    </a>
                ))}
                </div>
            </div>
        </section>
        <Footer />
    </>
    );
};

export default ProjectsPage;