import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = ({ isDayMode }) => {
  return (
    <header className={`header transition-all duration-300 ${!isDayMode ? 'bg-black/20 backdrop-blur-md' : ''}`}>
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4">
        <NavLink 
          to="/" 
          className={`w-10 h-10 rounded-lg items-center justify-center flex font-bold shadow-md transition-all duration-300 ${
            isDayMode ? 'bg-white' : 'bg-white/20 backdrop-blur-sm hover:bg-white/30'
          }`}
        >
          <p className={`${isDayMode ? 'blue-gradient_text' : 'text-white'}`}>SP</p>
        </NavLink>
        <nav className='flex text-lg gap-4 md:gap-7 font-medium'>
          <NavLink 
            to='/about' 
            className={({ isActive }) => 
              `transition-all duration-300 hover:scale-110 ${
                isActive 
                  ? isDayMode 
                    ? "text-blue-600" 
                    : "text-blue-400"
                  : isDayMode 
                    ? "text-black" 
                    : "text-white"
              }`
            }
          >
            About
          </NavLink>
          <NavLink 
            to='/projects' 
            className={({ isActive }) => 
              `transition-all duration-300 hover:scale-110 ${
                isActive 
                  ? isDayMode 
                    ? "text-blue-600" 
                    : "text-blue-400"
                  : isDayMode 
                    ? "text-black" 
                    : "text-white"
              }`
            }
          >
            Projects
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
