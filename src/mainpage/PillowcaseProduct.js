import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar';
import { useParams } from 'react-router-dom';
import { addToCart } from '../redux/Cartslice';
import { useDispatch } from 'react-redux';

const PillowcaseProduct = () => {
    const [product, setProduct] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);


    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(
            addToCart({
                id: product.id,
                name: product.name,
                price: getTotalPrice(), // price based on selected size/color * quantity
                image: product.image,
                quantity: quantity,
                selectedColor: selectedColor?.name,
                selectedSize: selectedSize?.name
            })
        );
    };

    const pillowProducts = [
        {
            id: 1,
            name: "Premium Cotton Pillowcases",
            image: "https://images.playground.com/159d7ff5-8d31-42d6-9a7b-e53657b0a8b1.jpeg",
            images: [
                "https://images.playground.com/b6cc80eb-78f9-4cf9-b389-9e8ba9758daa.jpeg",
                "https://images.playground.com/159d7ff5-8d31-42d6-9a7b-e53657b0a8b1.jpeg",
                "https://images.playground.com/a42b7696-da04-4882-b2f9-9820d679b9a7.jpeg",
                "https://images.playground.com/ad403e47-3a5c-4213-9189-696c6f336ecd.jpeg"

            ],
            basePrice: 39.99,
            salePrice: 29.99,
            discount: 25,
            inStock: true,
            subtitle: "100% Organic Cotton, Soft Finish",
            description: "Our Premium Cotton Pillowcases offer breathable, long-lasting comfort with a soft finish and durable stitching. Perfect for a cool and comfortable night’s sleep.",
            colors: [
                { code: "#E6F3F7", name: "Sky", price: 0 },
                { code: "#9CA3AF", name: "Stone", price: 0 },
                { code: "#FEF7CD", name: "Cream", price: 0 },
                { code: "#D2B48C", name: "Tan", price: 0 },
                { code: "#1E3A8A", name: "Navy", price: 0 },
                { code: "#6B7280", name: "Charcoal", price: 0 },
                { code: "#FFFFFF", name: "White", price: 0 },
                { code: "#E5E7EB", name: "Light Gray", price: 0 },
                { code: "#F3E8FF", name: "Lavender", price: 0 },
                { code: "#FEE2E2", name: "Blush", price: 0 },
                { code: "#7C2D12", name: "Burgundy", price: 0 },
                { code: "#A3A3A3", name: "Sage", price: 0 },
                { code: "#FFFFFF", name: "Pure White", price: 0 },
                { code: "#D4AF37", name: "Gold", price: 0 }
            ],
            sizes: [
                { name: "Twin", price: 0, note: "39\" x 75\"" },
                { name: "Twin XL", price: 10, note: "39\" x 80\"" },
                { name: "Full", price: 15, note: "54\" x 75\"" },
                { name: "Queen", price: 20, note: "60\" x 80\"" },
                { name: "King", price: 30, note: "76\" x 80\"" },
                { name: "California King", price: 35, note: "72\" x 84\"" }
            ],
            whatsIncluded: {
                standard: [
                    "2 pillowcases"
                ]
            }
        }
    ];

    const { id } = useParams();



    useEffect(() => {
        // Save allProducts to localStorage only once
        const existing = localStorage.getItem('products');
        if (!existing) {
            localStorage.setItem('products', JSON.stringify(pillowProducts));
        }
    }, []);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        const found = storedProducts.find(item => item.id === parseInt(id));
        setProduct(found);
        if (found) {
            setSelectedColor(found.colors[0]);
            setSelectedSize(found.sizes[2]);
        }
    }, [id]);



    if (!product) return (
        <div className="min-h-screen flex items-center justify-center">
            <h2 className="text-2xl text-gray-600">Pillowcase not found</h2>
        </div>
    );

    const getTotalPrice = () => {
        const basePrice = product.salePrice;
        const colorPrice = selectedColor?.price || 0;
        const sizePrice = selectedSize?.price || 0;
        return (basePrice + colorPrice + sizePrice) * quantity;
    };

    const getOriginalTotalPrice = () => {
        const basePrice = product.basePrice;
        const colorPrice = selectedColor?.price || 0;
        const sizePrice = selectedSize?.price || 0;
        return (basePrice + colorPrice + sizePrice) * quantity;
    };

    return (
        <>
            <Navbar />
            <div className="pt-20 bg-white min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Product Images */}
                        <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-4 ">
                            <div className="flex lg:flex-col flex-row gap-3 order-2 lg:order-1">
                                {product.images.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`w-16 h-16 lg:w-20 lg:h-20 border-2 rounded-lg overflow-hidden transition-all ${selectedImage === index ? 'border-gray-800' : 'border-gray-200 hover:border-gray-400'}`}
                                    >
                                        <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
                                    <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-3xl lg:text-4xl font-light text-gray-800 mb-2">{product.name}</h1>
                                <p className="text-lg text-gray-600 mb-4">{product.subtitle}</p>
                                <div className="flex items-center space-x-3 mb-6">
                                    <span className="text-2xl text-gray-400 line-through">${getOriginalTotalPrice().toFixed(2)}</span>
                                    <span className="text-3xl font-medium text-gray-800">${getTotalPrice().toFixed(2)}</span>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-gray-800 mb-3">What's Included</h3>
                                <p className="text-gray-600 mb-3">The set includes</p>
                                <ul className="space-y-1">
                                    {product.whatsIncluded.standard.map((item, index) => (
                                        <li key={index} className="flex items-center text-gray-700">
                                            <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>{item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-gray-800 mb-3">
                                    Color <span className="font-normal text-gray-600">{selectedColor?.name}</span>
                                </h3>
                                <div className="grid grid-cols-7 gap-3">
                                    {product.colors.map((color, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedColor(color)}
                                            className={`w-12 h-12 rounded-full border-2 transition-all ${selectedColor?.name === color.name ? 'border-gray-800 scale-110' : 'border-gray-300 hover:border-gray-500'}`}
                                            style={{ backgroundColor: color.code }}
                                            title={color.name}
                                        >
                                            {color.code === '#FFFFFF' && (
                                                <div className="w-full h-full rounded-full border border-gray-200"></div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-lg font-medium text-gray-800">Size</h3>
                                    <button className="text-sm text-gray-600 underline hover:text-gray-800">Size guide</button>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {product.sizes.map((size, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedSize(size)}
                                            className={`p-3 border rounded-lg text-center transition-all ${selectedSize?.name === size.name ? 'border-gray-800 bg-gray-50' : 'border-gray-300 hover:border-gray-500'}`}
                                        >
                                            <div className="font-medium text-gray-800">{size.name}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <label className="text-lg font-medium text-gray-800">Quantity:</label>
                                    <div className="flex items-center border border-gray-300 rounded-lg">
                                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2 hover:bg-gray-50">-</button>
                                        <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                                        <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 hover:bg-gray-50">+</button>
                                    </div>
                                </div>

                                <button onClick={handleAddToCart} className="w-full bg-gray-800 text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-900 transition-colors">
                                    Add to Cart
                                </button>
                            </div>

                            <div className="pt-6 border-t border-gray-200">
                                <p className="text-gray-700 leading-relaxed">{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="max-w-7xl bg-red-200 mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                    <img
                        src="https://goodsleepbedding.com/cdn/shop/files/Good_Sleep_Bedding.png?v=1710924624&width=670"
                        alt="Bedding"
                        className="w-full h-auto rounded-lg shadow"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Unparalleled Quality</h3>
                        <p className="text-gray-600 text-sm">
                            We pride ourselves on offering bedding of the highest quality. Our products are crafted from premium materials with meticulous attention to detail, ensuring durability and long-lasting comfort.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Luxurious Comfort</h3>
                        <p className="text-gray-600 text-sm">
                            Experience the epitome of comfort with our luxurious bedding collections. From silky-smooth textures to cozy warmth, our bedding is designed to enhance your sleep experience and provide a restful night's sleep.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Chemical-Free Materials</h3>
                        <p className="text-gray-600 text-sm">
                            We understand the importance of your health and well-being, which is why all our bedding is crafted from chemical-free materials. Rest easy knowing that our products are free from harmful toxins.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Environment Friendly</h3>
                        <p className="text-gray-600 text-sm">
                            Our commitment to sustainability drives our choice of materials, production processes, and packaging methods. We minimize our ecological footprint using eco-friendly practices.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PillowcaseProduct;
