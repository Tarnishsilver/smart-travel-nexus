
import React from 'react';

const WorldMap = () => {
  // These would be your travel points, in a real app they would come from your backend
  const points = [
    { x: 200, y: 100, name: "Paris", rating: 4.8 },
    { x: 150, y: 150, name: "London", rating: 4.7 },
    { x: 300, y: 120, name: "Rome", rating: 4.9 },
    { x: 100, y: 200, name: "New York", rating: 4.6 },
    { x: 350, y: 180, name: "Tokyo", rating: 4.9 },
  ];

  return (
    <div className="world-map h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-primary-light">Popular Destinations</h3>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
          <span className="text-sm text-light-gray">Live Updates</span>
        </div>
      </div>
      
      <div className="relative flex-1 bg-darker/70 rounded-lg overflow-hidden">
        {/* Simple map visualization - in a real app you would use a proper map library */}
        <svg width="100%" height="100%" viewBox="0 0 450 250" className="opacity-60">
          {/* Simple world map outline */}
          <path 
            d="M50,125 C100,50 150,100 200,75 C250,50 300,100 350,75 C400,50 450,125 400,180 C350,235 300,180 250,200 C200,220 150,180 100,200 C50,220 0,150 50,125 Z" 
            fill="none" 
            stroke="rgba(255,255,255,0.3)" 
            strokeWidth="1"
          />
          
          {/* Map points */}
          {points.map((point, i) => (
            <g key={i}>
              <circle 
                cx={point.x} 
                cy={point.y} 
                r={6} 
                fill="#6c5ce7" 
                className="map-point cursor-pointer transition-all duration-300 hover:r-[8] hover:fill-secondary"
                opacity={0.8}
              />
              <circle 
                cx={point.x} 
                cy={point.y} 
                r={12} 
                className="pulse opacity-30 animate-ping"
                fill="#6c5ce7" 
              />
              <text 
                x={point.x + 10} 
                y={point.y} 
                className="text-[10px] fill-current text-white font-medium"
              >
                {point.name}
              </text>
              <text 
                x={point.x + 10} 
                y={point.y + 15} 
                className="text-[8px] fill-current text-secondary"
              >
                ★ {point.rating}
              </text>
            </g>
          ))}
        </svg>
        
        {/* Map overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent pointer-events-none"></div>
      </div>
      
      <div className="mt-4 px-3 py-2 bg-darker/70 rounded-md text-xs text-light-gray border border-white/5">
        Explore the map to discover top-rated destinations and personalized travel recommendations.
      </div>
    </div>
  );
};

export default WorldMap;
