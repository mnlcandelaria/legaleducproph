import React from 'react'
import HeroCarousel from "@/components/Home/Hero";
import Instructors from "@/components/Home/Instructors";
/// import StatSection from '@/components/Home/StatSection';
import FeatureSection from "@/components/Home/FeatureSection";
import ContactSection from "@/components/Home/ContactSection";
import SuccessStories from "@/components/Home/SuccessStories";
import MissionVision from '@/components/Home/MissionVision';

const Page = async () => {
  return (
    <main>
      <HeroCarousel />
      {/* <StatSection /> */}
      <FeatureSection />
      <Instructors />
      <MissionVision />
      <ContactSection />
      <SuccessStories />
    </main>
  )
}

export default Page


