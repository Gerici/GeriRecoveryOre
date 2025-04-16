// src/components/Hero.jsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background dinamico */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[url('/images/circuit-bg.svg')] bg-cover bg-center opacity-10 animate-pulse" />
        </div>
      </div>

      {/* Contenuto centrale */}
      <motion.div
        className="text-center max-w-3xl px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
          Riaccendiamo ciò che ormai è spento
        </h1>
        <p className="mt-6 text-gray-300 text-lg md:text-xl">
          Il ciclo del recupero elettronico inizia da qui. Unisciti al cambiamento.
        </p>
        <a
          href="#how"
          className="mt-8 inline-block px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-600 text-black font-semibold transition duration-300"
        >
          Scopri come funziona
        </a>
      </motion.div>

      {/* Gradiente di transizione verso Mission */}
{/* Gradiente di transizione verso Mission */}
<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}
