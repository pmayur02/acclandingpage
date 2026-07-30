"use client";
import React from 'react'
import { useForm } from "../context/FormContext";

const Hero = () => {
    const { setShowForm } = useForm();
    return (
        <section id="hero" className="flex flex-col md:flex-row items-center justify-center p-8 mt-30 shadow-[0_0_15px_rgba(0,0,0,0.15)] rounded-2xl bg-white max-w-7xl mx-auto">
            {/* First Div: Content */}
            <div className="flex flex-col justify-center space-y-6 md:w-1/2 p-4">
                <section>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                        Next-Gen <span className="text-blue-600">Expertise</span><br />
                        for Your <span className="text-blue-600">Enterprise</span>
                    </h1>
                </section>
                <section>
                    <h3 className="text-2xl text-black-200 ">Cultivate high-performance <br /> teams through expert learning.</h3>
                </section>
                <section className="flex flex-wrap gap-4 text-sm font-semibold text-gray-700">
                    <p><span className="text-green-400 text-xl font-bold">✓</span> Tailored Solutions</p>
                    <p><span className="text-green-400 text-xl font-bold">✓</span> Industry Insights</p>
                    <p><span className="text-green-400 text-xl font-bold">✓</span> Expert Guidance</p>
                </section>
                <section>
                    <button onClick={() => setShowForm(true)} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer">Enquire Now</button>
                </section>
            </div>

            {/* Second Div: Image */}
            <div className="md:w-1/2 p-4 flex justify-center">
                <img src="/corporate-big-hero-v4.png" alt="hero-img" className="w-full h-auto rounded-lg" />
            </div>
        </section>
    )
}

export default Hero;