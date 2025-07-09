// src/pages/ThousandThreadCount.js

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../component/Navbar';
import { useNavigate } from 'react-router-dom';

const ThousandThreadCount = () => {
    const [quickShopProduct, setQuickShopProduct] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    const navigate = useNavigate();

    const sheetSets = [
        {
            id: 1,
            name: "1000 TC Royal Cotton Set",
            image: "https://images.playground.com/cm0mo6gok06f7zzgvqny55ujl_original.jpeg",
            basePrice: 120,
            discount: 20,
            inStock: true,
            description: "Experience true hotel-luxury comfort with our 1000 thread count premium cotton sheet set.",
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
            name: "1000 TC Ultra Soft Set",
            image: "https://images.playground.com/e927195d-2850-4db6-b9e6-0259d6d70af4.jpeg",
            basePrice: 130,
            discount: 18,
            inStock: true,
            description: "Crafted for unmatched softness and longevity, this ultra-soft sheet set brings 5-star sleep to your home.",
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
        }, {
            id: 3,
            name: "1000 TC Ultra Soft Set",
            image: "https://images.playground.com/91b8ec84-2a35-4d7b-b797-9526d66f5377.jpeg",
            basePrice: 130,
            discount: 18,
            inStock: true,
            description: "Crafted for unmatched softness and longevity, this ultra-soft sheet set brings 5-star sleep to your home.",
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

    const handleImageClick = (id) => {
        navigate(`/thousand-thread-count/${id}`);
    };

    return (
        <>
            <Navbar />

            <div className='pt-20'>
                <div className="group relative border rounded w-full">
                    <img
                        src="https://images.playground.com/bc7ec754-2f48-46d0-b590-f86f0587b65f.jpeg"
                        alt="1000 thread count"
                        className="w-full h-auto object-cover max-h-[400px]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <h2 className="text-white text-2xl md:text-5xl font-bold text-center px-4">
                            Opulence Collection
                        </h2>
                    </div>
                </div>

                <div className="p-15  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="rounded shadow p-6 text-left flex flex-col justify-center">
                        <h2 className="text-xl font-bold mb-2">Opulence Collection</h2>
                        <p className="text-base text-gray-800">1000 Thread Count</p>
                        <p className="text-sm text-gray-700 max-w-xl">
                            Indulge in the pinnacle of luxury with our 100% cotton sheet collection.
                        </p>
                    </div>

                    {sheetSets.map(product => (
                        <div key={product.id} className="group relative  rounded overflow-hidden shadow hover:shadow-lg transition">
                            <img
                                onClick={() => handleImageClick(product.id)}
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
                                className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 text-sm rounded opacity-0 group-hover:opacity-100 transition"
                            >
                                Quick Shop
                            </button>
                        </div>
                    ))}

                    {/* Quick Shop Modal */}
                    {quickShopProduct && ReactDOM.createPortal(
                        <div className="fixed inset-0 flex justify-end z-50 bg-black/20">
                            <div className="bg-white w-full max-w-md p-6 rounded shadow-lg relative h-screen overflow-y-auto">
                                <button onClick={closeModal} className="absolute top-3 right-3 text-gray-500 text-xl hover:text-black">
                                    &times;
                                </button>

                                <img src={quickShopProduct.image} alt={quickShopProduct.name} className="w-full object-cover rounded mb-4" />
                                <h2 className="text-xl font-bold mb-2">{quickShopProduct.name}</h2>
                                <p className="mb-2 text-gray-600">{quickShopProduct.description}</p>

                                {selectedColor && selectedSize && (
                                    <div className="flex gap-2 items-center mb-4">
                                        <span className="text-gray-400 line-through">${prices.original}</span>
                                        <span className="text-gray-800 font-semibold">${prices.discounted}</span>
                                    </div>
                                )}

                                {/* Color selection */}
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

                                {/* Size selection */}
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

export default ThousandThreadCount;
