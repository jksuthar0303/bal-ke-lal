import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import punrasar from "../assets/punrasar.jpeg"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { label: "होम ", href: "#hero", id: "hero" },
    { label: "परिचय", href: "#about", id: "about" },
    { label: "सदस्य", href: "#members", id: "members" },
    { label: "योगदान", href: "#donate", id: "donate" },
    { label: "संपर्क", href: "#contact", id: "contact" },
  ];

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 150; // header height adjustment

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.offsetTop - offset;
          const bottom = top + section.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
        <img src={punrasar} className="w-10 h-10 rounded-full" />
        <h1 className="text-2xl font-bold text-red-600">Bal Ke Laal</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-red-600 font-semibold"
                    : "hover:text-red-600"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100 animate-fadeIn">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`block text-lg transition ${
                    activeSection === item.id
                      ? "text-red-600 font-semibold"
                      : "text-gray-700 hover:text-red-600"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
