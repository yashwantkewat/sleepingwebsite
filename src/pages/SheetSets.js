import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../component/Navbar';
import { useNavigate } from 'react-router-dom';

const SheetSets = () => {
  const [quickShopProduct, setQuickShopProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const sheetSets = [
    {
      id: 1,
      name: "Luxe Sateen Sheet Set",
      image: "https://goodsleepbedding.com/cdn/shop/files/white_360x.jpg?v=1713852180",
      basePrice: 90,
      discount: 15,
      inStock: true,
      description: "Crafted from premium sateen cotton, the Luxe Sateen Sheet Set offers an ultra-smooth, soft feel and a subtle sheen that enhances your bedroom's elegance.",
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
      id: 2,
      name: "Classic Sateen Sheet Set",
      image: "https://goodsleepbedding.com/cdn/shop/files/1mainimage_0db89fbf-7388-4bde-b418-044ae7111059.jpg?v=1714472507",
      basePrice: 70,
      discount: 15,
      inStock: true,
      description: "Our Classic Sateen Sheet Set blends timeless style with comfort. It’s breathable, smooth, and ideal for year-round luxury sleep.",
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
      name: "Premium Sateen Sheet Set",
      image: "https://goodsleepbedding.com/cdn/shop/files/1_5e46230f-9982-413f-80a7-c39bb1a08c55.jpg?v=1714473684",
      basePrice: 90,
      discount: 15,
      inStock: true,
      description: "Experience hotel-like comfort at home with our Premium Sateen Sheet Set. Made with long-staple cotton and a silky sateen weave.",
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
    const priceAfterDiscount = product.basePrice - (product.basePrice * product.discount) / 100;
    return Math.round(priceAfterDiscount);
  };

  const getCalculatedPrice = () => {
    if (!quickShopProduct || !selectedColor || !selectedSize) return 0;

    const base = quickShopProduct.basePrice;
    const colorExtra = selectedColor?.price || 0;
    const sizeExtra = selectedSize?.price || 0;
    const priceBeforeDiscount = base + colorExtra + sizeExtra;

    const discount = quickShopProduct.discount || 0;
    const discounted = priceBeforeDiscount - (priceBeforeDiscount * discount) / 100;

    return {
      original: priceBeforeDiscount,
      discounted: Math.round(discounted)
    };
  };

  const prices = getCalculatedPrice();

  const navigate = useNavigate(); // 👈 Hook for navigation

  const handleImageClick = (id) => {
    navigate(`/sheets-sets/${id}`);
  };
  return (
    <>
      <Navbar />

      <div className='pt-20'>
        <div className="group relative border rounded  w-full">
          {/* Responsive Image */}
          <img

            src="https://images.playground.com/1607f89b-945a-423c-8b1a-55082e37d31d.jpeg"
            alt="sheet sets"
            className="w-full h-auto object-cover max-h-[400px] "
          />

          {/* Centered Heading Over Image */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <h2 className="text-white text-2xl md:text-3xl font-bold text-center px-4">
              Premium Sheet Sets Collection
            </h2>
          </div>
        </div>
        <div className="p-15  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {/* ✅ Description Box - only once */}
          <div className=" rounded shadow p-6 text-left flex flex-col items-center justify-center">
            <h2 className="text-xl  font-bold mb-2">Our Premium Sheet Sets</h2>
            <p className="text-sm text-gray-700 max-w-xl">
              Discover our collection of luxury sateen sheet sets, crafted for comfort and elegance.
              Choose from a variety of colors and sizes to suit your bedroom perfectly.
            </p>
          </div>



          {sheetSets.map(product => (
            <div key={product.id} className="group relative  rounded overflow-hidden shadow hover:shadow-lg transition">
              <img
                onClick={() => handleImageClick(product.id)}  // 👈 Add this
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="p-4 font-semibold text-center">{product.name}</h3>

              <div className="text-center">
                <p className="text-sm text-gray-400 line-through">${product.basePrice}</p>
                <p className="text-lg font-semibold text-black">
                  ${getDiscountedBasePrice(product)}
                  <span className="text-xs text-red-500 ml-1">({product.discount}% OFF)</span>
                </p>
              </div>

              <button
                onClick={() => handleQuickShop(product)}
                className="absolute bottom-30 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 text-sm rounded opacity-0 group-hover:opacity-100 transition"
              >
                Quick Shop
              </button>
            </div>
          ))}

          {quickShopProduct && ReactDOM.createPortal(
            <div className="fixed inset-0 flex justify-end z-50 bg-black/20">
              <div className="bg-white w-full max-w-md p-6 rounded shadow-lg relative h-screen overflow-y-auto">
                <h2 className="text-xl font-bold mb-2">{quickShopProduct.price}</h2>

                {/* Close Button */}
                <button onClick={closeModal} className="absolute top-3 right-3 text-gray-500 text-xl hover:text-black">
                  &times;
                </button>

                {/* Product Image */}
                <img

                  src={quickShopProduct.image}
                  alt={quickShopProduct.name}
                  className="w-20 h-20 object-cover rounded mb-4 mt-6"
                />

                {/* Product Title */}
                <h2 className="text-xl font-bold mb-2">{quickShopProduct.name}</h2>
                <h2 className="text-xl font-bold mb-2">{quickShopProduct.price}</h2>

                {/* Stock Status */}
                <div className="text-sm mb-2">
                  {quickShopProduct.inStock ? (
                    <span className="text-green-600 font-medium">In Stock</span>
                  ) : (
                    <span className="text-red-500 font-medium">Out of Stock</span>
                  )}
                </div>

                {/* Price Section */}
                {selectedColor && selectedSize && (
                  <div className="flex gap-2 items-center mb-4">
                    <span className="text-gray-400 line-through">${prices.original}</span>
                    <span className="text-gray-800 font-semibold">${prices.discounted}</span>
                  </div>
                )}

                {/* Colors */}
                <div className="mt-4">
                  <p className="mb-2 font-medium">Colors:</p>
                  <div className="flex gap-3 flex-wrap">
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
                  <div className="flex flex-wrap gap-2">
                    {quickShopProduct.sizes.map(size => (
                      <button
                        key={size.name}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border rounded ${selectedSize?.name === size.name
                          ? 'bg-black text-white'
                          : 'bg-white text-black border-gray-300'}`}
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

export default SheetSets;
