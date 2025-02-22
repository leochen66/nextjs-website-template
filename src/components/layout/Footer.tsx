"use client";

import Link from "next/link";
import { Mail, MapPin, Clock, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#373643] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="text-2xl font-bold text-white mb-6 block">
              LOGO
            </span>
            <p className="text-sm text-gray-300">
              A brief description of your company can go here.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-300 hover:text-[#5ac3c6]"
                >
                  Services 1
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-300 hover:text-[#5ac3c6]"
                >
                  Services 2
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-300 hover:text-[#5ac3c6]"
                >
                  Services 3
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-300 hover:text-[#5ac3c6]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-300 hover:text-[#5ac3c6]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-300 hover:text-[#5ac3c6]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Mail size={18} className="text-[#5ac3c6]" />
                <span>info@template.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Phone size={18} className="text-[#5ac3c6]" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <MapPin size={18} className="text-[#5ac3c6]" />
                <span>Template Location</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Clock size={18} className="text-[#5ac3c6]" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-sm text-gray-300 text-center">
            © {new Date().getFullYear()} Template. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
