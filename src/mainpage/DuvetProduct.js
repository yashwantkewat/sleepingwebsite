import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar';
import { useParams } from 'react-router-dom';
import { addToCart } from '../redux/Cartslice';
import { useDispatch } from 'react-redux';

const DuvetProduct = () => {
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

    const duvetProducts = [
        {
            id: 1,
            name: "Luxury Duvet Cover Set",
            image: "https://images.playground.com/d7078128-b1cf-4396-a433-d353fddf15f9.jpeg",
            images: [
                "https://images.playground.com/d7078128-b1cf-4396-a433-d353fddf15f9.jpeg",
                "https://images.playground.com/e927195d-2850-4db6-b9e6-0259d6d70af4.jpeg",
                "https://images.playground.com/cb178ca8-10bf-4f06-8236-825affc666c6.jpeg",
                "https://images.playground.com/04940176-5a50-472b-bb81-6654f051c26e.jpeg"
            ],
            basePrice: 159.99,
            salePrice: 109.99,
            discount: 30,
            inStock: true,
            subtitle: "100% Organic Cotton, Zipper Closure",
            description: "Upgrade your bedroom with our Luxury Duvet Cover Set, made with ultra-soft organic cotton and a smooth sateen finish. Breathable and elegant, it ensures both comfort and style.",
            colors: [
                { code: "#F9FAFB", name: "Snow White", price: 0 },
                { code: "#E0E0E0", name: "Light Grey", price: 5 },
                { code: "#D97706", name: "Mustard", price: 10 },
                { code: "#1E40AF", name: "Deep Blue", price: 15 }
            ],
            sizes: [
                { name: "Twin", price: 0, note: "68\" x 86\"" },
                { name: "Queen", price: 10, note: "88\" x 92\"" },
                { name: "King", price: 15, note: "104\" x 92\"" }
            ],
            whatsIncluded: {
                standard: [
                    "1 duvet cover",
                    "2 pillow shams"
                ]
            }
        },
        {
            id: 2,
            name: "Classic Cotton Duvet Cover",
            image: "https://goodsleepbedding.com/cdn/shop/files/duvet2.jpg?v=1714472507",
            images: [
                "https://goodsleepbedding.com/cdn/shop/files/duvet2.jpg?v=1714472507",
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop"
            ],
            basePrice: 129.99,
            salePrice: 89.99,
            discount: 31,
            inStock: true,
            subtitle: "Soft Washed Cotton, Envelope Closure",
            description: "Our Classic Cotton Duvet Cover offers the softness of premium washed cotton with timeless comfort. Easy to maintain and breathable for all seasons.",
            colors: [
                { code: "#F3F4F6", name: "Silver", price: 0 },
                { code: "#B91C1C", name: "Crimson", price: 10 },
                { code: "#047857", name: "Forest", price: 8 }
            ],
            sizes: [
                { name: "Twin", price: 0, note: "68\" x 86\"" },
                { name: "Full/Queen", price: 10, note: "88\" x 92\"" },
                { name: "King/Cal King", price: 15, note: "104\" x 92\"" }
            ],
            whatsIncluded: {
                standard: [
                    "1 duvet cover",
                    "2 pillow shams"
                ]
            }
        }
    ];

    const { id } = useParams();


    useEffect(() => {
        // Save allProducts to localStorage only once
        const existing = localStorage.getItem('products');
        if (!existing) {
            localStorage.setItem('products', JSON.stringify(duvetProducts));
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
            <h2 className="text-2xl text-gray-600">Duvet not found</h2>
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

                                <button
                                    onClick={handleAddToCart}
                                    className="w-full bg-gray-800 text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-900 transition-colors">
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

export default DuvetProduct;
