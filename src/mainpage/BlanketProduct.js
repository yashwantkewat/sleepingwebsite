import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar';
import { useParams } from 'react-router-dom';
import { addToCart } from '../redux/Cartslice';
import { useDispatch } from 'react-redux';

const BlanketProduct = () => {
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

    const blanketProducts = [
        {
            id: 1,
            name: "Ultra Plush Fleece Blanket",
            image: "https://images.playground.com/f4079b53-6c5f-4628-b0f6-6681a55c359f.jpeg",
            images: [
                "https://images.playground.com/1c610c87-ddae-45dc-a8c3-e6ecde28540f.jpeg",
                "https://images.playground.com/f4079b53-6c5f-4628-b0f6-6681a55c359f.jpeg",
                "https://images.playground.com/79e94b89-cf58-40ae-a623-63b9754ddb13.jpeg",
                "https://images.playground.com/f4079b53-6c5f-4628-b0f6-6681a55c359f.jpeg",

            ],
            basePrice: 79.99,
            salePrice: 59.99,
            discount: 25,
            inStock: true,
            subtitle: "Soft Microfiber, Lightweight Warmth",
            description: "Stay cozy and warm all season long with our Ultra Plush Fleece Blanket. Made from soft microfiber fleece for a gentle feel against your skin and lightweight insulation.",
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
            ], whatsIncluded: {
                standard: [
                    "1 fleece blanket"
                ]
            }

        }
    ];

    const { id } = useParams();

    useEffect(() => {
        // Save allProducts to localStorage only once
        const existing = localStorage.getItem('products');
        if (!existing) {
            localStorage.setItem('products', JSON.stringify(blanketProducts));
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
            <h2 className="text-2xl text-gray-600">Blanket not found</h2>
        </div>
    );

    const getTotalPrice = () => {
        const base = product.salePrice;
        const color = selectedColor?.price || 0;
        const size = selectedSize?.price || 0;
        return (base + color + size) * quantity;
    };

    const getOriginalTotalPrice = () => {
        const base = product.basePrice;
        const color = selectedColor?.price || 0;
        const size = selectedSize?.price || 0;
        return (base + color + size) * quantity;
    };

    return (
        <>
            <Navbar />
            <div className="pt-20 bg-white min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Images */}
                        <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-4">
                            <div className="flex lg:flex-col flex-row gap-3 order-2 lg:order-1">
                                {product.images.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`w-16 h-16 lg:w-20 lg:h-20 border-2 rounded-lg overflow-hidden transition-all ${selectedImage === index ? 'border-gray-800' : 'border-gray-200 hover:border-gray-400'}`}
                                    >
                                        <img src={img} alt={product.name} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
                                    <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Info */}
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
                                <h3 className="text-lg font-medium text-gray-800 mb-3">What’s Included</h3>
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
                                        />
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

                                <button onClick={handleAddToCart}
                                    className="w-full bg-gray-800 text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-900 transition-colors">
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

            {/* Bottom Section */}
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
                        <h3 className="text-lg font-semibold mb-2">Cozy Fleece Warmth</h3>
                        <p className="text-gray-600 text-sm">
                            Made for ultimate relaxation and warmth, our fleece blankets feel like a soft hug after a long day.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Hypoallergenic</h3>
                        <p className="text-gray-600 text-sm">
                            Gentle on sensitive skin and safe for allergy-prone users. Free from harmful chemicals and dyes.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Easy to Wash</h3>
                        <p className="text-gray-600 text-sm">
                            Toss in the machine and dry easily — made to last through countless cozy nights.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Eco-Conscious</h3>
                        <p className="text-gray-600 text-sm">
                            Built with sustainability in mind — from materials to manufacturing.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlanketProduct;
