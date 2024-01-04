import React,{useEffect} from 'react';
import bannerImg from '../Assets/Design-and-engineering/Design-and-engineering-banner.webp';
import overviewImg from '../Assets/Design-and-engineering/overview.webp';
import feasibilityImg from '../Assets/Design-and-engineering/feasibility.jpg';
import electricalImg from '../Assets/Design-and-engineering/electrical.jpg';
import civilStructuralImg from '../Assets/Design-and-engineering/civil-structural-design-services.jpg';
import detailed from '../Assets/Design-and-engineering/detailed.webp'
import power from '../Assets/Design-and-engineering/power.webp'
import flood from '../Assets/Design-and-engineering/flood.webp'
import owner from '../Assets/Design-and-engineering/owner.jpeg'

const Card = ({ title, description, image }) => (
    <a
        href="#"
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
    </a>
);

const DesignAndEngineering = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="relative bg-black p-5">
            <div className="relative mt-20 flex items-center justify-center text-white text-center">
                <h1 className="text-5xl font-bold">Design And Engineering</h1>
            </div>

            <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                <Card
                    title="Overview"
                    description="Design and engineering play a crucial role in the development of solar panels, as they are essential components in the transition towards a more sustainable and eco-friendly energy source. Solar panels convert sunlight into usable electricity through the use of photovoltaic (PV) cells, which are made up of semiconductor materials such as silicon."
                    image={overviewImg}
                />

                <Card
                    title="Feasibility Studies"
                    description="Feasibility studies are a critical phase in the design and engineering of solar panel projects. These studies assess the viability and potential challenges associated with implementing solar energy systems. Engineers analyze factors such as geographical location, available sunlight, and local regulations to determine the feasibility of solar panel installations."
                    image={feasibilityImg}
                />

                <Card
                    title="Electrical Engineering"
                    description="Electrical engineering is a key discipline in the design of solar panels. Engineers specializing in electrical systems work on developing the electrical components that allow solar panels to generate and transmit electricity efficiently. This includes designing circuits, inverters, and other electrical systems that optimize the conversion of solar energy into usable power."
                    image={electricalImg}
                />

                <Card
                    title="Civil and Structural Engineering"
                    description="Civil and structural engineering are essential components in the development of solar panel projects. These engineers focus on the design and construction of the physical infrastructure needed to support solar panels, including support structures, foundations, and mounting systems."
                    image={civilStructuralImg}
                />

                <Card
                    title="Detailed Engineering"
                    description="Our team prepares the designs, project engineering and execution drawings in conjunction to the technical specifications, design criteria and procedures, best of engineering codes and standard engineering practices for a utility scale solar PV plant."
                    image={detailed}
                />

<Card
                    title="Power System Studies"
                    description="Power system studies in the context of solar panel projects encompass a thorough examination of electrical systems. Engineers conduct studies to analyze power flow, short circuits, and other electrical phenomena to ensure the safe and reliable integration of solar energy into existing power grids. These studies help design systems that efficiently generate, transmit, and distribute solar-generated electricity."
                    image={power}
                />

<Card
                    title="Flood Risk Assessment"
                    description="Flood risk assessment is a crucial step in ensuring the resilience and durability of solar panel installations. Engineers assess the site's vulnerability to floods, considering factors such as terrain, proximity to water bodies, and historical flood data. The goal is to design solar panel systems that can withstand potential flood events, minimizing damage and ensuring long-term functionality."
                    image={flood}
                />

                <Card
                    title="Owner’s Engineer"
                    description="The role of an Owner’s Engineer involves representing the project owner's interests throughout the solar panel development process. This includes overseeing the design and construction phases, ensuring compliance with specifications, and verifying that the project meets quality standards. Owner’s Engineers act as a liaison between the project owner and other stakeholders, providing expertise and guidance to ensure successful project outcomes."
                    image={owner}
                />
            </div>
        </div>
    );
};

export default DesignAndEngineering;
