import React from 'react'
import img1 from '../Assets/index/photo-1497435334941-8c899ee9e8e9';
import img2 from '../Assets/index/photo-1594818379496-da1e345b0ded';
import img3 from '../Assets/index/photo-1542621323-be453184db76';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <>

<section className="container px-4 mt-32">
      <div className="text-lg text-theme-dark">WHO WE ARE</div>
      <p className="mt-3 text-4xl text-theme-dark font-bold max-w-2xl">
        V-TECH offers innovative solar solutions tailored for both businesses and homeowners.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 mt-20">
        <Link to="/services/design-and-engineering" className="relative rounded-3xl overflow-hidden h-72 shadow-2xl transition-transform transform hover:scale-x-95">
          <img src={img1} className="h-full w-full object-cover" alt="" />
          <div className="rounded-3xl absolute bottom-0 w-full text-white p-4 md:p-9 bg-gradient-to-t from-black from-40%">
            <div className="text-lg md:text-2xl font-bold">Design and Engineering</div>
          </div>
        </Link>

        <Link to="/services/quality-assurance" className="relative rounded-3xl overflow-hidden h-72 shadow-2xl transition-transform transform hover:scale-x-95">
          <img src={img2} className="h-full w-full object-cover" alt="" />
          <div className="rounded-3xl absolute bottom-0 w-full text-white p-4 md:p-9 bg-gradient-to-t from-black from-40%">
            <div className="text-lg md:text-2xl font-bold">Quality Assurance</div>
          </div>
        </Link>

        <Link to="/services/ims" className="relative rounded-3xl overflow-hidden h-72 shadow-2xl transition-transform transform hover:scale-x-95">
          <img src={img3} className="h-full w-full object-cover" alt="" />
          <div className="rounded-3xl absolute bottom-0 w-full text-white p-4 md:p-9 bg-gradient-to-t from-black from-40%">
            <div className="text-lg md:text-2xl font-bold">Integrated Management System (IMS)</div>
          </div>
        </Link>

        <Link to="/services/project-management" className="relative rounded-3xl overflow-hidden h-72 shadow-2xl transition-transform transform hover:scale-x-95">
          <img src={img2} className="h-full w-full object-cover" alt="" />
          <div className="rounded-3xl absolute bottom-0 w-full text-white p-4 md:p-9 bg-gradient-to-t from-black from-40%">
            <div className="text-lg md:text-2xl font-bold">Project Management</div>
          </div>
        </Link>

        <Link to="/services/esg" className="flex justify-center align-center rounded-3xl overflow-hidden h-72 shadow-2xl transition-transform transform hover:scale-x-95 ">
          <img src={img2} className="h-full w-full object-cover" alt="" />
          <div className="rounded-3xl absolute bottom-0 w-full text-white p-4 md:p-9 bg-gradient-to-t from-black from-40%">
            <div className="text-lg md:text-2xl font-bold">ENVIRONMENTAL, SOCIAL AND GOVERNANCE (ESG)</div>
          </div>
        </Link>
      </div>
    </section>
    
    </>
  )
}

export default Services