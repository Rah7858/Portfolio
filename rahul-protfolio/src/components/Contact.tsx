import { useState } from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // Initialize EmailJS
  emailjs.init("o4p_zUzCvl8_fs3lj");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);

      setIsLoading(true);

      // Send email using EmailJS
      await emailjs.send(
        "service_nka30wj",
        "template_v2xmofo",
        {
          from_name: validatedData.name,
          from_email: validatedData.email,
          message: validatedData.message,
        }
      );

      toast.success("Message sent! I'll get back to you soon.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Show validation errors
        error.errors.forEach((err) => {
          toast.error(err.message);
        });
      } else {
        console.error("Error sending email:", error);
        toast.error("Failed to send message. Please try again or contact me directly.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rahul.work1017@gmail.com",
      href: "mailto:rahul.work1017@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7858059990",
      href: "tel:+917858059990",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/rk1017",
      href: "https://linkedin.com/in/rk1017",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Rah7858",
      href: "https://github.com/Rah7858",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-[#05011a]/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="bg-card border-border hover:border-primary transition-colors">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary" size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors block truncate"
                      >
                        {info.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="bg-card border-border animate-scale-in">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    disabled={isLoading}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={isLoading}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={isLoading}
                    required
                    className="bg-background border-border resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
