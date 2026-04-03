import { useState } from 'react';
import { LotusLogo } from './LotusLogo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-[#5a7d6e]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group"
          >
            <LotusLogo size={48} className="group-hover:scale-110 transition-transform" />
            <div className="hidden sm:block">
              <div className="text-lg text-[#2c2c2c] leading-tight">Beyond Body</div>
              <div className="text-xs text-[#6b7c73] -mt-0.5">Holistic Health</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#4a5f56] hover:text-[#5a7d6e] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-[#4a5f56] hover:text-[#5a7d6e] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-[#4a5f56] hover:text-[#5a7d6e] transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#4a5f56] hover:text-[#5a7d6e] transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 bg-[#5a7d6e] text-white rounded-full hover:bg-[#4a6d5e] transition-all hover:scale-105"
            >
              Book Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-[#5a7d6e]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-[#5a7d6e]/10">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left px-4 py-2 text-[#4a5f56] hover:text-[#5a7d6e] hover:bg-[#e8f4f0] rounded-lg transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left px-4 py-2 text-[#4a5f56] hover:text-[#5a7d6e] hover:bg-[#e8f4f0] rounded-lg transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-left px-4 py-2 text-[#4a5f56] hover:text-[#5a7d6e] hover:bg-[#e8f4f0] rounded-lg transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left px-4 py-2 text-[#4a5f56] hover:text-[#5a7d6e] hover:bg-[#e8f4f0] rounded-lg transition-colors"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-2 px-6 py-3 bg-[#5a7d6e] text-white rounded-full hover:bg-[#4a6d5e] transition-all text-center"
              >
                Book Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
