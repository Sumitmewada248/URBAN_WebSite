import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const NavItem = ({ label, link, hasChildren, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="relative group">
      <a
        href={link}
        className="flex items-center gap-1 px-4 py-2 text-slate-700 hover:text-blue-600 transition-colors duration-200"
        onClick={(e) => {
          if (hasChildren) {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
      >
        {label}
        {hasChildren && <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />}
      </a>

      {hasChildren && children && (
        <ul
          className={`absolute z-10 left-0 w-48 py-2 bg-white shadow-lg rounded-md transform origin-top-left transition-all duration-200 ${
            isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          {children.map((child, index) => (
            <li key={index}>
              <a
                href={child.link}
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-blue-600"
              >
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const navItems = [
  { label: 'Home', link: '#' },
  {
    label: 'Pages',
    link: '#',
    hasChildren: true,
    children: [
      { label: 'About', link: '#about' },
      { label: 'Services', link: '#services' },
      { label: 'Contact', link: '#contact' },
    ],
  },
  {
    label: 'Projects',
    link: '#projects',
    hasChildren: true,
    children: [
      { label: 'Residential', link: '#residential' },
      { label: 'Commercial', link: '#commercial' },
      { label: 'Industrial', link: '#industrial' },
    ],
  },
  { label: 'Blog', link: '#blog' },
  { label: 'Contact', link: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-600">
          <span className="flex items-center gap-2">
            <span className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-md">U</span>
            URBAN
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                label={item.label}
                link={item.link}
                hasChildren={item.hasChildren}
                children={item.children}
              />
            ))}
            <li>
              <a
                href="#contact"
                className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                Get Started
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden pt-20`}
      >
        <nav className="container mx-auto px-4">
          <ul className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <li key={index} className="border-b border-slate-100 pb-2">
                <a
                  href={item.link}
                  className="block text-lg font-medium text-slate-800 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
                {item.hasChildren && item.children && (
                  <ul className="pl-4 mt-2 space-y-2">
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <a
                          href={child.link}
                          className="block text-slate-600 hover:text-blue-600 py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="mt-4">
              <a
                href="#contact"
                className="block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;