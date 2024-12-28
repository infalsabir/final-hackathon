import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import Typewriter from "typewriter-effect";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-blue-600 text-white flex flex-col items-center justify-center px-4">
      {/* Hero Section */}
      <header className="text-center mb-8" data-aos="fade-down">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to <span className="text-yellow-400">NoteMaster</span>
        </h1>
        <div className="text-2xl font-medium">
          <Typewriter
            options={{
              strings: ["Take Notes Effortlessly!", "Stay Organized!", "Access Notes Anytime!"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </header>

      {/* Call to Action */}
      <div className="flex gap-4">
<Link to= "/register" className="bg-yellow-400 text-blue-600 px-6 py-2 rounded-lg font-semibold text-lg hover:scale-105 hover:bg-yellow-500 transition-transform duration-300">
       Get Started <FaArrowRight className="inline-block ml-2" />
</Link>
        
        <button className="border-2 border-yellow-400 px-6 py-2 rounded-lg font-semibold text-lg text-yellow-400 hover:scale-105 hover:bg-yellow-400 hover:text-blue-600 transition-transform duration-300">
          Learn More
        </button>
      </div>

      {/* Features Section */}
      <section className="mt-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Why Choose NoteMaster?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className="p-6 bg-white text-blue-600 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-bold mb-3">Cloud Sync</h3>
            <p>Access your notes from anywhere, anytime, with automatic cloud sync.</p>
          </div>
          <div
            className="p-6 bg-white text-blue-600 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-xl font-bold mb-3">Easy Access</h3>
            <p>Organize and find your notes easily with an intuitive interface.</p>
          </div>
          <div
            className="p-6 bg-white text-blue-600 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="text-xl font-bold mb-3">Collaborative</h3>
            <p>Share and collaborate on notes with friends and colleagues in real-time.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
