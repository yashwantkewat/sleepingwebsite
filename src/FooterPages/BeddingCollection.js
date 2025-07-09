import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../component/Navbar';
function BeddingCollection() {

     const products = [
    {
      id: 1,
      title: "Sheets Sets",
      productCount: "4 Products",
      image: "https://goodsleepbedding.com/cdn/shop/collections/sheet-set-golden_540x.jpg"
    },
    {
      id: 2,
      title: "Duvet Covers",
      productCount: "3 Products",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Fitted Sheets",
      productCount: "3 Products",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "Pillowcases",
      productCount: "3 Products",
      image: "https://goodsleepbedding.com/cdn/shop/collections/pillow-case-taupe.jpg"
    },
    {
      id: 5,
      title: "Blankets",
      productCount: "3 Products",
      image: "https://goodsleepbedding.com/cdn/shop/collections/1.png"
    },
     {
      id: 6,
      title: "1000 Thread Count",
      productCount: "3 Products",
      image: "https://goodsleepbedding.com/cdn/shop/collections/sheet-set-golden_540x.jpg"
    },
    {
      id: 7,
      title: "800 Thread Count",
      productCount: "1 Products",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 8,
      title: "600 Thread Count",
      productCount: "3 Products",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 9,
      title: "Bamboo",
      productCount: "1 Products",
      image: "https://goodsleepbedding.com/cdn/shop/collections/pillow-case-taupe.jpg"
    },
    {
      id: 10,
      title: "",
      productCount: "6 Products",
      image: "https://goodsleepbedding.com/cdn/shop/collections/1.png"
    },
    {
      id: 11,
      title: "sateen",
      productCount: "7 Products",
      image: "https://goodsleepbedding.com/cdn/shop/collections/1.png"
    }
  ];


  return (
    <>
    <Navbar/>
      <div className='pt-20'>
         <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
             <div className="max-w-6xl mx-auto">
               {/* Header */}
               <div className="text-center mb-12">
                 <h2 className="text-4xl font-light text-gray-800 tracking-wide">
                   Our Collection
                 </h2>
               </div>
       
               {/* Product Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {products.map((product) => {
                   const routePath = `/${product.title.toLowerCase().replace(/\s+/g, "-")}`;
                   return (
                     <Link to={routePath} key={product.id} className="group cursor-pointer block">
                       {/* Image Container */}
                       <div className="relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
                         <div className="aspect-w-4 aspect-h-3 w-full h-72">
                           <img
                             src={product.image}
                             alt={product.title}
                             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                           />
                         </div>
                       </div>
       
                       {/* Product Info */}
                       <div className="mt-6 text-center">
                         <h3 className="text-xl font-medium text-gray-800 mb-2">
                           {product.title}
                         </h3>
                         <p className="text-sm text-gray-500 tracking-wide">
                           {product.productCount}
                         </p>
                       </div>
                     </Link>
                   );
                 })}
               </div>
             </div>
           </div>
       
      </div>
    </>
  )
}

export default BeddingCollection
