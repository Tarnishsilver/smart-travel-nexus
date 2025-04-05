
import React from 'react';
import { MapPin, Calendar, Search, Plane } from 'lucide-react';
import WorldMap from './WorldMap';

const Hero = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <BackgroundAnimation />
      
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="max-w-[600px]">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent leading-tight">
              Discover the world with intelligent travel planning
            </h1>
            <p className="text-lg mb-8 text-[#bcb6fd]">
              Plan your perfect trip with our AI-powered travel assistant. Get personalized itineraries, real-time weather updates, and connect with fellow travelers all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <button className="btn-primary btn-large">
                Start Planning
              </button>
              <a href="#search" className="btn-outline flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Find Destinations
              </a>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center mt-10 md:mt-0">
            <div className="glass-card w-full max-w-[500px] h-[400px] transform perspective-[1000px] animate-tilt-card hover:animate-none transition-transform duration-300 hover:rotate-y-[-5deg] hover:rotate-x-[5deg] shadow-xl">
              <div className="p-6 h-full">
                <WorldMap />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BackgroundAnimation = () => {
  const icons = [
    { icon: <Plane className="w-10 h-10 rotate-45" />, left: '10%', animationDelay: '0s' },
    { icon: <MapPin className="w-8 h-8" />, left: '20%', animationDelay: '2s' },
    { icon: <Calendar className="w-6 h-6" />, left: '30%', animationDelay: '4s' },
    { icon: <Plane className="w-10 h-10 -rotate-45" />, left: '45%', animationDelay: '1s' },
    { icon: <MapPin className="w-8 h-8" />, left: '55%', animationDelay: '5s' },
    { icon: <Search className="w-6 h-6" />, left: '65%', animationDelay: '2.5s' },
    { icon: <Calendar className="w-10 h-10" />, left: '80%', animationDelay: '3.5s' },
    { icon: <Plane className="w-12 h-12 rotate-12" />, left: '90%', animationDelay: '1.5s' },
  ];
  
  return (
    <div className="background-animation">
      {icons.map((item, index) => (
        <div 
          key={index} 
          className="travel-icon" 
          style={{
            left: item.left, 
            bottom: '-100px',
            animationDelay: item.animationDelay
          }}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default Hero;
