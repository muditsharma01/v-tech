import React,{useEffect} from 'react';

import overviewImage from '../Assets/Project-Management/project-management-skills.jpg.webp';
import schedule from '../Assets/Project-Management/controlling-project-schedule.png'
import procurement from '../Assets/Project-Management/Procurement_life_cycle.jpeg'
import resource from '../Assets/Project-Management/resource.jpg'
import budget from '../Assets/Project-Management/budget.jpg'
import asset from '../Assets/Project-Management/asset.jpg'
import due from '../Assets/Project-Management/due-diligence-service-500x500.webp'


const Card = ({ title, description, image }) => (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover w-full h-48 md:h-48 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        style={{ objectFit: 'cover' }}
        src={image}
        alt={title}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
  



const ProjectManagement = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="relative bg-black p-5">
            <div className="relative mt-20 flex items-center justify-center text-white text-center">
                <h1 className="text-5xl font-bold">Project Management</h1>
            </div>

            <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                <Card
                    title="Overview"
                    description="Project management is a comprehensive approach to planning, executing, and overseeing a project from its initiation to completion. This involves coordinating various tasks, resources, and stakeholders to achieve specific goals within a defined timeframe. The overview section provides a holistic understanding of the project management process and its significance in ensuring successful project delivery."
                    image={overviewImage}
                />

                <Card
                    title="Scheduling and Controlling"
                    description="Scheduling and controlling are integral aspects of project management. Scheduling involves creating a timeline and assigning resources to specific tasks, ensuring that the project progresses according to plan. Controlling involves monitoring and adjusting project activities to ensure they align with the project schedule and objectives. Effective scheduling and controlling contribute to the timely and efficient completion of projects."
                    image={schedule}
                />

                <Card
                    title="Procurement Management"
                    description="Procurement management involves the processes of acquiring goods, services, or works from external sources to fulfill project requirements. This includes planning, sourcing, contracting, and controlling procurement activities. Efficient procurement management ensures that the necessary resources are obtained in a cost-effective and timely manner, contributing to the overall success of the project."
                    image={procurement}
                />

                <Card
                    title="Resource Management"
                    description="Resource management in project management refers to the strategic allocation and utilization of resources, including personnel, equipment, and materials. Effectively managing resources ensures that the project team is adequately equipped to perform their tasks, leading to optimized project performance and successful outcomes."
                    image={resource}
                />

                <Card
                    title="Budget Management"
                    description="Budget management is the process of planning, estimating, and controlling the financial aspects of a project. It involves creating a budget, tracking expenditures, and ensuring that the project stays within financial constraints. Successful budget management is crucial for achieving project goals while maintaining financial sustainability."
                    image={budget}
                />

                <Card
                    title="Asset Management"
                    description="Asset management involves the systematic planning and control of physical and non-physical assets throughout their lifecycle. In the context of project management, this includes identifying, acquiring, and managing assets essential to project success. Effective asset management contributes to project efficiency, reliability, and long-term sustainability."
                    image={asset}
                />

                <Card
                    title="Due Diligence"
                    description="Due diligence in project management refers to the thorough investigation and analysis conducted before making critical decisions or entering into agreements. This involves assessing risks, opportunities, and potential challenges associated with the project. Due diligence ensures informed decision-making and reduces uncertainties throughout the project lifecycle."
                    image={due}
                />
            </div>
        </div>
    );
};

export default ProjectManagement;
