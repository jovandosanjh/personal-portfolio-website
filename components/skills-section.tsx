"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code, Briefcase, Brain, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function SkillsSection() {
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

  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Code,
      color: "primary",
      skills: [
        { name: "Python", level: 90, description: "Data analysis, automation, backend development" },
        { name: "Java", level: 85, description: "Object-oriented programming, application development" },
        { name: "HTML/CSS", level: 95, description: "Modern web development, responsive design" },
        { name: "JavaScript", level: 88, description: "Interactive web applications, DOM manipulation" },
        { name: "Git/GitHub", level: 92, description: "Version control, collaborative development" },
      ],
    },
    {
      title: "Business Tools",
      icon: Briefcase,
      color: "accent",
      skills: [
        { name: "Excel VBA", level: 95, description: "Advanced macros, automation, financial modeling" },
        { name: "Data Analysis", level: 90, description: "VLookup, PivotTables, statistical analysis" },
        { name: "PowerPoint", level: 88, description: "Professional presentations, visual storytelling" },
        { name: "Word", level: 85, description: "Technical documentation, report writing" },
      ],
    },
    {
      title: "Core Strengths",
      icon: Brain,
      color: "chart-3",
      skills: [
        { name: "Project Management", level: 92, description: "Agile methodologies, team coordination" },
        { name: "Process Analysis", level: 88, description: "System optimization, workflow improvement" },
        { name: "Leadership", level: 90, description: "Team building, strategic vision, mentoring" },
        { name: "Communication", level: 94, description: "Technical writing, presentations, stakeholder management" },
        { name: "Adaptability", level: 96, description: "Learning agility, change management, innovation" },
      ],
    },
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          progress: "bg-primary",
        }
      case "accent":
        return {
          bg: "bg-accent/10",
          text: "text-accent",
          progress: "bg-accent",
        }
      case "chart-3":
        return {
          bg: "bg-chart-3/10",
          text: "text-chart-3",
          progress: "bg-chart-3",
        }
      default:
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          progress: "bg-primary",
        }
    }
  }

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Skills & Expertise
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Technical <span className="text-primary">Proficiency</span> & Soft Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              A comprehensive skill set spanning technical programming, business tools, and leadership capabilities,
              developed through academic projects and real-world experience.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon
              const colors = getColorClasses(category.color)

              return (
                <Card
                  key={category.title}
                  className={`bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300 ${
                    isVisible ? "animate-fade-in-up" : ""
                  }`}
                  style={{ animationDelay: `${categoryIndex * 200}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}>
                        <Icon className={`h-6 w-6 ${colors.text}`} />
                      </div>
                      <CardTitle className="text-xl text-card-foreground">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-card-foreground">{skill.name}</h4>
                            <span className={`text-sm font-medium ${colors.text}`}>{skill.level}%</span>
                          </div>
                          <Progress
                            value={isVisible ? skill.level : 0}
                            className="h-2"
                            style={{
                              transition: `all 1s ease-in-out ${(categoryIndex * 200 + skillIndex * 100) / 1000}s`,
                            }}
                          />
                          <p className="text-xs text-muted-foreground text-pretty">{skill.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Additional skills badges */}
          <Card
            className={`mt-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 ${
              isVisible ? "animate-fade-in-up" : ""
            }`}
            style={{ animationDelay: "600ms" }}
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl text-card-foreground">Additional Competencies</CardTitle>
                  <p className="text-muted-foreground">Technologies and methodologies I work with</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  "Database Management",
                  "API Integration",
                  "Responsive Design",
                  "Financial Modeling",
                  "Statistical Analysis",
                  "Agile Methodology",
                  "System Optimization",
                  "Technical Writing",
                  "Stakeholder Management",
                  "Innovation Strategy",
                  "Quality Assurance",
                  "Risk Assessment",
                ].map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
