import FaqSection from '@/components/home/FaqSection';
import HeroSection from '@/components/home/HeroSection';
import StoriesSection from '@/components/home/StoriesSection';
import React from 'react'
function Home() {
   
  return (
    <div>
        <HeroSection/>
        <StoriesSection/>
        <FaqSection/>
    </div>
  )
}

export default Home