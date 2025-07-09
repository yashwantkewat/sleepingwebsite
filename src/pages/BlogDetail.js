import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {  Share2, ArrowLeft, ArrowRight, Facebook, Twitter } from 'lucide-react';
import blogPosts from '../data/blogPosts';
import ReactMarkdown from 'react-markdown';
import Navbar from '../component/Navbar';

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id === Number(id));

  if (!blog) {
    return <div className="text-center py-20 text-red-500">Blog post not found</div>;
  }

  const blogId = Number(id);
  const previousPost = blogPosts.find((post) => post.id === blogId - 1);
  const nextPost = blogPosts.find((post) => post.id === blogId + 1);



  return (
    <>
      <Navbar />
      <div className='pt-20'>
        <div className="min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-8">

            {/* Article Container */}
            <article className="rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 sm:p-6 md:p-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 mb-6 text-center">
                  {blog.title}
                </h1>

                {blog.image && (
                  <div className="w-full h-60 sm:h-80 md:h-100 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="text-sm text-gray-500 mb-8 border-b border-gray-200 pb-4">
                  Estimated reading time: {blog.readTime}
                </div>

                {/* Main Body */}
                <div className="prose prose-lg max-w-none text-gray-700">
                  <div className="space-y-6">
                    <p className="text-lg">
                      Remember that feeling of snuggling into bed on a crisp winter night? Yeah, summer makes that a distant
                      memory. Sticky sheets, tossing and turning – ugh! Don't worry, I've been there (trust me, the night sweats are real).
                      But what if I told you the key to a cool, comfortable summer sleep could be hiding right under you?
                    </p>

                    <h2><b> Enter the Magic of Bamboo Sheets! </b></h2>
                    <p>
                      These aren't your grandma's cotton sheets. <a href="/Bamboo" className="text-blue-600 hover:underline">Cooling Bamboo Bed Sheets</a> are
                      like cool relief in sheet form. They let your skin breathe and wick moisture – no more night sweats!
                    </p>

                    <h2> <b>But Wait, There's More!  </b> </h2>
                    <p>
                      Bamboo sheets aren't just about temperature control. They're seriously soft – like silk! And they only get softer after every wash.
                    </p>

                    <h2><b> Bonus: Hypoallergenic Superhero  </b>  </h2>
                    <p>
                      Bamboo naturally resists allergens, mold, and mildew. It's sustainable too – less water and no pesticides!
                    </p>

                    <h2>Finding Your Perfect Bamboo Match</h2>
                    <p>
                      <b>
                        Before you buy, remember:

                      </b>
                    </p>
                    <ul>
                      <li> Go for 100% bamboo, not blends</li>
                      <li>Thread count 250–350 is ideal</li>
                      <li> Choose between sateen (smooth) or twill (matte)</li>
                      <li> Look for OEKO-TEX or USDA Organic certified</li>
                      <li>Read reviews for cooling performance</li>
                      <li>Wash with cold water & low heat dry</li>
                    </ul>

                    <p>
                      <b>
                        So, what are you waiting for? Try bamboo sheets and transform your summer sleep!

                      </b>
                    </p>

                    {/* Optional Markdown Content */}
                    {blog.content && blog.content !== blog.excerpt && (
                      <ReactMarkdown
                        components={{
                          h1: ({ children }) => <h1 className="text-3xl font-semibold mt-8 mb-4">{children}</h1>,
                          h2: ({ children }) => <h2 className="text-2xl font-semibold mt-6 mb-3">{children}</h2>,
                          p: ({ children }) => <p className="mb-4">{children}</p>,
                          a: ({ children, href }) => <a href={href} className="text-blue-600 underline">{children}</a>,
                          ul: ({ children }) => <ul className="list-disc ml-6 space-y-1">{children}</ul>,
                          li: ({ children }) => <li>{children}</li>,
                        }}
                      >
                        {blog.content}
                      </ReactMarkdown>
                    )}
                  </div>
                </div>
              </div>
            </article>

            {/* Share and Tags Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-10 mb-6">
              <div className="flex items-center gap-4 border border-gray-300 px-4 py-2 rounded-md w-fit">
                {/* Share Icon + Text */}
                <div className="flex items-center gap-2 text-gray-700">
                  <Share2 className="w-4 h-4" />
                  <span className="text-sm font-medium">Share</span>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-3">
                  <a
                    href='https://pinterest.com'
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Pinterest"
                    className="text-gray-700 hover:text-red-600"
                  >
                    {/* <Pinterest className="w-5 h-5" /> */}
                  </a>
                  <a
                    href='https://twitter.com'
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Twitter"
                    className="text-gray-700 hover:text-blue-500"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href='https://www.facebook.com'
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook"
                    className="text-gray-700 hover:text-blue-700"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>

              
            </div>

            {/* Prev/Next Post Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-12 pt-6 border-t border-gray-200">
              {previousPost ? (
                <Link
                  to={`/pages/blogs/${previousPost.id}`}
                  className="inline-flex items-center text-gray-600 hover:text-gray-900 transition"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" /> Previous
                </Link>
              ) : <div />}

              {nextPost ? (
                <Link
                  to={`/pages/blogs/${nextPost.id}`}
                  className="inline-flex items-center text-gray-600 hover:text-gray-900 transition"
                >
                  Next <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              ) : <div />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
