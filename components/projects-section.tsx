"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star, Users, Zap, Calculator, Gamepad2, Globe } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
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

  // Featured project (LinkUp)
  const featuredProject = {
    title: "LinkUp",
    description:
      "A comprehensive platform connecting students with industry mentors and project opportunities, featuring an intuitive dashboard, interactive project listings, and intelligent mentor matching system.",
    longDescription:
      "LinkUp bridges the gap between academic learning and industry experience by creating meaningful connections between students and professionals. The platform features a user-friendly dashboard for both students and mentors, interactive project listings with detailed requirements, smart matching algorithms, and real-time notifications to keep users engaged.",
    features: [
      "User-friendly dashboard for students and mentors",
      "Interactive project listings with detailed requirements",
      "Intelligent mentor matching based on skills and interests",
      "Real-time notifications and messaging system",
      "Progress tracking and milestone management",
      "Industry-specific project categories",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Python", "Database Management", "API Integration"],
    status: "Live",
    category: "Web Platform",
    impact: "Connecting 500+ students with industry professionals",
  }

  const otherProjects = [
    {
      title: "Financial Planner Excel Tool",
      description:
        "Comprehensive budgeting and financial analysis tool built in Excel with advanced macros and sensitivity analysis capabilities.",
      techStack: ["Excel VBA", "Macros", "Financial Modeling"],
      category: "Business Tool",
      icon: Calculator,
      features: ["Automated budget calculations", "Sensitivity analysis", "Visual reporting", "Scenario planning"],
    },
    {
      title: "MinTech Solutions",
      description:
        "Innovative bioleaching solution for EV battery recycling, developed for hackathon competition with focus on sustainability.",
      techStack: ["Research", "Sustainability", "Innovation"],
      category: "Sustainability",
      icon: Zap,
      features: [
        "Eco-friendly battery recycling",
        "Cost-effective process",
        "Scalable solution",
        "Industry validation",
      ],
      achievement: "Hackathon Finalist",
    },
    {
      title: "Pizza Comparison Program",
      description:
        "Python application for comparing pizza options based on size, price, and toppings to find the best value proposition.",
      techStack: ["Python", "Data Analysis", "Algorithm Design"],
      category: "Utility App",
      icon: Calculator,
      features: ["Price comparison algorithm", "Value optimization", "User-friendly interface", "Data visualization"],
    },
    {
      title: "Hangman Game",
      description:
        "Classic word-guessing game implemented in Java with object-oriented design principles and interactive gameplay.",
      techStack: ["Java", "OOP", "Game Development"],
      category: "Game",
      icon: Gamepad2,
      features: ["Object-oriented design", "Interactive gameplay", "Score tracking", "Multiple difficulty levels"],
    },
    {
      title: "Portfolio Website",
      description:
        "This very website! A modern, responsive portfolio showcasing projects and experience with smooth animations and professional design.",
      techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      category: "Web Development",
      icon: Globe,
      features: ["Responsive design", "Smooth animations", "Modern UI/UX", "Performance optimized"],
    },
  ]

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Featured Projects
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Innovative <span className="text-primary">Solutions</span> & Creations
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              From web platforms to sustainability solutions, my projects demonstrate technical expertise and
              problem-solving skills across diverse domains.
            </p>
          </div>

          {/* Featured Project - LinkUp */}
          <Card
            className={`mb-12 bg-gradient-to-br from-primary/5 via-background to-accent/5 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] ${
              isVisible ? "animate-fade-in-up" : ""
            }`}
          >
            <CardHeader>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-2xl lg:text-3xl text-card-foreground">
                        {featuredProject.title}
                      </CardTitle>
                      <Badge className="bg-primary text-primary-foreground">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="outline" className="text-accent border-accent/20">
                        {featuredProject.category}
                      </Badge>
                      <Badge variant="outline" className="text-primary border-primary/20">
                        {featuredProject.status}
                      </Badge>
                      <p className="text-sm text-muted-foreground">{featuredProject.impact}</p>
                    </div>
                  </div>
                </div>
                {/* Commented out buttons for now
                <div className="flex gap-3">
                  <Button className="bg-primary hover:bg-primary/90">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live Demo
                  </Button>
                  <Button variant="outline" className="bg-transparent">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                </div>
                */}
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Project description */}
                <div className="lg:col-span-2 space-y-6">
                  <p className="text-muted-foreground text-lg text-pretty">{featuredProject.description}</p>
                  <p className="text-muted-foreground text-pretty">{featuredProject.longDescription}</p>

                  {/* Key features */}
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-3 text-lg">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {featuredProject.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tech stack and details */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-3">Technology Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Project stats */}
                  <div className="bg-background/50 rounded-lg p-4 space-y-3">
                    <h4 className="font-semibold text-card-foreground">Project Impact:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Status:</span>
                        <span className="text-primary font-medium">{featuredProject.status}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Category:</span>
                        <span className="text-card-foreground">{featuredProject.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Users:</span>
                        <span className="text-card-foreground">500+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Other Projects Grid */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-card-foreground">Other Notable Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => {
                const Icon = project.icon
                return (
                  <Card
                    key={project.title}
                    className={`bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300 hover:scale-105 group ${
                      isVisible ? "animate-fade-in-up" : ""
                    }`}
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg text-card-foreground">{project.title}</CardTitle>
                            <Badge variant="outline" className="text-xs mt-1">
                              {project.category}
                            </Badge>
                          </div>
                        </div>
                        {project.achievement && (
                          <Badge className="bg-accent/10 text-accent border-accent/20 text-xs">
                            {project.achievement}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4 text-pretty">{project.description}</p>

                      {/* Features */}
                      <div className="mb-4">
                        <h5 className="font-semibold text-card-foreground text-sm mb-2">Features:</h5>
                        <ul className="space-y-1">
                          {project.features.slice(0, 3).map((feature, i) => (
                            <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                              <span className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
