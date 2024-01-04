import React from 'react'
import Logo from '../Assets/index/Logo REV 06.svg'

function Footer() {
  return (
    <footer className=" py-6 bg-theme-700 mt-32 border-t border-theme-default  bg-black">
        <div className=" container px-4 text-white mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-9 ">
                <ul className="space-y-4 text-xl">
                    <li className="text-2xl text-theme-default font-bold">Company</li>
                    <li><a href="https://vgtechtailtwo.netlify.app/"> Home</a></li>
                    <li><a href="https://vgtechtailtwo.netlify.app/"> About </a></li>
                   
                </ul>
                <ul className="space-y-4 text-xl">
                    <li className="text-2xl text-theme-default font-bold">Read</li>
                    <li><a href="https://vgtechtailtwo.netlify.app/"> Term and conditions</a></li>
                 
                </ul>
                <ul className="space-y-4 text-xl">
                    <li className="text-2xl text-theme-default font-bold">Social</li>
                    <li><a href="https://vgtechtailtwo.netlify.app/">Facebook</a></li>
                    <li><a href="https://vgtechtailtwo.netlify.app/"> Instagram</a></li>
                    <li><a href="https://vgtechtailtwo.netlify.app/"> Youtube</a></li>
                </ul>
                <ul className="space-y-6 text-xl">

                    <li className="text-2xl text-theme-default font-bold">Address</li>
                    <div className="text-gray-400">
                        Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016
                    </div>

                    <li className="text-2xl text-theme-default font-bold">Contact</li>
                    <div className="space-y-4 text-gray-400">
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
                </ul>
            </div>

            <div className="flex flex-wrap gap-9 justify-between mt-12">
                <div className="w-16">
                    <img src={Logo} className="w-full h-full object-contain" alt="logo pic"/>
                </div>
                <div>Copyright © 2023 V-TECH</div>
            </div>
        </div>
    </footer>
  )
}

export default Footer