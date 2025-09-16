"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download, ExternalLink } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would send the form data to a server
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  const handleResumeDownload = () => {
    window.open("/Jovan_Dosanjh_Resume.pdf", "_blank");
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jovan.dosanjh@uwaterloo.ca",
      href: "mailto:jovan.dosanjh@uwaterloo.ca",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Waterloo, ON, Canada",
      href: "https://maps.google.com/?q=Waterloo,ON,Canada",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/jovandosanjh",
      username: "@jovandosanjh",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/jovan-dosanjh",
      username: "Jovan Dosanjh",
    },
  ]

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Get In Touch
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Let's <span className="text-primary">Connect</span> & Collaborate
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              I'm always interested in discussing new opportunities, innovative projects, or simply connecting with
              fellow engineering enthusiasts. Feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact form */}
            <div className="lg:col-span-2">
              <Card className={`bg-card/50 backdrop-blur-sm border-border/50 ${isVisible ? "animate-fade-in-up" : ""}`}>
                <CardHeader>
                  <CardTitle className="text-2xl text-card-foreground flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Send className="h-5 w-5 text-primary" />
                    </div>
                    Send Me a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Have a project in mind or want to discuss opportunities? I'd love to hear from you.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-card-foreground">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="bg-input border-border text-foreground"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="bg-input border-border text-foreground"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-card-foreground">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or opportunity..."
                        rows={6}
                        required
                        className="bg-input border-border text-foreground resize-none"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact info and links */}
            <div className="space-y-6">
              {/* Contact information */}
              <Card
                className={`bg-card/50 backdrop-blur-sm border-border/50 ${isVisible ? "animate-fade-in-up" : ""}`}
                style={{ animationDelay: "200ms" }}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-card-foreground">Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contactInfo.map((info) => {
                      const Icon = info.icon
                      return (
                        <a
                          key={info.label}
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-background/50 transition-colors group"
                        >
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-card-foreground">{info.label}</p>
                            <p className="text-sm text-muted-foreground">{info.value}</p>
                          </div>
                        </a>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Social links */}
              <Card
                className={`bg-card/50 backdrop-blur-sm border-border/50 ${isVisible ? "animate-fade-in-up" : ""}`}
                style={{ animationDelay: "400ms" }}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-card-foreground">Connect Online</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {socialLinks.map((social) => {
                      const Icon = social.icon
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-background/50 transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              <Icon className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium text-card-foreground">{social.label}</p>
                              <p className="text-sm text-muted-foreground">{social.username}</p>
                            </div>
                          </div>
                          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </a>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Resume download */}
              <Card
                className={`bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 ${
                  isVisible ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: "600ms" }}
              >
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-card-foreground mb-2">Download My Resume</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get a comprehensive overview of my experience and qualifications.
                  </p>
                  <Button onClick={handleResumeDownload} className="w-full bg-primary hover:bg-primary/90">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Jovan. Built with passion for engineering excellence.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={handleResumeDownload}>
                Resume
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
