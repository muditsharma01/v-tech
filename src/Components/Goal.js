import React from 'react'
import idea from '../Assets/index/idea.png'
import planet from "../Assets/index/planet-earth.png"
import excellence from '../Assets/index/excellence.png'

function Goal() {
  return (
    <section className="container mt-32  md:pt-32">
        <div className="text-center text-4xl text-theme-dark">
            Our goal
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9  mt-12">
            <div className="rounded-3xl p-6">
                <img src={idea} className="w-12" alt=""/>
                <div className="text-4xl mt-6">Innovation</div>
                <div className="mt-4">
                    At V-TECH , innovation is not just a goal; it's a way of thinking. We continuously explore
                    cutting-edge solutions to meet the evolving needs of our clients.
                </div>
            </div>

            <div className="rounded-3xl p-6">
                <img src={planet} className="w-12" alt=""/>
                <div className="text-4xl mt-6">Sustainability</div>
                <div className="mt-4">
                    Our dedication to sustainability is at the heart of everything we do. We strive to be pioneers in
                    delivering renewable energy solutions that make a meaningful impact on the environment.
                </div>
            </div>

            <div className="rounded-3xl p-6">
                <img src={excellence} className="w-12" alt=""/>
                <div className="text-4xl mt-6">Excellence</div>
                <div className="mt-4">
                    With a foundation built on excellence, our seasoned team brings unmatched expertise and precision to
                    every project we undertake.
                </div>
            </div>
        </div>
    </section>
  )
}

export default Goal