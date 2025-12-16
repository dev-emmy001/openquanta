"use client"
import React, { useState } from 'react';

// Define the shape of a navigation item
interface NavItem {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { label: 'Marketplace', href: '#' },
    { label: 'Discover Research', href: '#' },
    { label: 'Document', href: '#' },
    { label: 'About', href: '#' },
  ];

  return (
    <nav className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* 1. Logo Section (Text Only) */}
          <div className="flex-shrink-0 cursor-pointer select-none">
            <span className="text-2xl font-bold tracking-tight">
              {/* Using text color to mimic the logo icon */}
              <span className="text-orange-500 mr-1">O</span>
              openQuanta
            </span>
          </div>

          {/* 2. Desktop Navigation Links (Hidden on Mobile) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* 3. Desktop Sign In (Hidden on Mobile) */}
          <div className="hidden md:block">
            <a href="#" className="text-white hover:text-gray-300 px-4 py-2 text-sm font-medium transition-colors">
              Sign In
            </a>
          </div>

          {/* 4. Mobile Menu Toggle (Text Based) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2 focus:outline-none"
            >
              <span className="text-sm font-bold border rounded-4xl px-4 py-1">
                {isMenuOpen ? 'Close' : 'Menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 5. Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white hover:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.label}
              </a>
            ))}
            
            {/* Mobile Sign In */}
            <div className="mt-4 pt-4">
              <a
                href="#"
                className="text-whiteblock px-3 py-2 rounded-md text-base font-medium text-center"
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;