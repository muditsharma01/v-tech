import React, {useEffect} from 'react';

import qm from '../Assets/IMS/Quality-Management.webp'
import enviornment from '../Assets/IMS/environmental-compliance-video.jpg'
import health from '../Assets/IMS/health-and-safety-management-systems-648x324.jpg'

const Card = ({ title, description, image }) => (
    <h5
        
        className="flex flex-col items-center border border-gray-700 rounded-lg shadow-lg hover:bg-gray-700 dark:border-gray-400 dark:hover:bg-gray-600"
    >
        <img
            className="object-cover w-full h-48 md:h-40 rounded-t-lg md:w-full md:rounded-none md:rounded-tl-lg md:rounded-tr-lg"
            src={image}
            alt={title}
        />
        <div className="flex-1 p-4  text-white">
            <h5 className="mb-2 text-xl font-bold tracking-tight">{title}</h5>
            <p className="mb-3 text-sm">{description}</p>
        </div>
    </h5>
);

const Ims = () => {

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="relative bg-black p-5">
            <div className="relative mt-20 flex items-center justify-center text-white text-center">
                <h1 className="text-5xl font-bold">Integrated Management System (IMS)</h1>
            </div>

            <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-1 gap-10">
                <Card
                    title="Quality Management"
                    description="Quality management in the context of solar panel servicing involves the implementation of systematic processes to ensure that the products and services meet or exceed customer expectations. This includes adherence to industry standards, continuous improvement practices, and rigorous quality control measures throughout the design, engineering, and installation phases. Quality management systems aim to deliver reliable and high-performance solar solutions. "
                    image={qm}
                />

<Card
                    title="Environmental Management"
                    description="Environmental management focuses on minimizing the environmental impact of solar panel projects. This includes strategies to reduce carbon footprint, minimize waste generation, and ensure responsible sourcing of materials. Engineers and project managers implement environmentally friendly practices to contribute to sustainable and eco-friendly energy solutions."
                    image={enviornment}
                />

<Card
                    title="Health & Safety Management Systems"
                    description="Health and safety management systems are critical for ensuring the well-being of workers, clients, and the community during the various stages of solar panel projects. This involves the development and implementation of safety protocols, training programs, and risk assessments. Engineers and project teams prioritize a safe working environment to prevent accidents and promote the health and safety of all stakeholders involved in solar panel projects."
                    image={health}
                />

                



            </div>
        </div>
    );
};

export default Ims;
