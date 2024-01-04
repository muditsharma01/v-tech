import React,{useEffect} from 'react';

import strategyImage from '../Assets/ESG/sm-photo.png';
import riskImage from '../Assets/ESG/risk.jpeg';
import impactImage from '../Assets/ESG/impact.jpg';

const Card = ({ title, description, image }) => (
  <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img
      className="object-cover w-full h-48 md:h-48 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
      src={image}
      alt={title}
    />
    <div className="flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
    </div>
  </div>
);

const Esg = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="relative bg-black p-5">
      <div className="relative mt-20 flex items-center justify-center text-white text-center">
        <h1 className="text-5xl font-bold">Environmental, Social, and Governance (ESG)</h1>
      </div>

      <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <Card
          title="Strategy Development"
          description="Strategy development in the context of Environmental, Social, and Governance (ESG) involves formulating a comprehensive plan to integrate sustainable and responsible practices into the organization's core operations."
          image={strategyImage}
        />

        <Card
          title="Risk Management"
          description="ESG risk management is the process of identifying, assessing, and mitigating potential risks associated with environmental, social, and governance factors."
          image={riskImage}
        />

        <Card
          title="Impact Assessment"
          description="Impact assessment within the ESG framework involves evaluating the consequences of business activities on the environment, society, and governance structures."
          image={impactImage}
        />
      </div>
    </div>
  );
};

export default Esg;
