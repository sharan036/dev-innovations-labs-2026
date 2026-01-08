import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="hero-gradient flex items-center pt-[80px] md:pt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm text-muted-foreground font-mono">
                Your Best IT Partners
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              We believe that{" "}
              <span className="gradient-text">technology</span>
              <br />
              can transform the world.
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              At Dev Innovation Labs, we are dedicated to providing innovative IT solutions 
              that drive business success. Our expert team delivers cutting-edge technology 
              services tailored to your unique needs.
            </p>

            {/* <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl">
                Start a Project
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="heroOutline" size="xl">
                <Play size={20} className="mr-2" />
                Watch Demo
              </Button>
            </div> */}

            {/* Stats
            <div className="flex gap-8 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
            </div> */}
          </div>

          {/* Right Content - Hero Image/Graphic */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              {/* Abstract Tech Graphic */}
              <div className="relative">
                <div className="w-full aspect-square mx-auto">
                  {/* Main circle */}
                  <img
                    src="assets/portrait.png"
                    alt="Hero Graphic"
                    className="w-[530px] h-[530px] object-contain absolute inset-16 animate-float"
                  />
                  <div className="absolute inset-0 rounded-full border border-border/30 animate-pulse"></div>
                  <div className="absolute inset-8 rounded-full border border-primary/20"></div>
                  <div className="absolute inset-16 rounded-full border border-primary/30"></div>
                  <div className="absolute inset-24 rounded-full bg-primary/10 glow-cyan animate-float"></div>
                  {/* Floating elements */}
                  <div className="absolute top-10 right-10 w-16 h-16 rounded-lg bg-card border border-border p-3 animate-float" style={{ animationDelay: "0.5s" }}>
                    <div className="w-full h-full rounded bg-primary/20 flex items-center justify-center">
                      <div className="w-4 h-4 rounded bg-primary"></div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-20 left-0 w-20 h-20 rounded-lg bg-card border border-border p-3 animate-float" style={{ animationDelay: "1s" }}>
                    <div className="space-y-2">
                      <div className="h-2 bg-primary/40 rounded"></div>
                      <div className="h-2 bg-primary/20 rounded w-3/4"></div>
                      <div className="h-2 bg-primary/10 rounded w-1/2"></div>
                    </div>
                  </div>
                  
                  <div className="absolute top-1/2 -right-4 w-24 h-16 rounded-lg bg-card border border-border p-3 animate-float" style={{ animationDelay: "1.5s" }}>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20"></div>
                      <div className="space-y-1">
                        <div className="h-1.5 w-8 bg-foreground/20 rounded"></div>
                        <div className="h-1.5 w-6 bg-primary/40 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
