import React, { useEffect, useRef, useState } from "react";
import image1 from "../assets/1.jpeg";
import image2 from "../assets/2.jpeg";

const images = [image1, image2];

export default function Hero() {
  const nextSectionRef = useRef(null);
  const [current, setCurrent] = useState(0);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);


  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="h-[75vh] w-full relative flex flex-col justify-center items-center overflow-hidden">
        {/* Background images with smooth fade */}
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            loading="lazy"
            alt={`hero-${idx}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === current ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}

        {/* Overlay layer for opacity control */}
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-5">
          <span className="inline-block bg-red-500 text-white px-4 py-1 rounded-full mb-4 text-sm">
            समाज सेवा में समर्पित
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Bal Ke Laal
          </h1>
          <p className="text-lg sm:text-xl text-white font-semibold max-w-2xl mx-auto mb-6 drop-shadow">
            समाज की सेवा और गरीब घरों की लड़कियों को सम्मान के साथ जीवन देने के लिए समर्पित
          </p>
          <div className="flex justify-center gap-4">
            <button
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl transition"
              onClick={() => scrollToSection("contact")}
            >
              योगदान करें
            </button>

            <button
              className="bg-white hover:bg-red-100 text-red-600 px-6 py-2 border border-red-600 rounded-xl transition"
              onClick={() => scrollToSection("about")}
            >
              और जानें
            </button>
          </div>
        </div>


        {/* Dots indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`block w-3 h-3 rounded-full transition-colors duration-300 ${idx === current ? "bg-red-600" : "bg-white"
                }`}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
}
