import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Reboutologie", href: "/reboutologie" },
    { name: "AMMA assis", href: "/amma-assis" },
    { name: "Massage Bien-Être", href: "/massage-bien-etre" },
    { name: "Reiki", href: "/reiki" },
    { name: "Technique EMMETT", href: "/technique-emmett" },
    { name: "Tarifs et Contact", href: "/tarifs-et-contact" },
  ];

  const logoUrl = `${import.meta.env.BASE_URL}images/logo-acdm.jpg`;
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-amber-50/50 py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
          <img src={logoUrl} alt="Logo Au Cœur Des Mains" className="h-20 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.href
                  ? "gradient-text font-semibold"
                  : "text-gray-700 hover:text-amber-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button variant="outline" className="hidden border-amber-500 text-amber-600 hover:bg-amber-50">
            Prendre RDV
          </Button>
        </div>

        <button
          className="lg:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4"
        >
          <div className="container mx-auto px-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === link.href
                    ? "gradient-text bg-amber-50"
                    : "text-gray-700 hover:text-amber-600 hover:bg-amber-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4">
              <Button className="hidden gradient-bg hover:opacity-90 w-full">
                Prendre RDV
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;