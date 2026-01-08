import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP_LINK =
  "https://api.whatsapp.com/send/?phone=%2B917973977956&text=Hello%2C+I+would+like+to+know+more%21&type=phone_number&app_absent=0";

const CTA = () => {
  return (
    <section
      role="region"
      aria-labelledby="cta-heading"
      className="relative py-12 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-primary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium text-primary mb-6">
            Ready to start?
          </span>

          <h2
            id="cta-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Ready to take your
            <br />
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              business to the next level?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let’s discuss how we can turn your ideas into scalable,
            production-ready digital products.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Start a Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button> */}

            <Button
              asChild
              variant="heroOutline"
              size="xl"
              aria-label="Chat with us on WhatsApp"
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="mr-2 w-5 h-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          {/* <div className="mt-16 pt-12 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-6">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-50">
              {["TechCorp", "InnovateCo", "CloudFirst", "DataFlow", "NextGen"].map((company) => (
                <div key={company} className="text-lg font-semibold text-muted-foreground">
                  {company}
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CTA;
