import React from 'react';
import { CodeBracketIcon, CloudIcon, ServerIcon, DocumentTextIcon, ComputerDesktopIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const ServicesSection = () => {
  const servicesData = [
    {
      icon: <CodeBracketIcon className="h-12 w-12 text-red-500" />,
      title: "Backend Systems Development",
      description: "Custom APIs and seamless integration with REST or GraphQL APIs for robust backend solutions."
    },
    {
      icon: <CloudIcon className="h-12 w-12 text-red-500" />,
      title: "DevOps Engineering",
      description: "CI/CD pipelines, cloud services (GCP, AWS, DigitalOcean), Kubernetes, Docker, Terraform, and more."
    },
    {
      icon: <ServerIcon className="h-12 w-12 text-red-500" />,
      title: "Servers Monitoring & Maintenance",
      description: "Comprehensive management of server-side complexities, protocols, and backend technologies."
    },
    {
      icon: <DocumentTextIcon className="h-12 w-12 text-red-500" />,
      title: "Software Systems Architecting",
      description: "Detailed, documented architectural plans to streamline your software development process."
    },
    {
      icon: <ComputerDesktopIcon className="h-12 w-12 text-red-500" />,
      title: "Desktop Software Development",
      description: "Cross-platform desktop apps using Electron-JS and GTK, with real-time WebSocket dashboards."
    },
    {
      icon: <DevicePhoneMobileIcon className="h-12 w-12 text-red-500" />,
      title: "React/Native Frontend Apps",
      description: "Dynamic, lightweight web and mobile apps using React, React Native, and Redux."
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h5 className="text-red-500 font-semibold text-lg">What We Do</h5>
          <h4 className="text-3xl font-bold text-zinc-700 mt-2">Our Services</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-zinc-700 text-center">{service.title}</h3>
              <p className="text-zinc-500 text-center mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;