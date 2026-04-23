import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">

      {/* 🌫️ Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/40 to-purple-50/40"></div>

      {/* Glow accents */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* 🔥 SPLIT LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-left"
          >
            <h2 className="text-4xl font-bold text-gray-800">
              Plan Your Perfect Trip
            </h2>

            <div className="w-16 h-1 bg-primary mt-4 rounded-full"></div>

            <p className="mt-6 text-gray-600">
              Tell us your travel plans and our experts will help you craft
              the best journey — tailored just for you.
            </p>

            {/* Highlights */}
            <div className="mt-8 space-y-4 text-gray-600">
              <p>✔ Personalized travel plans</p>
              <p>✔ Best price guarantee</p>
              <p>✔ 24/7 expert support</p>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/40 space-y-6"
          >

            {/* Input Group */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="Full Name"
                className="p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />

            </div>

            {/* Destination */}
            <input
              type="text"
              placeholder="Preferred Destination"
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />

            {/* Travel Date */}
            <input
              type="date"
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />

            {/* Message */}
            <textarea
              rows="4"
              placeholder="Tell us about your trip (budget, days, preferences...)"
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
            ></textarea>

            {/* CTA */}
            <button className="w-full py-3 rounded-full bg-primary text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition">
              Send Inquiry ✈️
            </button>

          </motion.form>

        </div>
      </div>
    </section>
  );
}