import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      text: "Booking my trip was super easy and quick. Highly recommended!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      location: "Delhi",
    },
    {
      name: "Priya Verma",
      text: "Best travel experience ever. Prices were unbeatable!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      location: "Mumbai",
    },
    {
      name: "Amit Patel",
      text: "Customer support was amazing and helped me instantly.",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
      location: "Ahmedabad",
    },
  ];

  const [active, setActive] = useState(0);

  // 🔁 Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">

      {/* 🌫️ Soft Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            What Our Customers Say
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 🔥 Slider */}
        <div className="mt-16 relative">

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg text-center"
            >

              {/* Stars */}
              <div className="flex justify-center gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-lg italic leading-relaxed">
                “{testimonials[active].text}”
              </p>

              {/* User */}
              <div className="mt-6 flex flex-col items-center">

                <img
                  src={testimonials[active].image}
                  alt={testimonials[active].name}
                  className="w-14 h-14 rounded-full object-cover shadow-md"
                />

                <h4 className="mt-3 font-semibold text-gray-800">
                  {testimonials[active].name}
                </h4>

                <p className="text-sm text-gray-500">
                  {testimonials[active].location}
                </p>

              </div>

            </motion.div>
          </AnimatePresence>

          {/* 🔘 DOTS */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-3 rounded-full transition-all ${
                  active === i
                    ? "w-8 bg-primary"
                    : "w-3 bg-gray-300"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}