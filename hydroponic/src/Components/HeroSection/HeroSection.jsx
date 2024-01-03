import React from "react";
import HomePic from "../../assets/000001.png";

export default function HeroSection() {
  return (
    <div>
      <header>
        <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
          <div class="absolute inset-0">
            <img
              src={HomePic}
              alt="Background Image"
              class="object-cover object-center w-full h-full"
            />
            <div class="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h1 class="text-5xl font-bold leading-tight mb-4">Hydroponics</h1>
            <p class="text-lg text-gray-300 mb-8">
            Dive into a world of freshness with Hydroponic, where we cultivate nature's bounty to bring you the crispiest, tastiest, and most vibrant organic green vegetables. Elevate your plate, and let the goodness grow right from our farms to your table!
            </p>
            {/* <a
              href="#"
              class="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </a> */}
          </div>
        </div>
      </header>
    </div>
  );
}
