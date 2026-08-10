import React from 'react';
import redsaasLogo from '../images/redsaas-logo.png';

const WorkSection = () => {
  const projects = [
    {
      title: "Redsaas",
      description: "An all-in-one networked Software-as-a-Service platform providing scalable and integrated software tools for businesses across Africa and beyond.",
      link: "https://africa.redsaas.tech",
      image: redsaasLogo,
      tag: "SaaS Platform"
    }
  ];

  return (
    <section id="work" className="pt-4 pb-8 bg-gray-50">
      <div className="container mx-auto px-5 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-4">
          <span className="inline-block text-red-500 font-semibold text-sm tracking-wider uppercase mb-3">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 font-nunito">
            Featured Projects
          </h2>
          <p className="mt-4 text-zinc-500 text-lg">
            Real solutions we’ve built that are creating impact.
          </p>
        </div>

        {/* Projects */}
        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border-2 border-blue-200
                         hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 bg-gray-50 flex items-center justify-center p-10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-40 w-auto object-contain"
                />
              </div>

              <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-zinc-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed mb-6">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-500 font-semibold hover:gap-3 transition-all"
                >
                  Visit Project
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;