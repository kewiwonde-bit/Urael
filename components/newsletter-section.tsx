"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Send, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubscribed(true)
    setIsLoading(false)
    setEmail("")
  }

  if (isSubscribed) {
    return (
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center border-primary/20">
            <CardContent className="pt-8">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <Check className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
              <p className="text-muted-foreground mb-4">
                You have successfully subscribed to our newsletter. You will receive updates about church events and
                news.
              </p>
              <p className="text-sm text-muted-foreground font-serif">
                አመሰግናለሁ! የቤተ ክርስቲያናችንን ዜናዎች እና መረጃዎች በኢሜል ይደርስዎታል።
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto border-primary/20">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-primary/10">
                <Mail className="h-8 w-8 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-foreground font-serif">
              አዳዲስ መረጃዎች እንዲደርስዎ የኢሜል አድራሻዎን ያስገቡ
            </CardTitle>
            <CardDescription className="text-lg">
              Subscribe to receive the latest church news and updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 text-base"
                  required
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Subscribing...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Subscribe
                    </div>
                  )}
                </Button>
              </div>
            </form>

            <div className="mt-6 p-4 rounded-lg bg-background border border-border">
              <p className="text-sm text-muted-foreground text-center">
                <strong className="text-foreground font-serif">
                  የጌታችን የመድኃኒታችን ኢየሱስ ክርስቶስ ጸጋና በረከት ከሁላችን ጋር ይሁን !
                </strong>
              </p>
              <p className="text-xs text-muted-foreground text-center mt-2">
                May the grace and blessing of our Lord and Savior Jesus Christ be with us all!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
