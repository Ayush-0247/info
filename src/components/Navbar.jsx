import { Link } from "react-router-dom";



import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 bg-[#FFF7E9] text-[#2B2B2B] border-b z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        <Link to="/" className="text-lg font-semibold">Your Name</Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-8 text-gray-700">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <Link to="/blog">Blog</Link>
          <a href="#contact">Contact</a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <Link to="/blog">Blog</Link>
          <a href="#contact">Contact</a>
        </div>
      )}
    </header>
  );
}
