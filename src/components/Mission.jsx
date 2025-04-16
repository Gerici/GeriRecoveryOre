// src/components/Mission.jsx
import { motion } from "framer-motion";
import { FaLeaf, FaRecycle, FaHandsHelping } from "react-icons/fa";

const missionPoints = [
  {
    icon: <FaRecycle className="text-green-400 text-4xl" />,
    title: "Valorizziamo lo Scarto",
    description:
      "Trasformiamo i rifiuti elettronici in risorse preziose, dando nuova vita a ciò che sembrava finito.",
  },
  {
    icon: <FaLeaf className="text-lime-400 text-4xl" />,
    title: "Rispettiamo l’Ambiente",
    description:
      "Riduciamo l’inquinamento attraverso processi sostenibili e partnership consapevoli.",
  },
  {
    icon: <FaHandsHelping className="text-teal-400 text-4xl" />,
    title: "Collaboriamo per il Futuro",
    description:
      "Costruiamo una rete virtuosa con scuole, aziende e enti per un impatto duraturo.",
  },
];

export default function Mission() {
  return (
<section id="Missione" className="bg-gradient-to-b from-black to-black text-white py-24 px-6">
<motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="inline-block p-4 bg-gray-900 rounded-full mb-4 shadow-lg">
          <FaLeaf className="text-5xl text-green-500" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold">La Nostra Missione</h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Crediamo nel potere del recupero, della rigenerazione e della collaborazione per costruire un’economia circolare più consapevole.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {missionPoints.map((point, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg h-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-4">
              {point.icon}
            </div>
            <h3 className="text-2xl font-semibold text-white text-center">
              {point.title}
            </h3>
            <p className="text-gray-400 text-center mt-2">{point.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
