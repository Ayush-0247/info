import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed w-full top-0 bg-[#FFF7E9] text-[#2B2B2B] border-b z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <Link to="/" className="text-lg font-semibold" onClick={closeMenu}>
          AYUSH RAJ
        </Link>

        
        <nav className="hidden md:flex gap-8 text-gray-700">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

    
      <div
        className={`
          md:hidden flex flex-col gap-4 px-6 pb-4 bg-[#FFF7E9]
          transition-all duration-300 overflow-hidden
          ${open ? "max-h-64 opacity-100 pointer-events-auto"
                 : "max-h-0 opacity-0 pointer-events-none"}
        `}
      >
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
    </header>
  );
}
