import React from 'react'
import HeroCarousel from "@/components/Hero";
import Instructors from "@/components/Instructors";
import StatSection from '@/components/StatSection';
import FeatureSection from "@/components/FeatureSection";
import ContactSection from "@/components/ContactSection";

const Page = () => {
  return (
      <main>
          <HeroCarousel />
          <StatSection />
          <FeatureSection />
          <Instructors />
          <ContactSection />
      </main>
  )
}

export default Page


