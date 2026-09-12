import Hero from "@/components/landing/Hero"
import Audiences from "@/components/landing/Audiences"
import Problem from "@/components/landing/Problem"
import Features from "@/components/landing/Features"
import Impact from "@/components/landing/Impact"
import Pricing from "@/components/landing/Pricing"
import FAQ from "@/components/landing/FAQ"
import FinalCta from "@/components/landing/FinalCta"
import Waitlist from "@/components/landing/Waitlist"
import Contact from "@/components/landing/Contact"
import config from "@/config"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Audiences />
      <Problem />
      <Features />
      <Impact />
      {config.features.pricing && <Pricing />}
      <FAQ />
      <FinalCta />
      {config.features.waitlist && <Waitlist />}
      <Contact />
    </>
  )
}
