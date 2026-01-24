import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { ServicesSection } from "@/components/services-section"
import { StatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/cta-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { VipalSection } from "@/components/vipal-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <StatsSection />
      <ServicesSection />
      <ContactSection />
      <AboutSection />
      <VipalSection />
      <CTASection />
      <Footer />
    </main>
  )
}
