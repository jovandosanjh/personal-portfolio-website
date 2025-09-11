"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen, Trophy } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function EducationSection() {
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

  const coursework = [
    "Linear Algebra & Calculus",
    "Computer Science Fundamentals",
    "Engineering Psychology",
    "Chemistry & Materials Science",
    "Statistics & Data Analysis",
    "Operations Research",
    "Systems Design",
    "Business Strategy",
  ]

  const achievements = [
    {
      title: "B2 French Exam",
      description: "Achieved 85% on standardized French proficiency examination",
      icon: Award,
      type: "Language Certification",
    },
    {
      title: "Evolve Hackathon Finalist",
      description: "Selected as finalist for innovative bioleaching solution for EV battery recycling",
      icon: Trophy,
      type: "Competition",
    },
    {
      title: "Fleming Pitch It to Win Finalist",
      description: "Advanced to final round with MinTech Solutions business pitch",
      icon: Trophy,
      type: "Competition",
    },
  ]

  const volunteerWork = [
    {
      title: "Student Mentoring Program",
      description: "Mentoring younger students in engineering fundamentals and career development",
      impact: "Guided 15+ students through academic and professional challenges",
    },
    {
      title: "Industry 4.0 Outreach",
      description: "Inspiring high school students about engineering and technology careers",
      impact: "Reached 200+ students through workshops and presentations",
    },
  ]

  return (
    <section ref={sectionRef} id="education" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Education & Achievements
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Continuous <span className="text-primary">Learning</span> & Growth
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              My academic journey at the University of Waterloo, combined with certifications and achievements, reflects
              my commitment to excellence and continuous improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Education */}
            <Card className={`bg-card/50 backdrop-blur-sm border-border/50 ${isVisible ? "animate-fade-in-up" : ""}`}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-card-foreground">Management Engineering</CardTitle>
                    <p className="text-muted-foreground font-medium">University of Waterloo</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-pretty">
                  Pursuing a comprehensive program that combines engineering principles with business management,
                  preparing for leadership roles in technology-driven organizations.
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-card-foreground mb-3">Relevant Coursework:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {coursework.map((course) => (
                      <Badge key={course} variant="secondary" className="text-xs justify-start">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-primary/5 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-card-foreground">Focus Areas:</strong> Systems optimization, data-driven
                    decision making, and technology integration in business processes.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card
              className={`bg-card/50 backdrop-blur-sm border-border/50 ${isVisible ? "animate-fade-in-up" : ""}`}
              style={{ animationDelay: "200ms" }}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-card-foreground">Certifications & Awards</CardTitle>
                    <p className="text-muted-foreground font-medium">Recognition & Excellence</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon
                    return (
                      <div key={achievement.title} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-card-foreground">{achievement.title}</h5>
                          <p className="text-sm text-muted-foreground mb-1">{achievement.description}</p>
                          <Badge variant="outline" className="text-xs">
                            {achievement.type}
                          </Badge>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Volunteer & Leadership */}
          <Card
            className={`bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 ${
              isVisible ? "animate-fade-in-up" : ""
            }`}
            style={{ animationDelay: "400ms" }}
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl text-card-foreground">Volunteer & Leadership</CardTitle>
                  <p className="text-muted-foreground font-medium">Giving Back to the Community</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {volunteerWork.map((work, index) => (
                  <div key={work.title} className="space-y-2">
                    <h5 className="font-semibold text-card-foreground">{work.title}</h5>
                    <p className="text-sm text-muted-foreground text-pretty">{work.description}</p>
                    <div className="bg-background/50 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">
                        <strong className="text-card-foreground">Impact:</strong> {work.impact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
