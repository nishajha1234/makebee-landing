import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Destinations() {
  const places = [
    {
      name: "Goa",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      price: "₹5,999",
    },
    {
      name: "Manali",
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b",
      price: "₹6,999",
    },
    {
      name: "Dubai",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      price: "₹18,499",
    },
    {
      name: "Bali",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      price: "₹12,999",
    },
  ];

  const [active, setActive] = useState(0);

  // 🔁 Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % places.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">

      {/* 🌌 LIVE AURORA BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Base */}
        <div className="absolute inset-0 bg-white"></div>

        {/* Layer 1 */}
        <div className="absolute w-[140%] h-[140%] top-[-20%] left-[-20%]
          bg-[radial-gradient(circle_at_30%_30%,rgba(0,150,255,0.12),transparent_50%)]
          animate-[auroraMove_18s_ease-in-out_infinite] blur-3xl">
        </div>

        {/* Layer 2 */}
        <div className="absolute w-[140%] h-[140%] top-[-20%] left-[-20%]
          bg-[radial-gradient(circle_at_70%_70%,rgba(255,0,150,0.08),transparent_50%)]
          animate-[auroraMove_25s_ease-in-out_infinite] blur-3xl">
        </div>

        {/* Layer 3 */}
        <div className="absolute w-[140%] h-[140%] top-[-20%] left-[-20%]
          bg-[radial-gradient(circle_at_50%_20%,rgba(0,200,150,0.08),transparent_50%)]
          animate-[auroraMove_22s_ease-in-out_infinite] blur-3xl">
        </div>

      </div>

      {/* 🔹 CONTENT */}
      <div className="relative z-10">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800">
            Popular Destinations
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 mt-3">
            Explore the most loved travel spots across the world
          </p>
        </div>

        {/* 🔥 SLIDER */}
        <div className="mt-16 max-w-5xl mx-auto px-6">

          <div className="relative h-[400px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl">

            <AnimatePresence mode="wait">
              <motion.img
                key={places[active].image}
                src={places[active].image}
                alt={places[active].name}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Light overlay */}
            <div className="absolute inset-0 bg-white/10"></div>

            {/* Glass Info */}
            <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800">
                {places[active].name}
              </h3>
              <p className="text-gray-600 mt-1">
                Starting from {places[active].price}
              </p>

              <button className="mt-4 px-5 py-2.5 rounded-full bg-primary text-white text-sm shadow-md hover:scale-105 transition">
                Explore
              </button>
            </div>

          </div>

          {/* 🔘 DOT NAVIGATION */}
          <div className="flex justify-center mt-8 gap-3">
            {places.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  active === i
                    ? "w-8 bg-primary"
                    : "w-3 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}