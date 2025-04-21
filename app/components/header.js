import { useState } from "react";
import { Menu, X } from "lucide-react";
import ClipLoader from "react-spinners/ClipLoader";
import { Button } from "../components/ui/button";

const Header = ({ handleCalendlyClick, loading, scrollToSection })=> {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white text-blue-400 text-3xl py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-400">BevEX Express</h1>

        <button onClick={toggleMenu} className="md:hidden text-black">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-7 items-center">
          <nav className="space-x-4 text-sm md:text-[17px] border px-10 py-4 rounded-2xl">
            <button onClick={() => scrollToSection("about")} className="hover:text-orange-400">About</button>
            <button onClick={() => scrollToSection("services")} className="hover:text-orange-400">Services</button>
            <button onClick={() => scrollToSection("why")} className="hover:text-orange-400">Why Us</button>
            <button onClick={() => scrollToSection("cases")} className="hover:text-orange-400">Cases</button>
            <button onClick={() => scrollToSection("how")} className="hover:text-orange-400">How It Works</button>
            <button onClick={() => scrollToSection("testimonials")} className="hover:text-orange-400">Testimonials</button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-orange-400">Contact</button>
          </nav>
          <Button
            onClick={handleCalendlyClick}
            className="bg-blue-400 hover:bg-orange-600 hover:cursor-pointer text-gray-200 text-sm px-6 py-3 rounded-2xl flex items-center justify-center gap-2"
          >
            {loading ? <ClipLoader size={20} color="#fff" /> : "Book a free call with Cyrus"}
          </Button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white z-40 flex flex-col items-center justify-center gap-8 text-blue-900 text-xl px-4 py-10 shadow-md">
          <nav className="flex flex-col gap-6 items-center">
            <button onClick={() => { scrollToSection("about"); toggleMenu(); }} className="hover:text-orange-400">About</button>
            <button onClick={() => { scrollToSection("services"); toggleMenu(); }} className="hover:text-orange-400">Services</button>
            <button onClick={() => { scrollToSection("why"); toggleMenu(); }} className="hover:text-orange-400">Why Us</button>
            <button onClick={() => { scrollToSection("cases"); toggleMenu(); }} className="hover:text-orange-400">Cases</button>
            <button onClick={() => { scrollToSection("how"); toggleMenu(); }} className="hover:text-orange-400">How It Works</button>
            <button onClick={() => { scrollToSection("testimonials"); toggleMenu(); }} className="hover:text-orange-400">Testimonials</button>
            <button onClick={() => { scrollToSection("contact"); toggleMenu(); }} className="hover:text-orange-400">Contact</button>
          </nav>
          <Button
            onClick={() => { handleCalendlyClick(); toggleMenu(); }}
            className="bg-blue-400 hover:bg-orange-600 hover:cursor-pointer text-white px-6 py-3 rounded-full flex items-center justify-center gap-2"
          >
            {loading ? <ClipLoader size={20} color="#fff" /> : "Book a Free Call with Cyrus"}
          </Button>
        </div>
      )}
    </header>
  );
}

export default Header
