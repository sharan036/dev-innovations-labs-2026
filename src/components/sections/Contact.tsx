import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Phone, MapPin, Clock } from "lucide-react";
import { z } from "zod";
import axios from "axios";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(10, "Message too short").max(2000),
  company: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((p) => ({ ...p, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Spam protection
    if (formData.company) return;

    const parsed = contactSchema.safeParse(formData);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      parsed.error.errors.forEach((err) => {
        fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    try {
      setIsSubmitting(true);

      await axios.post(
        "https://app-3rconxdx6q-uc.a.run.app/contactus",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        { timeout: 10000 }
      );

      toast({
        title: "Message sent",
        description: "We'll get back to you shortly.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        company: "",
      });
    } catch (error: any) {
      toast({
        title: "Submission failed",
        description:
          error?.response?.data?.message ||
          "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hr@devinnovations.co.in", href: "mailto:hr@devinnovations.co.in" },
    { icon: Phone, label: "Phone", value: "+91 79739 77956", href: "tel:+917973977956" },
    { icon: MapPin, label: "Office", value: "356, Sector 48A, Chandigarh, IN 160047" },
    { icon: Clock, label: "Hours", value: "Mon - Fri: 10:00 AM - 7:00 PM" },
  ];

  return (
    <section id="contact" className="py-12 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold">Get in Touch</h3>
            <p className="text-muted-foreground">
              Tell us about your idea. We'll help turn it into a scalable product.
            </p>

            {contactInfo.map((info) => (
              <div key={info.label} className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="font-medium hover:text-primary">
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-card border rounded-2xl p-8"
              noValidate
            >
              {/* Honeypot */}
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  aria-invalid={!!errors.subject}
                />
                {errors.subject && <p className="text-sm text-destructive">{errors.subject}</p>}
              </div>

              <div className="mb-8">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : <>Send Message <Send className="ml-2 w-5 h-5" /></>}
              </Button>
              <p className="text-sm text-muted-foreground text-center mt-4">
                By submitting, you agree to our{" "}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
