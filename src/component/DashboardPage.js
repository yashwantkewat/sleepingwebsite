import React, { useState } from 'react';
import Navbar from './Navbar';
import ChatWidget from '../ChatFile/Chat';
import { Link } from 'react-router-dom';
import { Waves, Wind, Shield, DollarSign, ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';
import "../App.css"


export default function DashboardPage() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);


    const products = [
        {
            id: 1,
            title: "Sheets Sets",
            image: "https://goodsleepbedding.com/cdn/shop/collections/sheet-set-golden_540x.jpg"
        },
        {
            id: 2,
            title: "Duvet Covers",
            image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop&crop=center"
        },
        {
            id: 3,
            title: "Fitted Sheets",
            image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop&crop=center"
        },
        {
            id: 4,
            title: "Pillowcases",
            image: "https://goodsleepbedding.com/cdn/shop/collections/pillow-case-taupe.jpg"
        },
        {
            id: 5,
            title: "Blankets",
            image: "https://goodsleepbedding.com/cdn/shop/collections/1.png"
        }
    ];

    const features = [
        {
            icon: <Waves className="w-12 h-12 text-amber-600" />,
            title: "Luxurious",
            description: "Softness and comfort of the natural long staple weaves, makes our sheets luxurious in the true royal sense of relaxation."
        },
        {
            icon: <Wind className="w-12 h-12 text-amber-600" />,
            title: "Breathable",
            description: "Our superior quality beddings are super breathable having soothing cooling effect that eases you in to sleep."
        },
        {
            icon: <Shield className="w-12 h-12 text-amber-600" />,
            title: "Chemical Free",
            description: "Our high-quality beddings are designed keeping sensitive skins in mind. They are absent of toxic chemical and produced in ecofriendly manner."
        },
        {
            icon: <DollarSign className="w-12 h-12 text-amber-600" />,
            title: "Affordable",
            description: "Our premium quality beddings are economically priced, so everyone can invest in a good sleep."
        }
    ];


    const testimonials = [
        {
            id: 1,
            text: "I recently bought an extra thick king size mattress and was unhappy that most king size bedding hangs only a couple inches over the edge of the bed, covering only half the depth of the mattress. Neither my sheets nor my comforter covered the entire bed. After a little research, I discovered OVERSIZED KING comforters do exist and they cover the entire mattress. I purchased this duvet cover in two colors to protect the expensive down comforter, tossed aside the top sheet, and I LOVE IT! It's easy to put the duvet cover on the comforter for washing and the bed can be made in seconds.",
            author: "Spenser Amadeus",
            rating: 5
        },
        {
            id: 2,
            text: "These sheets are absolutely amazing! The quality is outstanding and they fit perfectly on my oversized mattress. The fabric feels luxurious and gets softer with each wash. I've been sleeping so much better since I got these sheets. Highly recommend to anyone looking for premium bedding.",
            author: "Sarah Johnson",
            rating: 5
        },
        {
            id: 3,
            text: "Best purchase I've made in years! The breathable fabric keeps me cool all night, and the deep pockets ensure they stay in place. The customer service was excellent too. Will definitely be ordering more sets in different colors.",
            author: "Michael Chen",
            rating: 5
        }
    ];

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentReview = testimonials[currentTestimonial];


    const images = [
        {
            id: 1,
            image: "https://goodsleepbedding.com/cdn/shop/articles/Mothers_Day_Blog_1296x.png?v=1651687118",
            title: "Joys of Motherhood and Sleepless Nights",
            description: "Rejuvenating moms with a good night's sleep is the best gift we ca...",
            link: "/pages/our-story"
        },
        {
            id: 2,
            image: "https://goodsleepbedding.com/cdn/shop/articles/blog3-serene-bedroom_360x.jpg?v=1651029399",
            title: "Turn Your Bedroom a Sleep Sanctuary",
            description: "At the end of the day climbing into bed after a long day is therape...",
            link: "/pages/our-story"
        },
        {
            id: 3,
            image: "https://goodsleepbedding.com/cdn/shop/articles/blog2-every-thread-counts_c2c4a322-c46a-4427-aa75-ee3edd94ecf1_360x.png?v=1648041890",
            title: "Is thread count important when buying sheets?",
            description: "One of the essential things to look for when buying bed sheets are ...",
            link: "/pages/our-story"
        },
        {
            id: 4,
            image: "https://goodsleepbedding.com/cdn/shop/articles/blog-teddy_540x.png?v=1648041807",
            title: "How does egyptian cotton make a difference?",
            description: "With Good Sleep Bedding made from Egyptian cotton, you can enjoy th...",
            link: "/pages/our-story"
        }
    ];

    
    return (
        <>
            <div className="min-h-screen  relative overflow-hidden dashimg ">

                {/* Navigation */}
                <Navbar />

                {/* Main Content */}
                <div className="relative z-0 flex-1 flex items-center justify-center px-4 py-20 ">
                    <div className="text-center mt-80">
                        <button className="bg-white hover:bg-stone-50 text-stone-800 font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                            Shop now
                        </button>
                    </div>
                </div>

                {/* Chat Widget */}
                <ChatWidget />

            </div>

            {/* all productRow */}
            <div className="flex overflow-x-auto space-x-6 mt-20 px-4 m-5">
                {products.map((product) => {
                    const routePath = `/${product.title.toLowerCase().replace(/\s+/g, "-")}`;
                    return (
                        <Link
                            to={routePath}
                            key={product.id}
                            className="flex-shrink-0 w-80 group cursor-pointer block"
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
                                <div className="aspect-w-3 aspect-h-3 w-full h-110 relative">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                                    />

                                    {/* Title at bottom of image */}
                                    <div className="absolute bottom-0 left-0 right-0  bg-opacity-50 text-white text-center py-2">
                                        <h3 className="text-lg font-medium">{product.title}</h3>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>

            {/* icon section  */}
            <div className="bg-gray-50 py-16 mt-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                                <div className="flex justify-center mb-6">
                                    <div className="p-4 bg-white rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* moving section  */}
            <div className="bg-gray-50 py-16 mt-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Title and Reviews */}
                        <div className="space-y-8  ">
                            <div>
                                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                    Our<br />
                                    Testimonials
                                </h2>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-5 fill-amber-400 text-amber-400" />
                                    ))}
                                    <span className="text-gray-600 ml-2">2,066 Reviews</span>
                                </div>

                                <button className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                                    Amazon Reviews
                                </button>
                            </div>
                        </div>

                        {/* Right Side - Testimonial Card */}
                        <div className="relative">
                            <div className="bg-white rounded-2xl p-5 shadow-lg">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                                        SWEET SHEETS
                                    </h3>
                                </div>

                                <div className="space-y-6">
                                    <p className="text-gray-600 leading-relaxed italic text-sm sm:text-base">
                                        "{currentReview.text}"
                                    </p>

                                    <div className="flex items-center space-x-2">
                                        {[...Array(currentReview.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>

                                    <div className="pt-4 border-t border-gray-200">
                                        <p className="text-amber-600 font-semibold">
                                            {currentReview.author}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Arrows */}
                            <div className="flex justify-between items-center mt-6">
                                <button
                                    onClick={prevTestimonial}
                                    className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
                                    aria-label="Previous testimonial"
                                >
                                    <ChevronLeft className="w-6 h-6 text-gray-600" />
                                </button>

                                <div className="flex space-x-2">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentTestimonial(index)}
                                            className={`w-3 h-3 rounded-full transition-colors duration-200 ${index === currentTestimonial ? 'bg-amber-600' : 'bg-gray-300'
                                                }`}
                                            aria-label={`Go to testimonial ${index + 1}`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={nextTestimonial}
                                    className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
                                    aria-label="Next testimonial"
                                >
                                    <ChevronRight className="w-6 h-6 text-gray-600" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* our story colection  */}

            <div className="bg-white py-16 mt-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {images.map((article) => (
                            <Link to={article.link} key={article.id} className="group cursor-pointer block">
                                <div className="overflow-hidden rounded-lg mb-4 h-56 ">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-200">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">{article.description}</p>
                                    <div className="flex items-center text-amber-600 group-hover:text-amber-700 transition-colors duration-200">
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
