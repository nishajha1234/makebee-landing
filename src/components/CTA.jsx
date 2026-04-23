import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">

      {/* 🌫️ Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50/40 to-white"></div>

      {/* Glow effects */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>

      {/* 🔥 Floating CTA Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto px-6"
      >
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/40 p-10 text-center">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Ready to Explore the World?
          </h2>

          {/* Subtext */}
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Book your flights, hotels, buses, and trains at the best prices with Make Bee Trip.
          </p>

          {/* CTA Button */}
          <button className="mt-8 px-8 py-3 rounded-full bg-primary text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition">
            Start Your Journey ✈️
          </button>

        </div>
      </motion.div>
    </section>
  );
}