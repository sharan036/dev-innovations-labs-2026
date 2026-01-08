import { Code, Smartphone, Cloud, Shield, Database, Cpu, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies for optimal performance and scalability.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to modernize your business operations.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and ensure data privacy.",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with our advanced analytics and BI solutions.",
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Intelligent automation and AI-powered solutions to drive innovation and efficiency.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary border border-border text-sm text-primary font-mono mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Transform Your Business with
            <br />
            <span className="gradient-text">Innovative Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We offer comprehensive IT services designed to accelerate your digital 
            transformation and drive sustainable growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:glow-cyan-sm transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                <ArrowUpRight className="w-5 h-5 text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
