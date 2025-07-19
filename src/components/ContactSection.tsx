
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleGithubClick = () => {
    window.open("https://github.com/Shriram-Vatturkar", "_blank", "noopener noreferrer");
  };

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/shriram-vatturkar-32a40a26b/", "_blank", "noopener noreferrer");
  };

  const handleEmailClick = () => {
    window.open("mailto:shriram.vatturkar@gmail.com", "_blank", "noopener noreferrer");
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a conversation about AI and technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 glass-card">
              <h3 className="text-lg font-semibold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>shriram.vatturkar@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="h-5 w-5 text-primary" />
                  <span>github.com/Shriram-Vatturkar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <span>linkedin.com/in/shriram-vatturkar-32a40a26b</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 glass-card">
              <h3 className="text-lg font-semibold mb-4">Social Media</h3>
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                  onClick={handleGithubClick}
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                  onClick={handleLinkedinClick}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                  onClick={handleEmailClick}
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
