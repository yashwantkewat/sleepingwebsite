import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar';
import { useParams } from 'react-router-dom';
import { addToCart } from '../redux/Cartslice';
import { useDispatch } from 'react-redux';



const EightHundredProduct = () => {
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

    const allProducts = [
        {
            id: 1,
            name: "Luxe Sateen Sheet Set",
            image: "https://goodsleepbedding.com/cdn/shop/files/white_360x.jpg?v=1713852180",
            images: [
                "https://goodsleepbedding.com/cdn/shop/files/white_360x.jpg?v=1713852180",
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
                "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&h=500&fit=crop",
                "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=500&fit=crop"
            ],
            basePrice: 129.99,
            salePrice: 89.99,
            discount: 31,
            inStock: true,
            subtitle: "100% Egyptian cotton, 1000 Thread count",
            description: "Experience unparalleled comfort with our Luxe Sateen Sheet Set. Crafted from premium Egyptian cotton with a luxurious 1000 thread count, these sheets offer exceptional softness, durability, and a beautiful lustrous finish that transforms your bedroom into a five-star retreat.",
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
                    "1 fitted sheet",
                    "2 pillow covers",
                    "1 flat sheet"
                ],
                splitKing: [
                    "2 Twin XL Fitted Sheets",
                    "2 Pillow covers",
                    "1 Flat Sheet"
                ]
            }
        },
        {
            id: 2,
            name: "Classic Sateen Sheet Set",
            image: "https://goodsleepbedding.com/cdn/shop/files/1mainimage_0db89fbf-7388-4bde-b418-044ae7111059.jpg?v=1714472507",
            images: [
                "https://goodsleepbedding.com/cdn/shop/files/1mainimage_0db89fbf-7388-4bde-b418-044ae7111059.jpg?v=1714472507",
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
                "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&h=500&fit=crop"
            ],
            basePrice: 99.99,
            salePrice: 69.99,
            discount: 30,
            inStock: true,
            subtitle: "Premium Cotton Blend, 800 Thread count",
            description: "Our Classic Sateen Sheet Set blends timeless style with comfort. It's breathable, smooth, and ideal for year-round luxury sleep.",
            colors: [{ code: "#991b1b", name: "Red", price: 0 },
            { code: "#d6d3d1", name: "Stone", price: 10 },
            { code: "#fef2f2", name: "Cream", price: 5 },
            { code: "#1e3a8a", name: "Navy", price: 15 },
            { code: "#4ade80", name: "Mint", price: 8 },
            { code: "#0ea5e9", name: "Sky", price: 12 },
            { code: "#facc15", name: "Yellow", price: 5 },
            { code: "#334155", name: "Slate", price: 10 },
            ],
            sizes: [
                { name: "Twin", price: 0, note: "39\" x 75\"" },
                { name: "Full", price: 10, note: "54\" x 75\"" },
                { name: "Queen", price: 15, note: "60\" x 80\"" },
                { name: "King", price: 20, note: "76\" x 80\"" },
                { name: "California King", price: 25, note: "72\" x 84\"" }
            ],
            whatsIncluded: {
                standard: [
                    "1 fitted sheet",
                    "2 pillow covers",
                    "1 flat sheet"
                ]
            }
        },
        {
            id: 3,
            name: "Premium Sateen Sheet Set",
            image: "https://goodsleepbedding.com/cdn/shop/files/1_5e46230f-9982-413f-80a7-c39bb1a08c55.jpg?v=1714473684",
            images: [
                "https://goodsleepbedding.com/cdn/shop/files/1_5e46230f-9982-413f-80a7-c39bb1a08c55.jpg?v=1714473684",
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop"
            ],
            basePrice: 149.99,
            salePrice: 99.99,
            discount: 33,
            inStock: true,
            subtitle: "Luxury Percale Weave, 1200 Thread count",
            description: "Experience hotel-like comfort at home with our Premium Sateen Sheet Set. Made with long-staple cotton and a silky sateen weave.",
            colors: [
                { code: "#FFFFFF", name: "White", price: 0 },
                { code: "#FEE2E2", name: "Pink", price: 0 }
            ],
            sizes: [
                { name: "Twin", price: 0, note: "39\" x 75\"" },
                { name: "Full", price: 10, note: "54\" x 75\"" },
                { name: "Queen", price: 15, note: "60\" x 80\"" },
                { name: "King", price: 20, note: "76\" x 80\"" },
                { name: "California King", price: 25, note: "72\" x 84\"" }
            ],
            whatsIncluded: {
                standard: [
                    "1 fitted sheet",
                    "2 pillow covers",
                    "1 flat sheet"
                ]
            }
        }
    ];

    const { id } = useParams(); // yeh string hota hai


    useEffect(() => {
        // Save allProducts to localStorage only once
        const existing = localStorage.getItem('products');
        if (!existing) {
          localStorage.setItem('products', JSON.stringify(allProducts));
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
            <div className="text-center">
                <h2 className="text-2xl font-light text-gray-600">Product not found</h2>
            </div>
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
                            {/* Left: Thumbnails */}
                            <div className="flex lg:flex-col flex-row gap-3 order-2 lg:order-1">
                                {product.images.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`w-16 h-16 lg:w-20 lg:h-20 border-2 rounded-lg overflow-hidden transition-all ${selectedImage === index ? 'border-gray-800' : 'border-gray-200 hover:border-gray-400'
                                            }`}
                                    >
                                        <img
                                            src={img}
                                            alt={`${product.name} ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>

                            {/* Right: Main Image */}
                            <div className="order-1 lg:order-2">
                                <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
                                    <img
                                        src={product.images[selectedImage]}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>


                        {/* Product Info */}
                        <div className="space-y-8">
                            {/* Header */}
                            <div>
                                <h1 className="text-3xl lg:text-4xl font-light text-gray-800 mb-2">
                                    {product.name}
                                </h1>
                                <p className="text-lg text-gray-600 mb-4">
                                    {product.subtitle}
                                </p>

                                {/* Price */}
                                <div className="flex items-center space-x-3 mb-6">
                                    <span className="text-2xl text-gray-400 line-through">
                                        ${getOriginalTotalPrice().toFixed(2)}
                                    </span>
                                    <span className="text-3xl font-medium text-gray-800">
                                        ${getTotalPrice().toFixed(2)}
                                    </span>
                                </div>
                            </div>

                            {/* What's Included */}
                            <div>
                                <h3 className="text-lg font-medium text-gray-800 mb-3">What's Included</h3>
                                <p className="text-gray-600 mb-3">
                                    {selectedSize?.name === 'Split King' ? 'The Split King 5-piece set includes' : 'The 4-piece set includes'}
                                </p>
                                <ul className="space-y-1">
                                    {(selectedSize?.name === 'Split King' ? product.whatsIncluded.splitKing : product.whatsIncluded.standard).map((item, index) => (
                                        <li key={index} className="flex items-center text-gray-700">
                                            <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Color Selection */}
                            <div>
                                <h3 className="text-lg font-medium text-gray-800 mb-3">
                                    Color <span className="font-normal text-gray-600">{selectedColor?.name}</span>
                                </h3>
                                <div className="grid grid-cols-7 gap-3">
                                    {product.colors.map((color, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedColor(color)}
                                            className={`w-12 h-12 rounded-full border-2 transition-all ${selectedColor?.name === color.name
                                                ? 'border-gray-800 scale-110'
                                                : 'border-gray-300 hover:border-gray-500'
                                                }`}
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

                            {/* Size Selection */}
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-lg font-medium text-gray-800">Size</h3>
                                    <button className="text-sm text-gray-600 underline hover:text-gray-800">
                                        Size guide
                                    </button>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {product.sizes.map((size, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedSize(size)}
                                            className={`p-3 border rounded-lg text-center transition-all ${selectedSize?.name === size.name
                                                ? 'border-gray-800 bg-gray-50'
                                                : 'border-gray-300 hover:border-gray-500'
                                                }`}
                                        >
                                            <div className="font-medium text-gray-800">{size.name}</div>

                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity and Add to Cart */}
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <label className="text-lg font-medium text-gray-800">Quantity:</label>
                                    <div className="flex items-center border border-gray-300 rounded-lg">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="px-3 py-2 hover:bg-gray-50"
                                        >
                                            -
                                        </button>
                                        <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="px-3 py-2 hover:bg-gray-50"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <button onClick={handleAddToCart} className="w-full bg-gray-800 text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-900 transition-colors">
                                    Add to Cart
                                    {/* - ${getTotalPrice().toFixed(2)} */}
                                </button>
                            </div>

                            {/* Product Description */}
                            <div className="pt-6 border-t border-gray-200">
                                <p className="text-gray-700 leading-relaxed">
                                    {product.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="max-w-7xl bg-red-200 mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                {/* Left Image */}
                <div>
                    <img
                        src="https://goodsleepbedding.com/cdn/shop/files/Good_Sleep_Bedding.png?v=1710924624&width=670"
                        alt="Bedding"
                        className="w-full h-auto rounded-lg shadow"
                    />
                </div>

                {/* Right Text Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Box 1 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Unparalleled Quality</h3>
                        <p className="text-gray-600 text-sm">
                            We pride ourselves on offering bedding of the highest quality. Our products are crafted from premium materials with meticulous attention to detail, ensuring durability and long-lasting comfort.
                        </p>
                    </div>

                    {/* Box 2 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Luxurious Comfort</h3>
                        <p className="text-gray-600 text-sm">
                            Experience the epitome of comfort with our luxurious bedding collections. From silky-smooth textures to cozy warmth, our bedding is designed to enhance your sleep experience and provide a restful night's sleep.
                        </p>
                    </div>

                    {/* Box 3 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Chemical-Free Materials</h3>
                        <p className="text-gray-600 text-sm">
                            We understand the importance of your health and well-being, which is why all our bedding is crafted from chemical-free materials. Rest easy knowing that our products are free from harmful toxins.
                        </p>
                    </div>

                    {/* Box 4 */}
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

export default EightHundredProduct;