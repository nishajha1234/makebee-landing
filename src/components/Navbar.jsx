import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Services", "Destinations", "Contact"];

  return (
    <>
      {/* 🔥 Floating Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] lg:w-[85%] z-50">
  <div className="bg-white shadow-md rounded-2xl px-6 py-3 flex items-center justify-between">

    {/* 🔥 LEFT: LOGO */}
    <div className="flex items-center">
      <img
        src={logo}
        alt="Make Bee Trip Logo"
className="h-9 sm:h-10 md:h-12 lg:h-14 xl:h-[50px] w-auto object-contain"
      />
    </div>

    {/* CENTER: NAV LINKS */}
    <ul className="hidden lg:flex gap-10 font-medium text-gray-700">
      {navLinks.map((item, i) => (
        <li key={i} className="relative group cursor-pointer">
          {item}
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
        </li>
      ))}
    </ul>

    {/* RIGHT: CTA + MOBILE MENU */}
    <div className="flex items-center gap-4">
      
      {/* CTA */}
      <button className="hidden lg:block bg-gradient-to-r from-primary to-accent text-white px-5 py-2.5 rounded-full shadow-md hover:scale-105 transition-all duration-300">
        Book Trip
      </button>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(true)}>
          <FiMenu size={26} />
        </button>
      </div>

    </div>

  </div>
</nav>

      {/* 🔥 MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120 }}
              className="fixed top-0 right-0 h-full w-[75%] bg-white z-50 shadow-xl p-6 flex flex-col"
            >
              {/* Close Button */}
              <div className="flex justify-between items-center mb-8">
                <img src={logo} alt="logo" className="h-12" />
                <FiX size={26} onClick={() => setIsOpen(false)} />
              </div>

              {/* Links */}
              <ul className="flex flex-col gap-6 text-lg font-medium">
                {navLinks.map((item, i) => (
                  <li key={i} className="border-b pb-2">
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="mt-10 bg-primary text-white py-3 rounded-lg">
                Book Now
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}