import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../component/Navbar';
import { useNavigate } from 'react-router-dom';

const DuvetCovers = () => {
  const [quickShopProduct, setQuickShopProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const duvetCovers = [
    {
      id: 1,
      name: "Luxury Cotton Duvet Cover",
      image: "https://images.playground.com/d7078128-b1cf-4396-a433-d353fddf15f9.jpeg",
      basePrice: 120,
      discount: 20,
      inStock: true,
      description: "Soft, breathable and luxurious duvet covers crafted from premium cotton.",
      colors: [
        { code: "#991b1b", name: "Red", price: 0 },
        { code: "#d6d3d1", name: "Stone", price: 10 },
        { code: "#fef2f2", name: "Cream", price: 5 },
        { code: "#1e3a8a", name: "Navy", price: 15 },
        { code: "#4ade80", name: "Mint", price: 8 },
        { code: "#0ea5e9", name: "Sky", price: 12 },
        { code: "#facc15", name: "Yellow", price: 5 },
        { code: "#334155", name: "Slate", price: 10 },
      ],
      sizes: [
        { name: "Twin", price: 0 },
        { name: "Queen", price: 10 },
        { name: "King", price: 20 },
      ]
    },
    {
      id: 2,
      name: "Soft Linen Duvet Cover",
      image: "https://images.playground.com/e927195d-2850-4db6-b9e6-0259d6d70af4.jpeg",
      basePrice: 100,
      discount: 15,
      inStock: true,
      description: "Breathable and ultra-soft linen duvet cover perfect for summer and winter.",
      colors: [
        { code: "#991b1b", name: "Red", price: 0 },
        { code: "#d6d3d1", name: "Stone", price: 10 },
        { code: "#fef2f2", name: "Cream", price: 5 },
        { code: "#1e3a8a", name: "Navy", price: 15 },
        { code: "#4ade80", name: "Mint", price: 8 },
        { code: "#0ea5e9", name: "Sky", price: 12 },
        { code: "#facc15", name: "Yellow", price: 5 },
        { code: "#334155", name: "Slate", price: 10 },
      ],
      sizes: [
        { name: "Twin", price: 0 },
        { name: "Full", price: 10 },
        { name: "Queen", price: 15 },
        { name: "King", price: 20 },
        { name: "California King", price: 25 },
      ]
    },
    {
      id: 3,
      name: "Premium Sateen Duvet Cover",
      image: "https://images.playground.com/cb178ca8-10bf-4f06-8236-825affc666c6.jpeg",
      basePrice: 140,
      discount: 25,
      inStock: false,
      description: "Elegant sateen weave for a silky-smooth and luxurious feel.",
      colors: [
        { code: "#991b1b", name: "Red", price: 0 },
        { code: "#d6d3d1", name: "Stone", price: 10 },
        { code: "#fef2f2", name: "Cream", price: 5 },
        { code: "#1e3a8a", name: "Navy", price: 15 },
        { code: "#4ade80", name: "Mint", price: 8 },
        { code: "#0ea5e9", name: "Sky", price: 12 },
        { code: "#facc15", name: "Yellow", price: 5 },
        { code: "#334155", name: "Slate", price: 10 },
      ],
      sizes: [
        { name: "Twin", price: 0 },
        { name: "Full", price: 10 },
        { name: "Queen", price: 15 },
        { name: "King", price: 20 },
        { name: "California King", price: 25 },
      ]
    }
  ];

  const handleQuickShop = (product) => {
    setQuickShopProduct(product);
  };

  const closeModal = () => {
    setQuickShopProduct(null);
    setSelectedColor(null);
    setSelectedSize(null);
  };

  const getDiscountedBasePrice = (product) => {
    const price = product.basePrice - (product.basePrice * product.discount) / 100;
    return Math.round(price);
  };

  const getCalculatedPrice = () => {
    if (!quickShopProduct || !selectedColor || !selectedSize) return 0;

    const base = quickShopProduct.basePrice;
    const colorPrice = selectedColor.price || 0;
    const sizePrice = selectedSize.price || 0;
    const totalBeforeDiscount = base + colorPrice + sizePrice;
    const discount = quickShopProduct.discount || 0;
    const discounted = totalBeforeDiscount - (totalBeforeDiscount * discount) / 100;

    return {
      original: totalBeforeDiscount,
      discounted: Math.round(discounted),
    };
  };

  const prices = getCalculatedPrice();

  const navigate = useNavigate();
  const handleImageClick = (id) => {
    navigate(`/duvet-covers/${id}`);
  };

  return (
    <>
      <Navbar />
      <div className="pt-20">
        <div className="relative w-full border rounded">
          <img
            src="https://images.playground.com/cb178ca8-10bf-4f06-8236-825affc666c6.jpeg"
            className="w-full h-[400px] object-cover"
            alt="duvet cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">Elegant Duvet Covers</h2>
          </div>
        </div>

        <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="rounded shadow p-6 text-left flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold mb-2">Cozy & Classy Duvets</h2>
            <p className="text-sm text-gray-700">
              Wrap yourself in comfort with our luxurious duvet covers — durable, stylish, and soft.
            </p>
          </div>

          {duvetCovers.map((product) => (
            <div key={product.id} className="group relative  rounded shadow hover:shadow-lg transition">
              <img
                onClick={() => handleImageClick(product.id)}
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover duration-300"
              />
              <h3 className="text-center p-4 font-semibold">{product.name}</h3>
              <div className="text-center">
                <p className="text-sm text-gray-400 line-through">${product.basePrice}</p>
                <p className="text-lg font-semibold">
                  ${getDiscountedBasePrice(product)}
                  <span className="text-xs text-red-500 ml-1">({product.discount}% OFF)</span>
                </p>
              </div>
              <button
                onClick={() => handleQuickShop(product)}
                className="absolute bottom-26 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 text-sm rounded opacity-0 group-hover:opacity-100 transition"
              >
                Quick Shop
              </button>
            </div>
          ))}

          {quickShopProduct && ReactDOM.createPortal(
            <div className="fixed inset-0 flex justify-end z-50 bg-black/30">
              <div className="bg-white w-full max-w-md p-6 rounded h-screen overflow-y-auto relative">
                <button onClick={closeModal} className="absolute top-3 right-3 text-gray-500 text-xl hover:text-black">&times;</button>

                <img src={quickShopProduct.image} alt={quickShopProduct.name} className="w-24 h-24 object-cover rounded mb-4 mt-6" />
                <h2 className="text-xl font-bold mb-2">{quickShopProduct.name}</h2>

                <div className="text-sm mb-2">
                  {quickShopProduct.inStock
                    ? <span className="text-green-600 font-medium">In Stock</span>
                    : <span className="text-red-500 font-medium">Out of Stock</span>}
                </div>

                {selectedColor && selectedSize && (
                  <div className="flex gap-2 mb-4 items-center">
                    <span className="text-gray-400 line-through">${prices.original}</span>
                    <span className="text-gray-800 font-semibold">${prices.discounted}</span>
                  </div>
                )}

                {/* Colors */}
                <div>
                  <p className="mb-2 font-medium">Colors:</p>
                  <div className="flex gap-3">
                    {quickShopProduct.colors.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(color)}
                        className={`w-8 h-8 rounded-full border-2 ${selectedColor?.code === color.code ? 'border-black' : 'border-gray-300'}`}
                        style={{ backgroundColor: color.code }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                <div className="mt-4">
                  <p className="mb-2 font-medium">Size:</p>
                  <div className="flex gap-2 flex-wrap">
                    {quickShopProduct.sizes.map((size) => (
                      <button
                        key={size.name}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border rounded ${selectedSize?.name === size.name ? 'bg-black text-white' : 'bg-white text-black border-gray-300'}`}
                      >
                        {size.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add to Bag */}
                <button
                  onClick={() => {
                    alert(`Added ${quickShopProduct.name} (${selectedSize?.name}, ${selectedColor?.name}) to bag`);
                    closeModal();
                  }}
                  className="w-full mt-6 py-2 bg-black text-white rounded hover:bg-gray-900 transition"
                  disabled={!selectedColor || !selectedSize}
                >
                  Add to Bag
                </button>
              </div>
            </div>,
            document.body
          )}
        </div>
      </div>
    </>
  );
};

export default DuvetCovers;
