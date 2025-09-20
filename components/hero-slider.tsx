"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import React from "react";
export function Button({ children, ...props }) {
  return (
    <button {...props}>
      {children}
    </button>
  );
}
const slides = [
  {
    id: 1,
    image: "/ethiopian-orthodox-church-interior-with-golden-dec.jpg",
    title: "እንኳን ወደ ደብረ ጽጌ ቅዱስ ዑራኤል",
    subtitle: "ቤተ ክርስቲያን ድረ ገጽ በሰላም መጡ !",
    language: "amharic",
  },
  {
    id: 2,
    image: "/ethiopian-orthodox-church-community-gathering-with.jpg",
    title: "Welcome To Newcastle Debre Tsige Kidus Urael",
    subtitle: "Ethiopian Orthodox Tewahdo Church!",
    language: "english",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 flex h-full items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <div className="mx-auto max-w-4xl">
                <h1
                  className={`mb-4 text-4xl font-bold text-white md:text-6xl lg:text-7xl ${
                    slide.language === "amharic" ? "font-serif" : "font-sans"
                  }`}
                  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
                >
                  {slide.title}
                </h1>
                <p
                  className={`text-xl text-white md:text-2xl lg:text-3xl ${
                    slide.language === "amharic" ? "font-serif" : "font-sans"
                  }`}
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
                >
                  {slide.subtitle}
                </p>
                <div className="mt-8 inline-block rounded-lg border-2 border-primary bg-primary/20 px-6 py-3 backdrop-blur-sm">
                  <div className="h-1 w-16 bg-primary rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 z-20 h-12 w-12 -translate-y-1/2 rounded-full bg-black/20 text-white backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 z-20 h-12 w-12 -translate-y-1/2 rounded-full bg-black/20 text-white backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentSlide ? "bg-primary scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
