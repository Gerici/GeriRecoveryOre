import { useState, useEffect } from "react"; // Importazione unica
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaLeaf } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Missione", href: "#mission" },
  { name: "RAEE", href: "#raee" },
  { name: "Come Funziona", href: "#how" },
  { name: "Team", href: "#team" },
  { name: "Contatti", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 px-6 py-4 backdrop-blur-md ${scrolled ? "bg-black/80 shadow-md" : "bg-transparent"}`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <a href="#hero" className="text-2xl font-bold tracking-wide text-amber-400">
          <div className="flex items-center gap-[1px] text-white font-bold text-xl">
            <FaLeaf className="animate-pulse text-green-400 mx-[8px]" />
            Geri
            <div className="flex items-center text-yellow-400 font-bold text-xl">
              Recovery
            </div>
            Ore
          </div>
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-amber-400 transition-colors duration-300">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white text-xl"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mt-4 space-y-4 md:hidden"
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white hover:text-amber-400 text-lg"
              >
                {link.name}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
}
