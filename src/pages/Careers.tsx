import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, ArrowRight, Briefcase, Users, Zap, Heart } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const openPositions = [
  {
    id: "FE-FRESHER",
    title: "Frontend Developer (React / Next.js)",
    department: "Engineering",
    location: "Remote",
    type: "Fresher",
    description:
      "Build responsive web applications using React, Next.js, TypeScript, and modern UI frameworks.",
  },
  {
    id: "FE-EXP",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Experienced",
    description:
      "Lead frontend architecture, optimize performance, and mentor junior developers.",
  },
  {
    id: "BE-FRESHER",
    title: "Backend Developer (Node.js)",
    department: "Engineering",
    location: "Remote",
    type: "Fresher",
    description:
      "Develop secure REST APIs, database integrations, and scalable backend services.",
  },
  {
    id: "BE-EXP",
    title: "Senior Backend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Experienced",
    description:
      "Design microservices, optimize databases, and maintain production infrastructure.",
  },
  {
    id: "FS-EXP",
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Experienced",
    description:
      "Work across frontend, backend, databases, and cloud infrastructure.",
  },
  {
    id: "ML-FRESHER",
    title: "Machine Learning Engineer",
    department: "AI & Data",
    location: "Remote",
    type: "Fresher",
    description:
      "Train, evaluate, and deploy machine learning models for real-world products.",
  },
  {
    id: "AI-EXP",
    title: "AI Engineer",
    department: "AI & Data",
    location: "Remote",
    type: "Experienced",
    description:
      "Build AI-powered applications using LLMs, RAG systems, and intelligent automation.",
  },
  {
    id: "CS-EXP",
    title: "Cyber Security Analyst",
    department: "Security",
    location: "Remote",
    type: "Experienced",
    description:
      "Perform security audits, penetration testing, and infrastructure hardening.",
  },
  {
    id: "HR-FRESHER",
    title: "HR Executive",
    department: "Human Resources",
    location: "Remote",
    type: "Fresher",
    description:
      "Manage recruitment, onboarding, employee engagement, and HR operations.",
  },
  {
    id: "BDE-FRESHER",
    title: "Business Development Executive",
    department: "Sales",
    location: "Remote",
    type: "Fresher",
    description:
      "Generate leads, build client relationships, and support company growth initiatives.",
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
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resume, setResume] = useState<File | null>(null);
  const [selectedJob, setSelectedJob] = useState<any>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    coverLetter: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedJob) return;

    try {
      setLoading(true);

      const data = new FormData();

      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("linkedin", formData.linkedin);
      data.append("coverLetter", formData.coverLetter);
      data.append("id", selectedJob.id);
      data.append("title", selectedJob.title);
      data.append("location", selectedJob.location);

      if (resume) {
        data.append("resume", resume);
      }

      const response = await fetch(
        "https://app-3rconxdx6q-uc.a.run.app/hiring",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.text();

      if (!response.ok) {
        throw new Error(result);
      }

      alert("Application submitted successfully!");

      setOpen(false);

      setFormData({
        name: "",
        email: "",
        phone: "",
        linkedin: "",
        coverLetter: "",
      });

      setResume(null);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
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
                      </div>
                    </div>
                    <Button
                      variant="heroOutline"
                      onClick={() => {
                        setSelectedJob(position);
                        setOpen(true);
                      }}
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
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
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              Apply for {selectedJob?.title}
            </DialogTitle>

            <DialogDescription>
              Complete the form below to submit your application.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className="w-full border rounded-md p-3"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <input
              type="email"
              className="w-full border rounded-md p-3"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <input
              className="w-full border rounded-md p-3"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />

            <input
              className="w-full border rounded-md p-3"
              placeholder="LinkedIn URL"
              required
              value={formData.linkedin}
              onChange={(e) =>
                setFormData({ ...formData, linkedin: e.target.value })
              }
            />

            <textarea
              rows={5}
              className="w-full border rounded-md p-3"
              placeholder="Cover Letter"
              required
              value={formData.coverLetter}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  coverLetter: e.target.value,
                })
              }
            />

            <div>
              <label className="text-sm font-medium block mb-2">
                Resume (PDF/DOC/DOCX)
              </label>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) =>
                  setResume(e.target.files?.[0] || null)
                }
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      <Footer />
    </div>
  );
};

export default Careers;
