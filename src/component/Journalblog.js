import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import blogPosts from '../data/blogPosts';

export default function BlogGrid() {
    

    const postsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(blogPosts.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const currentPosts = blogPosts.slice(startIndex, startIndex + postsPerPage);

    const navigate = useNavigate();

    return (

        <>
            <Navbar />
            <div className='pt-20'>
                <div className="max-w-7xl mx-auto px-4 py-8 ">

                    <h2 className="text-2xl  font-serif text-gray-900 leading-tight">
                        BLOG
                    </h2>
                    <hr className='mt-6' />
                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4 mb-12">

                        {currentPosts.map((post) => (

                            <div key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">

                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-88 object-cover"
                                />
                                <div className="p-6">
                                    <h2 className="text-2xl font-serif text-gray-900 mb-4 leading-tight">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                        {post.excerpt}
                                    </p>
                                    <button
                                        onClick={() => navigate(`/pages/blogs/${post.id}`)}
                                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        Read more
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-between">
                        {/* Pagination Buttons */}
                        <div className="flex items-center space-x-2">
                            {[...Array(totalPages)].map((_, index) => {
                                const page = index + 1;
                                return (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${page === currentPage
                                            ? 'bg-gray-800 text-white'
                                            : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                );
                            })}

                            {/* Next Button */}
                            {currentPage < totalPages && (
                                <button
                                    onClick={() => setCurrentPage(currentPage + 1)}
                                    className="w-10 h-10 rounded-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center justify-center transition-colors duration-200"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            )}
                        </div>

                        {/* Page Info */}
                        <div className="text-sm text-gray-600">
                            You're viewing {startIndex + 1}–{Math.min(startIndex + postsPerPage, blogPosts.length)} of {blogPosts.length} blog posts
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

