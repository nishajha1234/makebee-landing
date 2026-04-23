import { motion } from "framer-motion";

export default function Hero() {

  const destinations = [
    {
      name: "Bali",
      price: "₹12,999",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      name: "Dubai",
      price: "₹18,499",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    },
    {
      name: "Manali",
      price: "₹6,999",
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* 🌄 BACKGROUND IMAGE */}
      <img
        src="./src/assets/images/hero-bg.jpg"
        alt="Travel landscape"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 🔥 GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            >
              Travel Beyond Limits <br />
              With <span className="text-primary">Make Bee Trip</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-gray-200 text-lg max-w-xl"
            >
              Discover flights, hotels, buses and trains — all in one place.
              Plan smarter, travel better, and explore the world your way.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button className="bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition">
                Explore Trips
              </button>

              <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                View Destinations
              </button>
            </motion.div>

          </div>

          {/* RIGHT VISUAL CARD */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-2xl">

              <h3 className="text-white text-xl font-semibold mb-4">
                Trending Destinations
              </h3>

              <div className="space-y-4">
                {destinations.map((place, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/20 transition cursor-pointer"
                  >
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-medium text-white">{place.name}</p>
                      <p className="text-gray-300 text-sm">
                        Starting from {place.price}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}