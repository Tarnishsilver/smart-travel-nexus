
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, MessageSquare, Cloud, Users, FileText } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('home');
  
  return (
    <nav className="navbar">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="navbar-logo">
            <Link to="/" className="flex items-center gap-2 text-light font-bold text-2xl">
              <span className="text-primary-light">Smart</span>Travel Nexus
            </Link>
          </div>
          
          <div className="hidden md:block">
            <ul className="flex gap-8">
              <li>
                <Link 
                  to="/" 
                  className={`text-light hover:text-primary relative py-2 after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-bottom-left ${activeLink === 'home' ? 'text-primary after:scale-x-100' : ''}`}
                  onClick={() => setActiveLink('home')}
                >
                  Home
                </Link>
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className={`text-light hover:text-primary relative py-2 after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-bottom-left ${activeLink === 'features' ? 'text-primary after:scale-x-100' : ''}`}>
                    Features
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-[#1A1F2C]/95 backdrop-blur-md border border-white/10 p-1 rounded-lg shadow-lg">
                    <DropdownMenuItem className="flex items-center gap-2 p-3 hover:bg-white/5 hover:text-primary-light cursor-pointer text-light rounded-md focus:bg-white/5 focus:text-primary-light">
                      <MessageSquare className="w-4 h-4" />
                      <span>Chatbot</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2 p-3 hover:bg-white/5 hover:text-primary-light cursor-pointer text-light rounded-md focus:bg-white/5 focus:text-primary-light">
                      <Users className="w-4 h-4" />
                      <span>Chatroom</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2 p-3 hover:bg-white/5 hover:text-primary-light cursor-pointer text-light rounded-md focus:bg-white/5 focus:text-primary-light">
                      <MapPin className="w-4 h-4" />
                      <span>Maps</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2 p-3 hover:bg-white/5 hover:text-primary-light cursor-pointer text-light rounded-md focus:bg-white/5 focus:text-primary-light">
                      <Cloud className="w-4 h-4" />
                      <span>Weather</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2 p-3 hover:bg-white/5 hover:text-primary-light cursor-pointer text-light rounded-md focus:bg-white/5 focus:text-primary-light">
                      <FileText className="w-4 h-4" />
                      <span>AI Doc</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li>
                <Link 
                  to="/destinations" 
                  className={`text-light hover:text-primary relative py-2 after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-bottom-left ${activeLink === 'destinations' ? 'text-primary after:scale-x-100' : ''}`}
                  onClick={() => setActiveLink('destinations')}
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`text-light hover:text-primary relative py-2 after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-bottom-left ${activeLink === 'about' ? 'text-primary after:scale-x-100' : ''}`}
                  onClick={() => setActiveLink('about')}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="flex gap-4 items-center">
            <button className="btn-outline hidden sm:inline-block">
              Log in
            </button>
            <button className="btn-primary">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
