import React, { useEffect } from 'react';
import qa from '../Assets/Quality-Assurance/qa.webp';
import plant from '../Assets/Quality-Assurance/plant-performance.jpg';
import construction from '../Assets/Quality-Assurance/Solar.jpg';
import solarmodule from '../Assets/Quality-Assurance/mw-solar-power-plants.jpg';
import equipment from '../Assets/Quality-Assurance/equipment.jpg';

const topics = [
  {
    title: 'Overview',
    description:
      'Ensure seamless coordination for project completion on time; our Project Manager integrates work between the Engineering and PMC teams and ensures there is no deviation from design, lapse in quality during execution, or reason to defer beyond schedule. It is verified that the work is completed according to the approved design and that all necessary tools are used to deliver the project.',
    image: qa,
  },
  {
    title: 'Plant Performance Assessment',
    description:
      "Plant performance assessment involves the ongoing monitoring and analysis of the solar power plant's operational efficiency. Engineers use data analytics and performance metrics to evaluate the output of the solar panels, ensuring that the system is operating optimally. This assessment helps identify and address any issues that may affect the overall performance and energy production of the solar plant.",
    image: plant,
  },
  {
    title: 'Construction Quality Assurance',
    description:
      'Construction quality assurance ensures that the installation of solar panel systems meets the highest standards. This phase involves rigorous inspections, quality control measures, and adherence to design specifications during the construction process. Engineers focus on the durability, safety, and precision of the installations to guarantee the long-term reliability of the solar power infrastructure.',
    image: construction,
  },
  {
    title: 'Solar Module Inspection',
    description:
      'Solar module inspection is a critical step in ensuring the functionality and durability of individual solar panels. Engineers inspect each module for defects, damage, or manufacturing issues that could impact performance. This meticulous examination helps identify and replace faulty modules, ensuring the overall efficiency and longevity of the solar panel system.',
    image: solarmodule,
  },
  {
    title: 'Equipment and Balance of System Components',
    description:
      'The evaluation of equipment and balance of system (BOS) components involves a comprehensive review of all supporting elements beyond the solar panels. This includes inverters, wiring, mounting structures, and other crucial components. Engineers assess the quality, compatibility, and efficiency of these elements to guarantee the smooth operation of the entire solar power system.',
    image: equipment,
  },
];

const QualityAssurance = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-gray-900 p-5 min-h-screen">
      <div className="relative mt-20 flex items-center justify-center text-white text-center">
        <div className="bg-gray-800 bg-opacity-70 p-4 rounded-md">
          <h1 className="text-5xl font-extrabold tracking-tight">Ensuring Quality with Precision</h1>
        </div>
      </div>

      <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="relative overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              className="object-cover w-full h-64 md:h-48 lg:h-64"
              src={topic.image}
              alt={topic.title}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-70 transition-opacity duration-300 opacity-0 hover:opacity-100">
              <h5 className="text-xl font-bold mb-2">{topic.title}</h5>
              <p className="text-sm">{topic.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QualityAssurance;
