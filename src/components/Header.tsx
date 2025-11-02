
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Antriva AI Labs
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">
            Services
          </a>
          <a href="#observability" className="text-gray-600 hover:text-blue-600 transition-colors">
            Observability
          </a>
          <a href="#data" className="text-gray-600 hover:text-blue-600 transition-colors">
            Data Engineering
          </a>
          <a href="#mvp" className="text-gray-600 hover:text-blue-600 transition-colors">
            MVP
          </a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-500 focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <a 
              href="#services" 
              className="block py-2 text-gray-600 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#observability" 
              className="block py-2 text-gray-600 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Observability
            </a>
            <a 
              href="#data" 
              className="block py-2 text-gray-600 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Data Engineering
            </a>
            <a 
              href="#mvp" 
              className="block py-2 text-gray-600 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              MVP
            </a>
            <a 
              href="#contact" 
              className="block py-2 text-gray-600 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
