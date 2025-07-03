import React from 'react'
import HeroCarousel from "@/components/Hero";
import Instructors from "@/components/Instructors";
import StatSection from '@/components/StatSection';
import FeatureSection from "@/components/FeatureSection";

const Page = () => {
  return (
      <main>
          <HeroCarousel />
          <StatSection />
          <FeatureSection />
          <Instructors />
      </main>
  )
}

export default Page