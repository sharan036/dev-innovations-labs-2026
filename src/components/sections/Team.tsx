import { Linkedin, Twitter, Github } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Visionary leader with 15+ years in tech innovation",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    bio: "Full-stack architect passionate about scalable solutions",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Marcus Williams",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Code craftsman specializing in React & Node.js",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Emily Rodriguez",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Creating beautiful, intuitive user experiences",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-12 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet the <span className="text-gradient">Innovators</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our talented team of experts brings together diverse skills and experiences 
            to deliver exceptional solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-card border border-border/50 rounded-2xl p-6 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] hover:-translate-y-2">
                {/* Image */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Links Overlay */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href={member.twitter}
                      className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href={member.github}
                      className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
