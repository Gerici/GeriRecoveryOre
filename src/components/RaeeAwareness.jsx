import { motion } from "framer-motion";
import { FaTrashAlt, FaMicrochip, FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";

export default function RaeeAwareness() {
  return (
    <section id="raee" className="px-6 py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <FaExclamationTriangle className="text-yellow-400 text-5xl mb-4 mx-auto" />
        <h2 className="text-4xl md:text-5xl font-bold">
          Perché i RAEE non sono rifiuti come gli altri
        </h2>
        <p className="mt-4 text-gray-400 text-lg">
          I Rifiuti di Apparecchiature Elettriche ed Elettroniche contengono sostanze inquinanti e metalli preziosi.
          Trattarli come semplici rifiuti è un errore pericoloso. Noi li recuperiamo responsabilmente.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <motion.div
          className="bg-gray-900 rounded-xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaTrashAlt className="text-red-500 text-4xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Non sono rifiuti comuni</h3>
          <p className="text-gray-400">
            I RAEE contengono sostanze tossiche come mercurio e piombo, dannose per ambiente e salute se smaltite
            in modo improprio.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-900 rounded-xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FaMicrochip className="text-green-400 text-4xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Sono miniere urbane</h3>
          <p className="text-gray-400">
            Telefoni, computer e TV sono pieni di oro, rame e altri materiali preziosi recuperabili e riutilizzabili.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-900 rounded-xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <FaCheckCircle className="text-emerald-400 text-4xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Noi li ritiriamo gratuitamente</h3>
          <p className="text-gray-400">
            Basta segnalarceli. Offriamo un servizio gratuito, ecologico e 100% eco-friendly per aziende e privati.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
