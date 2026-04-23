import { FaPlane, FaTrain, FaBus, FaHotel } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: <FaPlane />,
      title: "Flights",
      desc: "Book domestic & international flights at the best prices with seamless experience.",
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
      color: "from-blue-500/20 to-transparent",
    },
    {
      icon: <FaHotel />,
      title: "Hotels",
      desc: "Find luxury & budget stays across top destinations worldwide.",
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      color: "from-purple-500/20 to-transparent",
    },
    {
      icon: <FaBus />,
      title: "Bus",
      desc: "Comfortable and affordable bus journeys with real-time booking.",
      img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
      color: "from-orange-500/20 to-transparent",
    },
    {
      icon: <FaTrain />,
      title: "Train",
      desc: "Quick and reliable train reservations with live availability.",
      img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3",
      color: "from-green-500/20 to-transparent",
    },
  ];

  return (
<section className="py-24 bg-gradient-to-b from-white to-gray-50">

      {/* 🌈 Background Gradient */}


      {/* 🔹 Heading */}
      <div className="relative text-center max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          Travel Made Effortless
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        <p className="mt-4 text-gray-600">
          Everything you need — beautifully organized for your journey.
        </p>
      </div>

      {/* 🔹 Services */}
      <div className="relative mt-20 space-y-16 max-w-7xl mx-auto px-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col lg:flex-row items-stretch gap-10 ${
              i % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >

            {/* IMAGE */}
<div className="relative w-full lg:w-1/2 group h-full">
  <div className={`absolute inset-0 bg-gradient-to-r ${s.color} rounded-3xl`}></div>

  <img
    src={s.img}
    alt={s.title}
    className="relative w-full h-full min-h-[320px] object-cover rounded-3xl shadow-xl group-hover:scale-105 transition duration-500"
  />

  {/* Floating Icon */}
  <div className="absolute -bottom-6 left-6 bg-white shadow-lg rounded-full p-4 text-primary text-2xl">
    {s.icon}
  </div>
</div>

            {/* CONTENT */}
<div className="w-full lg:w-1/2 bg-white/50 backdrop-blur-xl p-7 rounded-3xl shadow-sm border border-white/40">

  {/* Badge */}
  <span className="inline-block text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
    {s.title === "Flights" && "Best Deals"}
    {s.title === "Hotels" && "Top Stays"}
    {s.title === "Bus" && "Affordable"}
    {s.title === "Train" && "Fast Booking"}
  </span>

  {/* Title */}
  <h3 className="text-2xl md:text-3xl font-semibold">
    {s.title}
  </h3>

  {/* Description */}
  <p className="mt-3 text-gray-600 leading-relaxed">
    {s.desc}
  </p>

  {/* Feature Points */}
  <div className="mt-5 space-y-2">
    {[
      "Instant booking confirmation",
      "Best price guarantee",
      "24/7 customer support",
    ].map((point, idx) => (
      <div key={idx} className="flex items-stretch gap-2 text-sm text-gray-600">
        <span className="w-2 h-2 bg-primary rounded-full"></span>
        {point}
      </div>
    ))}
  </div>

  {/* Divider */}
  <div className="mt-6 h-[1px] bg-gray-200"></div>

  {/* Bottom Row */}
  <div className="mt-6 flex items-stretch justify-between">

    {/* Price Hint */}
    <p className="text-sm text-gray-500">
      Starting from <span className="font-semibold text-gray-800">₹999</span>
    </p>

    {/* CTA */}
    <button className="px-5 py-2.5 rounded-full bg-primary text-white text-sm shadow-md hover:shadow-lg hover:scale-105 transition">
      Explore
    </button>

  </div>

</div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}