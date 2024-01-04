import React from 'react'
import bglogo from '../Assets/index/hero-bg-one.jpg'
export default function HeroSection() {
  return (
    <section className="relative h-screen rounded-b-3xl overflow-hidden">
    <img src={bglogo} className="w-full h-full object-cover" alt="hersec bg" />

    <div className="absolute text-9xl top-24 text-transparent right-0 font-sans opacity-30 md:opacity-40" style={{ WebkitTextStroke: '1px white', writingMode: 'vertical-rl', fontSize: '170px' }}>
      V-TECH
    </div>

    <div className="absolute top-0 w-full h-full bg-opacity-60 bg-black py-12">
      <div className="container px-4 mx-auto flex items-end h-full">
        <div className="text-white space-y-3 md:space-y-5 mb-12">
          <div className="text-4xl md:text-6xl font-bold md:max-w-4xl font-sans">
            <span className="text-theme-default">Solar </span> <span className="underline">Design</span> &amp; Engineering Excellence Partner
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="text-lg text-gray-300">
                Optimize your solar projects with us. We specialize in efficient design and engineering solutions for EPCs, ensuring timely and budget-friendly success. Partner with us for streamlined operations and maximum ROI.
              </div>
              <a href="https://vgtechtailtwo.netlify.app/">
                <div className="px-9 rounded-3xl py-2 bg-theme-default text-white hover:bg-theme-dark inline-block mt-6">
                  Know More
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}
