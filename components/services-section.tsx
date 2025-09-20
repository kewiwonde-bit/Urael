"use client"

import { Droplets, Heart, Play as Pray, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    id: 1,
    title: "ሥርዓተ ጥምቀት",
    englishTitle: "Baptism Service",
    description: "የክርስትና እምነት መግቢያ ሥርዓት",
    englishDescription: "The sacred ritual of entering the Christian faith",
    icon: Droplets,
    href: "/baptism",
  },
  {
    id: 2,
    title: "ሥርዓተ ጋብቻ",
    englishTitle: "Wedding Service",
    description: "በቅድስት ቤተ ክርስቲያን የሚካሄድ የጋብቻ ሥርዓት",
    englishDescription: "Sacred marriage ceremony in the holy church",
    icon: Heart,
    href: "/wedding",
  },
  {
    id: 3,
    title: "ጸሎተ ፍትሐት",
    englishTitle: "Prayer Service",
    description: "ለተለያዩ ፍላጎቶች የሚደረግ ልዩ ጸሎት",
    englishDescription: "Special prayers for various needs and occasions",
    icon: Pray,
    href: "/prayer",
  },
  {
    id: 4,
    title: "በጸሎት አስቡን",
    englishTitle: "Prayer Requests",
    description: "የጸሎት ልመና እና መንፈሳዊ ድጋፍ",
    englishDescription: "Prayer requests and spiritual support",
    icon: Users,
    href: "/prayer-requests",
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 md:text-4xl">ለቤተ ክርስቲያን መንፈሳዊ አገልግሎት ፈላጊዎች</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            For Those Seeking Spiritual Services from Our Church
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-border hover:border-primary/50"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground font-serif group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm font-medium">{service.englishTitle}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-2 font-serif">{service.description}</p>
                <p className="text-xs text-muted-foreground mb-4">{service.englishDescription}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors duration-300 bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-lg bg-card border border-border">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-foreground mb-2">Need Spiritual Guidance?</h3>
              <p className="text-sm text-muted-foreground">
                Contact our priests for personal consultation and spiritual support
              </p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
