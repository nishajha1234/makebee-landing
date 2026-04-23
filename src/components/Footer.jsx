import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gray-50 pt-20 pb-10 overflow-hidden">

      {/* 🌫️ Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-white to-white"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* 🔥 TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-primary">
              Make Bee Trip
            </h2>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Your one-stop solution for booking flights, hotels, buses, and trains.
              Travel smarter, easier, and better with us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              <li className="hover:text-primary cursor-pointer">Home</li>
              <li className="hover:text-primary cursor-pointer">Services</li>
              <li className="hover:text-primary cursor-pointer">Destinations</li>
              <li className="hover:text-primary cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              <li>Flight Booking</li>
              <li>Hotel Booking</li>
              <li>Bus Booking</li>
              <li>Train Booking</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Contact
            </h3>
            <p className="mt-4 text-gray-600 text-sm">
              📍 India
            </p>
            <p className="text-gray-600 text-sm">
              ✉️ support@makebeetrip.com
            </p>
            <p className="text-gray-600 text-sm">
              📞 +91 98765 43210
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4 text-gray-600">
              <FaFacebookF className="hover:text-primary cursor-pointer" />
              <FaInstagram className="hover:text-primary cursor-pointer" />
              <FaTwitter className="hover:text-primary cursor-pointer" />
            </div>
          </div>

        </div>

        {/* 🔹 Divider */}
        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Make Bee Trip. All rights reserved.
        </div>

      </div>
    </footer>
  );
}