"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Lightbulb, Users, Target } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function AboutSection() {
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

  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description:
        "Management Engineering student at University of Waterloo, combining technical expertise with business acumen.",
    },
    {
      icon: Users,
      title: "Leadership",
      description:
        "Proven track record in leading teams and initiatives, from founding startups to managing engineering projects.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Passionate about leveraggging technology to create innovative solutions for real-world challenges.",
    },
    {
      icon: Target,
      title: "Problem-Solving",
      description: "Analytical mindset with entrepreneurial spirit, focused on delivering impactful results.",
    },
  ]

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              About Me
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Passionate About <span className="text-primary">Engineering Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              As a Management Engineering student at the University of Waterloo, I'm driven by the intersection of
              technology and business innovation. My journey spans from founding startups to leading engineering teams,
              always with a focus on creating meaningful impact through thoughtful problem-solving.
            </p>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <Card
                  key={highlight.title}
                  className={`bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300 hover:scale-105 ${
                    isVisible ? "animate-fade-in-up" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-card-foreground">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground text-pretty">{highlight.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Personal statement */}
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <blockquote className="text-lg sm:text-xl text-foreground font-medium italic mb-4 text-balance">
                "I believe that the best solutions emerge when engineering rigor meets creative thinking. My goal is to
                bridge the gap between technical possibility and business value."
              </blockquote>
              <cite className="text-muted-foreground">— Jovan, Management Engineering Student</cite>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
