"use client"

import { useEffect, useRef, useState } from "react"
import { Users, UserCheck, GraduationCap, Droplets } from "lucide-react"

const stats = [
  {
    id: 1,
    value: 86,
    label: "የምእመናን (የአባላት) ቁጥር",
    englishLabel: "Number of Members",
    icon: Users,
  },
  {
    id: 2,
    value: 2,
    label: "የአገልጋይ ካህናት ቁጥር",
    englishLabel: "Number of Serving Priests",
    icon: UserCheck,
  },
  {
    id: 3,
    value: 9,
    label: "የሰንበት ተማሪዎች ቁጥር",
    englishLabel: "Sunday School Students",
    icon: GraduationCap,
  },
  {
    id: 4,
    value: 0,
    label: "በዓመቱ የተጠመቁ ምእመናን",
    englishLabel: "Members Baptized This Year",
    icon: Droplets,
  },
]

function Counter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, value, duration])

  return (
    <div ref={ref} className="text-4xl font-bold text-primary md:text-5xl">
      {count}
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 md:text-4xl">አኃዛዊ መረጃዎች</h2>
          <p className="text-lg text-muted-foreground">Statistical Information</p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="text-center p-6 rounded-lg bg-background shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
              </div>

              <Counter value={stat.value} />

              <div className="mt-4">
                <h3 className="text-lg font-semibold text-foreground mb-2 font-serif">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">{stat.englishLabel}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 p-6 rounded-lg bg-primary/5 border border-primary/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Years Serving</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Families Served</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">52</div>
              <div className="text-sm text-muted-foreground">Services Per Year</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
