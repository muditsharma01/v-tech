import React from 'react'
import img from '../Assets/index/hero-bg-one.jpg'

export default function About() {
  return (
    <section className="mt-32 lg:mt-72  bg-black bg-opacity-90 py-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9   container px-4 ">
            <div className="w-full  rounded-3xl overflow-hidden lg:relative lg:bottom-36 lg:left-0">
                <img src={img} className="w-full h-full object-cover " alt="bg"/>
            </div>
            <div className="space-y-4 text-white">
                <div className="text-xl text-theme-default">About Us</div>
                <div className="text-4xl md:text-4xl font-bold">V-TECH</div>
                <div className="text-lg">
                    Founded in 2009 as V-TECH Consultancy Services, we've embarked on a transformative journey marked by
                    an unwavering commitment to excellence. Over the past two decades, we've been dedicated to
                    delivering top-notch Services &amp; Solutions in Electrical, Civil, and Piping Infrastructure for
                    Residential, Commercial, and Industrial sectors. Today, we proudly unveil our renewed identity and
                    purpose, reflecting our enduring legacy and continued dedication to superior service.
                </div>
            </div>
        </div>

        <div className="flex flex-wrap gap-9 justify-between text-white container px-4  mt-12">
            <div className="text-4xl font-bold font-sans max-w-md">Bringing Effective Green
                Energy Solutions
            </div>
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-theme-default">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
                    </svg>
                    <div>info@vtech.com</div>
                </div>

                <div className="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-theme-default">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path>
                    </svg>
                    <div>+91 90987 97979</div>
                </div>
            </div>
        </div>
    </section>
  )
}
