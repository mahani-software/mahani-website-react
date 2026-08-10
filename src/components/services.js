import React from 'react';
import {
  CodeBracketIcon,
  CloudIcon,
  ServerIcon,
  DocumentTextIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';

const ServicesSection = () => {
  const servicesData = [
    {
      icon: CodeBracketIcon,
      title: "Backend Systems Development",
      description: "Custom APIs and seamless integration with REST or GraphQL for robust, scalable backend solutions."
    },
    {
      icon: CloudIcon,
      title: "DevOps Engineering",
      description: "CI/CD pipelines, cloud infrastructure (GCP, AWS, DigitalOcean), Kubernetes, Docker & Terraform."
    },
    {
      icon: ServerIcon,
      title: "Servers Monitoring & Maintenance",
      description: "Proactive monitoring, performance optimization, and reliable management of server infrastructure."
    },
    {
      icon: DocumentTextIcon,
      title: "Software Systems Architecting",
      description: "Clear, well-documented architecture that reduces risk and accelerates development."
    },
    {
      icon: ComputerDesktopIcon,
      title: "Desktop Software Development",
      description: "Cross-platform desktop applications using Electron and modern technologies."
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "React & React Native Apps",
      description: "Beautiful, high-performance web and mobile applications built with React and React Native."
    }
  ];

  return (
    <section id="services" className="pt-2 pb-6 bg-gray-50 bg-[linen]">
      <div className="container mx-auto px-5 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-full mx-auto mb-10">
          <span className="inline-block text-red-500 font-semibold text-sm tracking-wider uppercase mb-3">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 font-nunito">
            Our Services
          </h2>
          <p className="mt-4 text-zinc-500 text-lg">
            End-to-end software engineering services designed to help businesses of every size move faster and scale confidently.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-[brown] 
                           hover:shadow-xl hover:border-red-100 hover:-translate-y-1 
                           transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6
                                group-hover:bg-red-500 transition-colors duration-300">
                  <Icon className="h-8 w-8 text-red-500 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold text-zinc-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;