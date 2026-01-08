import { Check, Target, Users, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "A dependable team committed to quality, consistency, and client success",
  "Structured agile process ensuring predictability and timely delivery",
  "Responsive support with accountability at every stage of the project",
  "Robust and scalable technology stack aligned with business goals",
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To empower businesses with innovative technology solutions that drive growth and success.",
  },
  {
    icon: Users,
    title: "Our Team",
    description: "A diverse group of experts passionate about creating exceptional digital experiences.",
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    description: "To be the leading technology partner for businesses worldwide, shaping the future of innovation.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-12 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-secondary border border-border text-sm text-primary font-mono mb-4">
              Why Choose Us?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              We believe that{" "}
              <span className="gradient-text">technology</span>
              <br />
              can transform the world.
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Dev Innovation Labs, we combine creativity with technical excellence 
              to deliver solutions that exceed expectations. Our commitment to quality 
              and innovation has made us a trusted partner for businesses across industries.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* <Button variant="hero" size="lg">
              Learn More About Us
            </Button> */}
          </div>

          {/* Right Content - Value Cards */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift flex gap-5"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
