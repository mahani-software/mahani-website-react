/* eslint-disable */
import React from 'react';
import aboutUsIllustration from "../images/mahani-office.jpeg";

const About = () => {
    return (
        <section id="about" className="py-10 bg-white">
            <div className="container mx-auto px-5 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">

                    {/* Image */}
                    <div className="lg:w-[60%]">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src={aboutUsIllustration}
                                alt="About us"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-1/2">
                        <span className="inline-block text-red-500 font-semibold text-sm tracking-wider uppercase mb-3">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 font-nunito leading-tight mb-6">
                            Your Goal is Our Achievement
                        </h2>

                        <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                            Whether you need a custom software solution or want to automate and scale your business,
                            we design and build systems that turn your goals into measurable results. From concept
                            to deployment, we support you every step of the way.
                        </p>

                        <div className="space-y-5">
                            {[
                                "Ready-to-deploy systems and fully custom SaaS platforms for startups to large multinational organisations.",
                                "Deep expertise in the most technical aspects of software engineering and business automation.",
                                "Training in research and innovation — covering research ethics, the science of innovation, pitching, company registration, and business automation.",
                                "A culture built on integrity, trust, and excellence."
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                                            <svg className="w-3.5 h-3.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-zinc-600 leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;