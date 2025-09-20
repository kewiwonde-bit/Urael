// app/page.tsx
import { HeroSlider } from "../components/hero-slider"
import { StatsSection } from "../components/stats-section"
import { ServicesSection } from "../components/services-section"
import { NewsSection } from "../components/news-section"
import { NewsletterSection } from "../components/newsletter-section"
import { Navigation } from "../components/navigation"
import { Footer } from "../components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSlider />
        <StatsSection />
        <ServicesSection />
        <NewsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}

