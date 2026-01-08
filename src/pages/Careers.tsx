import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, ArrowRight, Briefcase, Users, Zap, Heart } from "lucide-react";

const openPositions = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Remote / Tech City",
    type: "Full-time",
    salary: "$120k - $160k",
    description: "Build scalable web applications using React, Node.js, and cloud technologies.",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    salary: "$90k - $130k",
    description: "Create beautiful, intuitive interfaces for our client projects.",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Hybrid",
    type: "Full-time",
    salary: "$130k - $170k",
    description: "Manage and optimize our cloud infrastructure and CI/CD pipelines.",
  },
  {
    id: 4,
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    salary: "$110k - $150k",
    description: "Drive product strategy and work closely with engineering and design teams.",
  },
  {
    id: 5,
    title: "Junior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$70k - $90k",
    description: "Learn and grow while building modern React applications.",
  },
];

const benefits = [
  {
    icon: Briefcase,
    title: "Remote-First",
    description: "Work from anywhere in the world with flexible hours",
  },
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description: "Top-tier salaries with equity options available",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs",
  },
  {
    icon: Users,
    title: "Team Events",
    description: "Regular team retreats and virtual social events",
  },
  {
    icon: Zap,
    title: "Learning Budget",
    description: "$2,000 annual budget for courses and conferences",
  },
  {
    icon: Clock,
    title: "Unlimited PTO",
    description: "Take the time you need to recharge and refresh",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.1),transparent_50%)]" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                We're Hiring
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Join Our Team of <span className="text-gradient">Innovators</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Build the future of technology with a team that values creativity, 
                collaboration, and continuous growth.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="#positions">View Open Positions</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Work With Us?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We believe in taking care of our team so they can do their best work.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Open Positions
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Find your next opportunity and grow with us.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {openPositions.map((position) => (
                <div
                  key={position.id}
                  className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                          {position.department}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {position.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">{position.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {position.salary}
                        </span>
                      </div>
                    </div>
                    <Button variant="heroOutline" className="shrink-0 group/btn">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-4">
                Don't see a role that fits? We're always looking for talented people.
              </p>
              <Button variant="outline" size="lg">
                Send Open Application
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
