import React from 'react';
// import flowswitchImage from '../images/flowswitch-screenshot.png';
// import redsaasImage from '../images/redsaas-screenshot.png';
import flowswitchLogo from '../images/flowswitch-logo.png';
import redsaasLogo from '../images/redsaas-logo.png';

const WorkSection = () => {
  const projects = [
    {
      title: "FlowSwitch",
      description: "A platform connecting merchants and agents for seamless business operations. Companies use FlowSwitch to verify and manage sales agents, especially in unbanked communities.",
      link: "https://www.flowswitchapi.com",
      image: flowswitchLogo,
    },
    {
      title: "RedSaaS",
      description: "An all-in-one networked Software as a Service solution, providing scalable and integrated software tools for businesses worldwide.",
      link: "https://www.redsaas.tech",
      image: redsaasLogo,
    },
  ];

  return (
    <section id="work" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h5 className="text-red-500 font-semibold text-lg">Our Work</h5>
          <h4 className="text-3xl font-bold text-zinc-700 mt-2">Featured Projects</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              {/* <h3 className="text-xl font-bold text-zinc-700">{project.title}</h3> */}
              <p className="text-zinc-500 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-red-500 font-semibold hover:text-red-400"
              >
                Visit Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;