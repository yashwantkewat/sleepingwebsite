// src/components/Navbar.js
import React, { useState } from 'react';
import { ChevronDown, User, ShoppingBag, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="fixed w-full z-20 bg-white border bg-opacity-100 backdrop-blur-sm">
      <div className="w-full bg-teal-400 text-black text-center py-2 text-sm">
        Get 10% off on all products with code NEW10
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              className="h-10"
              src="https://goodsleepbedding.com/cdn/shop/files/GSP-Final_Logo-for_Print_150x.svg?v=1708509883"
              alt="Good Sleep Bedding"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 relative">
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="text-stone-600 hover:text-stone-900 px-3 py-2 text-sm font-medium flex items-center"
            >
              All Products <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <Link to="/pages/our-story" className="text-stone-600 hover:text-stone-900 px-3 py-2 text-sm font-medium">Our Story</Link>
            <Link to="/pages/blogs" className="text-stone-600 hover:text-stone-900 px-3 py-2 text-sm font-medium">Journal</Link>
            <Link to="/pages/contact-us" className="text-stone-600 hover:text-stone-900 px-3 py-2 text-sm font-medium">Contact Us</Link>
            {isProductsOpen && (
              <div className="absolute  left-0 top-full w-[67vw] bg-white shadow-lg z-50 py-4 px-6  grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Beddings */}
                <div>
                  <h4 className="font-semibold mb-2"> <Link to="/collections" >All Beddings  </Link>
                  </h4>
                  {[{ label: 'Sheet Sets', path: '/sheets-sets' }, { label: 'Duvet Covers', path: '/duvet-covers' }, { label: 'Fitted Sheets', path: '/fitted-sheets' }, { label: 'Pillowcases', path: '/Pillow-cases' }, { label: 'Blankets', path: '/blankets' }].map((item, index) => (
                    <Link key={index} to={item.path} className="block px-2 py-1 text-sm hover:bg-stone-100 rounded">
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold mb-2"><Link to="/collections" >Shop By Material   </Link></h4>
                  {[{ label: 'Sateen', path: '/sateen' }, { label: 'Bamboo', path: '/Bamboo' }].map((item, index) => (
                    <Link key={index} to={item.path} className="block px-2 py-1 text-sm hover:bg-stone-100 rounded">
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold mb-2"> <Link to="/collections" >Shop By Usage   </Link></h4>
                  {[{ label: 'Home', path: '/pages/home' }].map((item, index) => (
                    <Link key={index} to={item.path} className="block px-2 py-1 text-sm hover:bg-stone-100 rounded">
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold mb-2">   <Link to="/collections" >Shop By Thread Count   </Link></h4>
                  {[{ label: '1000 TC', path: '/1000-TC' }, { label: '800 TC', path: '/800-TC' }, { label: '600 TC', path: '/600-TC' }].map((item, index) => (
                    <Link key={index} to={item.path} className="block px-2 py-1 text-sm hover:bg-stone-100 rounded">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/account/logged-in"><User className="h-5 w-5 text-stone-600 hover:text-stone-900" /></Link>
            <Link to="/cart" className="relative">
              <ShoppingBag className="h-5 w-5 text-stone-600 hover:text-stone-900" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)}><Menu className="h-6 w-6 text-stone-600" /></button>
          </div>
        </div>
      </div>

      {/* Slide-out Mobile Menu */}
      <div className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <img
            src="https://goodsleepbedding.com/cdn/shop/files/GSP-Final_Logo-for_Print_150x.svg?v=1708509883"
            alt="Logo"
            className="h-8"
          />
          <button onClick={() => setMenuOpen(false)}><X className="h-6 w-6 text-stone-600" /></button>
        </div>

        {/* SCROLLABLE MENU FIX */}
        <div className="px-4 py-4 space-y-2 bg-white overflow-y-auto h-[calc(100vh-64px)]">
          <button
            onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
            className="w-full text-left font-medium text-stone-700 flex justify-between items-center"
          >
            All Products <ChevronDown className={`h-4 w-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
          </button>

          {mobileProductsOpen && (
            <div className="pl-4 space-y-2">
              <h4 className="font-semibold mb-2">All Beddings</h4>
              {[{ label: 'Sheet Sets', path: '/sheets-sets' }, { label: 'Duvet Covers', path: '/duvet-covers' }, { label: 'Fitted Sheets', path: '/fitted-sheets' }, { label: 'Pillowcases', path: '/Pillow-cases' }, { label: 'Blankets', path: '/blankets' }].map((item, index) => (
                <Link key={index} to={item.path} className="block text-sm text-stone-700 hover:underline">
                  {item.label}
                </Link>
              ))}

              <h4 className="font-semibold mb-2">Shop by Material</h4>
              {[{ label: 'Sateen', path: '/sateen' }, { label: 'Bamboo', path: '/bamboo' }].map((item, index) => (
                <Link key={index} to={item.path} className="block text-sm text-stone-700 hover:underline">
                  {item.label}
                </Link>
              ))}

              <h4 className="font-semibold mb-2">Shop by Thread Count</h4>
              {[{ label: '1000 TC', path: '/1000-TC' }, { label: '800 TC', path: '/800-TC' }, { label: '600 TC', path: '/600-TC' }].map((item, index) => (
                <Link key={index} to={item.path} className="block text-sm text-stone-700 hover:underline">
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          <Link to="/pages/our-story" className="block text-stone-700">Our Story</Link>
          <Link to="/pages/blogs" className="block text-stone-700">Journal</Link>
          <Link to="/pages/contact-us" className="block text-stone-700">Contact Us</Link>
          <Link to="/account/register" className="block text-stone-700">Register / Login</Link>
          <div className="relative inline-block">
            <Link to="/cart" className="block text-stone-700">Cart</Link>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
