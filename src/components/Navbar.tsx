import { useEffect, useState } from "react";
import { ExternalLink, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

type NavbarProps = {
  templatesUrl: string;
};

export default function Navbar({ templatesUrl }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/75 backdrop-blur-xl shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        <Link to="/">
          <img src="/logo-noir.png" 
          className="h-10 w-auto object-contain"/>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/#about">À propos</Link>
          <Link to="/#services">Services</Link>
          <Link to="/#projects">Projets</Link>
          <Link to="/#contact">Contact</Link>

          <a
            href={templatesUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#f2d7e4]/60 px-4 py-2 text-sm font-medium text-gray-900 transition hover:bg-[#eec8da]"
          >
            Templates
            <ExternalLink size={14} />
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Ouvrir le menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-gray-100 bg-white/95 p-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#about" onClick={() => setIsOpen(false)}>
              À propos
            </a>
            <a href="#services" onClick={() => setIsOpen(false)}>
              Services
            </a>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projets
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
            <a
              href={templatesUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[#d86aa2]"
            >
              Mes templates
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
