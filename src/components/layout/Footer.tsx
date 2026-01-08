import { Image, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "#contact" },
    ],
    services: [
      { name: "Web Development", href: "#services" },
      { name: "Mobile Development", href: "#services" },
      { name: "Cloud Solutions", href: "#services" },
      { name: "AI & ML", href: "#services" },
    ],
    resources: [
      { name: "Blog", href: "#blog" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Support", href: "#support" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://in.linkedin.com/company/devinnovations-india", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/Dev_LabsIndia", label: "Twitter" },
    { icon: Github, href: "https://github.com/DevInnovationsLabs", label: "GitHub" },
    { icon: Instagram, href: "https://www.instagram.com/dev_innovations_labs/", label: "Instagram" },
  ];

  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-20 h-16 rounded-lg bg-foreground flex items-center justify-center glow-cyan-sm">
                <img className="text-primary-foreground font-bold text-xl" src="assets/Logo-dil.png" alt="DevInnovation Logo" />
              </div>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Transforming businesses through innovative technology solutions. 
              Your trusted partner in digital transformation.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Dev Innovation Labs. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B917973977956&text=Hello%2C+I+would+like+to+know+more%21&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed right-5 bottom-20 z-50 flex items-center justify-center
                    p-2 rounded-lg cursor-pointer
                    transition-transform duration-300 ease-in-out
                    hover:scale-110 hover:shadow-xl"
        >
          <img
            src="assets/whatsapp-svg.svg"
            alt="Chat on WhatsApp"
            width={40}
            height={40}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
