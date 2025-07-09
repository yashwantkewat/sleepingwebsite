import React, { useState } from 'react';
import { ArrowRight, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function Footer() {
  const [email, setEmail] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);

 const handleEmailSubmit = (e) => {
  e.preventDefault();

  if (!email.trim()) {
    alert("Please enter a valid email address.");
    return;
  }

  // Save to localStorage
  const existing = JSON.parse(localStorage.getItem("newsletterEmails")) || [];
  const updated = [...existing, email];
  localStorage.setItem("newsletterEmails", JSON.stringify(updated));

  // Alert user
  alert("Thank you for subscribing to our newsletter!");

  // Clear input
  setEmail('');
};

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Section */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              COMPANY
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/pages/our-story" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/pages/bedding-collection" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Bedding Collections
                </Link>
              </li>
              <li>
                <Link to="/pages/faq" className="text-gray-300 hover:text-white transition-colors duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/pages/care" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Care Instructions
                </Link>
              </li>
              <li>
                <Link to="/pages/contact-us" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>

          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              USEFUL LINKS
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/pages/shipping" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/pages/return-policy" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link to="/pages/privacy-policy" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/pages/term-policy" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/pages/sitemap" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Sitemap
                </Link>
              </li>
            </ul>

          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              SOCIAL
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="https://instagram.com" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://facebook.com" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://youtube.com" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Youtube
                </a>
              </li>
              <li>
                <a href="https://pinterest.com" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              NEWSLETTER
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Good sleep tips and new arrivals
            </p>
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="flex-1 px-4 py-2 bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button
                onClick={handleEmailSubmit}
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-r-md transition-colors duration-200 flex items-center justify-center"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Logo and Description */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
              <div className="text-gray-800 font-bold text-lg">G</div>
            </div>
            <span className="text-white text-xl font-bold tracking-wide">GOOD SLEEP</span>
          </div>

          <div className="max-w-4xl mb-8">
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Good Sleep Bedding is the best gift we can give to the world! Our plush and ultra-soft sheets are crafted to snuggle you to a good night's sleep. A well-rested body and mind boost's your productivity and wellness!
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              We believe that if everyone wakes up refreshed the world would be a peaceful place.
            </p>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
            {/* Social Icons */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>

              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2025 · Good Sleep Bedding by Resa Global LLC. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </button>

        {isChatOpen && (
          <div className="absolute bottom-16 right-0 w-80 h-96 bg-white rounded-lg shadow-xl border border-gray-200">
            <div className="bg-gray-700 text-white p-4 rounded-t-lg flex justify-between items-center">
              <h3 className="font-medium">Chat with us</h3>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-gray-300 hover:text-white"
              >
                ×
              </button>
            </div>
            <div className="p-4 h-64 overflow-y-auto bg-gray-50">
              <div className="bg-white p-3 rounded-lg mb-3 shadow-sm">
                <p className="text-sm text-gray-700">Hello! How can we help you find the perfect sleep solution today?</p>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 p-2 border border-gray-300 rounded-l-lg text-sm focus:outline-none focus:border-amber-500"
                />
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-r-lg transition-colors duration-200">
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}