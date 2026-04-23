import { motion } from "framer-motion";
import { FaTags, FaHeadset, FaBolt } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaTags />,
      title: "Best Prices",
      desc: "We guarantee competitive pricing across all bookings with no hidden charges.",
      stat: "₹0 Hidden Fees",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      desc: "Our travel experts are available round the clock to assist you anytime.",
      stat: "24/7 Help",
    },
    {
      icon: <FaBolt />,
      title: "Instant Booking",
      desc: "Book your trips in seconds with our fast and seamless booking system.",
      stat: "< 30 Sec",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">

      {/* 🌫️ Soft Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800">
            Why Choose Us
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 mt-3">
            We make travel simple, affordable, and stress-free.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-md border border-gray-100 text-left"
            >

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center bg-primary/10 text-primary rounded-2xl text-2xl">
                {f.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold text-gray-800">
                {f.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {f.desc}
              </p>

              {/* Stat Highlight */}
              <div className="mt-6 text-lg font-bold text-primary">
                {f.stat}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}