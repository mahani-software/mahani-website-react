import React from 'react';
import {
    AcademicCapIcon,
    CodeBracketSquareIcon,
    BuildingOffice2Icon,
    UserGroupIcon
} from '@heroicons/react/24/outline';

const TrainingSection = () => {
    const trainings = [
        {
            icon: AcademicCapIcon,
            title: "Research & Innovation Training",
            description: "Master research ethics, the science of innovation, idea pitching, company registration, and turning research into viable products."
        },
        {
            icon: CodeBracketSquareIcon,
            title: "Software Development Training",
            description: "Practical, hands-on training in modern software engineering — from fundamentals to advanced system design and full-stack development."
        },
        {
            icon: BuildingOffice2Icon,
            title: "Business Management Systems",
            description: "Learn how to design, implement and manage powerful business management software systems that drive efficiency and growth."
        },
        {
            icon: UserGroupIcon,
            title: "Human Resource Management Systems",
            description: "Specialized training on building and operating modern HR management systems for organisations of any size."
        }
    ];

    return (
        <section id="training" className="mt-4 pt-3 pb-8 bg-white bg-blue-100">
            <div className="container mx-auto px-5 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-4">
                    <span className="inline-block text-red-500 font-semibold text-sm tracking-wider uppercase mb-3">
                        Capacity Building
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 font-nunito">
                        Training & Knowledge Transfer
                    </h2>
                    <p className="mt-4 text-zinc-500 text-lg">
                        We don’t just build software — we equip teams and organisations with the skills to innovate,
                        build, and manage technology independently.
                    </p>
                </div>

                {/* Training Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {trainings.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="flex gap-6 p-8 rounded-2xl bg-gray-50 border border-blue-400 bg-[linen]
                           hover:bg-white hover:shadow-lg hover:border-red-100 transition-all duration-300"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-2xl bg-red-500 flex items-center justify-center shadow-lg shadow-red-200">
                                        <Icon className="h-8 w-8 text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-zinc-800 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-zinc-500 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TrainingSection;