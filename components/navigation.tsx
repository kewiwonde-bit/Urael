"use client"

import { useState } from "react"
import { Menu, Home, Users, Calendar, Info, Phone } from "lucide-react"
// Update the import path if Button is located elsewhere, for example:
import { Button } from "./ui/button"
// Or, if you have not created the Button component yet, create 'components/ui/button.tsx' and export Button from there.
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import Image from "next/image"

const navigationItems = [
  { name: "ቀዳሚ ገጽ", href: "#", icon: Home, english: "Home" },
  { name: "ቤተ-ክርስቲያናችን", href: "#about", icon: null, english: "Our Church" },
  { name: "አገልግሎት", href: "#services", icon: Users, english: "Services" },
  { name: "መርሐ ግብራት", href: "#programs", icon: Calendar, english: "Programs" },
  { name: "ስለ እኛ", href: "#about", icon: Info, english: "About Us" },
  { name: "ያግኙን", href: "#contact", icon: Phone, english: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary overflow-hidden">
            <Image
              src="/st-urael-icon.png"
              alt="St. Urael Icon"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          </div>
          <div className="hidden md:block">
            <h1 className="text-lg font-bold text-foreground">በኒውካስል ደብረ ጽጌ ቅዱስ ዑራኤል የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተክርስቲያን</h1>
            <p className="text-sm text-muted-foreground">Debre Tsige Kidus Urael Church</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center space-x-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {item.icon && <item.icon className="h-4 w-4" />}
              <span className="hidden xl:inline">{item.name}</span>
              <span className="xl:hidden">{item.english}</span>
            </a>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-6">
              <div className="text-center pb-4 border-b">
                <h2 className="text-lg font-bold">ደብረ ጽጌ ቅዱስ ዑራኤል </h2>
                <p className="text-sm text-muted-foreground">Debre Tsige Kidus Urael Church</p>
              </div>
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon && <item.icon className="h-5 w-5" />}
                  <div>
                    <div>{item.name}</div>
                    <div className="text-xs text-muted-foreground">{item.english}</div>
                  </div>
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
