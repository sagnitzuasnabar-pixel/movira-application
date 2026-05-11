import React from 'react'
import { Navbar } from './components/navbar'
import { Hero } from './components/hero'
import { Features } from './components/features'
import { Trending } from './components/trending'
import { FAQ } from './components/faq'
import { Footer } from './components/footer'

export function Home() {
  return (
    <div>
      <Hero/>
      <Navbar />
      <Trending/>
      <Features/>
      <FAQ/>
      <Footer/>
    </div>
    
  )
}
