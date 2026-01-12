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
                <div className="w-full aspect-square mx-auto flex items-center justify-center">
                  {/* Main circle */}
                  <img
                    src="assets/l2.png"
                    alt="Hero Graphic"
                    className="w-3/4 max-w-[350px] aspect-square object-contain z-10 animate-float"
                  />
                  <div className="absolute inset-0 rounded-full border border-border/30 animate-pulse"></div>
                  <div className="absolute inset-8 rounded-full border border-primary/20"></div>
                  <div className="absolute inset-16 rounded-full border border-primary/30"></div>
                  <div className="absolute inset-24 rounded-full bg-primary/10 glow-cyan animate-float"></div>
                  {/* Floating elements */}
                  <div className="hidden lg:block absolute top-8 right-8 w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-md border border-white shadow-xl shadow-blue-500/10 p-3 animate-float-slow" style={{ animationDelay: '0.5s' }}>
                    <div className="w-full h-full rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>

                  <div className="hidden lg:block absolute bottom-12 left-8 w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-md border border-white shadow-xl shadow-purple-500/10 p-3 animate-float" style={{ animationDelay: '1s' }}>
                    <div className="space-y-1">
                      <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                      <div className="h-2 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full w-3/4"></div>
                      <div className="h-2 bg-blue-200 rounded-full w-1/2"></div>
                    </div>
                  </div>

                  <div className="hidden lg:flex absolute top-1/2 right-0 -translate-y-1/2 w-20 h-14 rounded-2xl bg-white/90 backdrop-blur-md border border-white shadow-xl shadow-cyan-500/10 p-3 animate-float-reverse" style={{ animationDelay: '1.5s' }}>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="space-y-1">
                        <div className="h-1.5 w-6 bg-gray-300 rounded"></div>
                        <div className="h-1.5 w-4 bg-blue-400 rounded"></div>
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
