import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Naresh Kumar",
    role: "Founder, Prinka HD Studio",
    company: "Prinka HD Studio",
    image: "assets/testimonial/prinkahdstudio.jpg",
    quote: "The team at Dev Innovations brought HeartFelt to life exactly the way we envisioned. The interface is elegant, intuitive, and built with such attention to detail. Our users love how easy it is to store and share memories now.",
    rating: 5,
  },
  {
    name: "Robin Singh",
    role: "Co-Founder, ROAC",
    company: "ROAC",
    image: "assets/testimonial/robinSingh.jpg",
    quote: "Dev Innovations transformed our online presence with a stunning website that perfectly captures our brand. Their team's expertise in design and development made the entire process seamless and enjoyable.",
    rating: 5,
  },
  {
    name: "Rohan Mehta",
    role: "Co-Founder, Neuros",
    company: "Neuros",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face",
    quote: "The futuristic website Dev Innovations created for us stands out in every way—smooth animations, modern layouts, and a premium look. It reflects exactly the cutting-edge identity we wanted to portray for our brand.",
    rating: 5,
  },
  {
    name: "Arjun Patel",
    role: "CEO, FitFathom",
    company: "FitFathom",
    image: "assets/testimonial/arjun.jpg",
    quote: "Working with Dev Innovations was a game-changer for our startup. They took our vague ideas and turned them into a sleek, user-friendly website that our customers love. Their professionalism and creativity are unmatched.",
    rating: 5,
  },
];

const clientLogos = [
  { name: "TechVentures", initials: "TV" },
  { name: "FinanceFlow", initials: "FF" },
  { name: "StartupHub", initials: "SH" },
  { name: "GlobalRetail", initials: "GR" },
  { name: "InnovateCo", initials: "IC" },
  { name: "DataDrive", initials: "DD" },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-12 bg-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,212,255,0.08),transparent_60%)]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about 
            their experience working with us.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative bg-card border border-border/50 rounded-3xl p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center glow-cyan-sm">
              <Quote className="w-6 h-6 text-primary-foreground" />
            </div>

            {/* Content */}
            <div 
              className={`transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
            >
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                "{currentTestimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/50"
                />
                <div>
                  <h4 className="text-lg font-bold text-foreground">{currentTestimonial.name}</h4>
                  <p className="text-muted-foreground">{currentTestimonial.role}</p>
                </div>
                <div className="ml-auto flex gap-1">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-border/50">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-primary w-8' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="rounded-full border-border/50 hover:border-primary hover:text-primary"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="rounded-full border-border/50 hover:border-primary hover:text-primary"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos */}
        {/* <div className="text-center">
          <p className="text-muted-foreground mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {clientLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center justify-center w-24 h-16 rounded-lg bg-card/50 border border-border/30 hover:border-primary/50 transition-all duration-300 group"
              >
                <span className="text-xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  {logo.initials}
                </span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
