import React from 'react'
import img from '../Assets/index/hero-bg-one.jpg'

function Know() {
  return (
    <section className="container px-4  mt-32 space-y-9">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:h-96">
            <div className="space-y-4">
                <div className=" text-lg  text-theme-dark  ">
                    Know More
                </div>
                <p className="mt-3 text-4xl text-theme-dark font-bold max-w-xl">
                    DESIGN &amp; ENGINEERING
                </p>

                <div className="text-lg">
                    V-TECH specializes in conducting thorough feasibility studies to assess the viability of
                    solar projects. Our team of highly skilled electrical engineers offers tailored solutions for a wide
                    spectrum of solar installations. In collaboration with our civil and structural engineering experts,
                    we design robust and efficient structures that stand as a testament to our commitment to quality and
                    durability. Our detailed engineering services go beyond conventional practices, prioritizing
                    precision in optimizing system layouts and configurations to maximize energy output and ensure
                    long-term performance.
                </div>
            </div>

            <div className="relative rounded-3xl bg-opacity-60 h-56 lg:h-full border-2 border-theme-default">
                <div className="absolute md:top-5 md:right-5 w-full h-full rounded-3xl overflow-hidden ">
                    <img src={img} className="w-full h-full object-cover" alt="bg"/>
                </div>
            </div>
        </div>


    </section>
  )
}

export default Know