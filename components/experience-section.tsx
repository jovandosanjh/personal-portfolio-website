"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, Wrench, BookOpen, Calendar } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function ExperienceSection() {
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

  const experiences = [
    {
      title: "Lead Engineering Specialist",
      company: "Industry 4.0 Design Team",
      organization: "University of Waterloo",
      period: "2023 - Present",
      type: "Leadership",
      icon: Building2,
      description:
        "Leading engineering initiatives in Industry 4.0 technologies, focusing on automation and smart manufacturing solutions.",
      achievements: [
        "Spearheaded cross-functional team of 12+ engineering students",
        "Developed innovative automation prototypes for local manufacturers",
        "Mentored junior team members in technical and leadership skills",
        "Presented solutions to industry partners and stakeholders",
      ],
      skills: ["Leadership", "Industry 4.0", "Automation", "Team Management"],
    },
    {
      title: "Founder & VP of Technology",
      company: "Conscious Keychains",
      organization: "Startup",
      period: "2022 - 2023",
      type: "Entrepreneurship",
      icon: Users,
      description:
        "Founded and led technology development for a sustainable accessories startup focused on environmental consciousness.",
      achievements: [
        "Built company from concept to market-ready product line",
        "Developed sustainable manufacturing processes and supply chain",
        "Led product design and technology integration initiatives",
        "Managed cross-functional team and strategic partnerships",
      ],
      skills: ["Entrepreneurship", "Product Development", "Sustainability", "Strategic Planning"],
    },
    {
      title: "Project Manager & Hardscaper",
      company: "OCContracting",
      organization: "Construction",
      period: "2021 - 2022",
      type: "Project Management",
      icon: Wrench,
      description:
        "Managed construction projects and specialized in hardscaping solutions, ensuring quality delivery and client satisfaction.",
      achievements: [
        "Successfully managed multiple concurrent construction projects",
        "Implemented quality control processes improving client satisfaction by 25%",
        "Coordinated with subcontractors and suppliers for timely project delivery",
        "Developed cost-effective solutions for complex landscaping challenges",
      ],
      skills: ["Project Management", "Quality Control", "Client Relations", "Problem Solving"],
    },
    {
      title: "Educational Assistant",
      company: "Kumon Institute of Education",
      organization: "Education",
      period: "2020 - 2021",
      type: "Education",
      icon: BookOpen,
      description:
        "Provided educational support and mentoring to students, developing personalized learning strategies and assessment methods.",
      achievements: [
        "Mentored 30+ students in mathematics and reading comprehension",
        "Developed individualized learning plans based on student assessments",
        "Improved student performance metrics by implementing targeted interventions",
        "Collaborated with parents and educators to support student success",
      ],
      skills: ["Mentoring", "Educational Assessment", "Communication", "Adaptability"],
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Leadership":
        return "bg-primary/10 text-primary border-primary/20"
      case "Entrepreneurship":
        return "bg-accent/10 text-accent border-accent/20"
      case "Project Management":
        return "bg-chart-3/10 text-chart-3 border-chart-3/20"
      case "Education":
        return "bg-chart-1/10 text-chart-1 border-chart-1/20"
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20"
    }
  }

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Professional Experience
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Building <span className="text-primary">Impact</span> Through Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              From founding startups to leading engineering teams, my diverse experience spans technology, business, and
              education, always focused on creating meaningful solutions.
            </p>
          </div>

          {/* Experience timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5" />

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const Icon = exp.icon
                return (
                  <div
                    key={exp.title}
                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 md:translate-x-0 z-10" />

                    {/* Content */}
                    <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                      <Card
                        className={`bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300 hover:scale-[1.02] ${
                          isVisible ? "animate-slide-in-left" : ""
                        }`}
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                <Icon className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <CardTitle className="text-xl text-card-foreground">{exp.title}</CardTitle>
                                <p className="text-muted-foreground font-medium">
                                  {exp.company} • {exp.organization}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge variant="outline" className={getTypeColor(exp.type)}>
                                {exp.type}
                              </Badge>
                              <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {exp.period}
                              </p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4 text-pretty">{exp.description}</p>

                          {/* Achievements */}
                          <div className="mb-4">
                            <h4 className="font-semibold text-card-foreground mb-2">Key Achievements:</h4>
                            <ul className="space-y-1">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Skills */}
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
