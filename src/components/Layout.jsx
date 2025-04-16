import React from "react";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Background continuo */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-b from-[#0d1117] via-black to-[#0d1117]">
          <div className="absolute inset-0 bg-[url('/images/circuit-bg.svg')] bg-cover bg-center opacity-10" />
        </div>
      </div>

      {/* Contenuto del sito */}
      {children}
    </div>
  );
}
