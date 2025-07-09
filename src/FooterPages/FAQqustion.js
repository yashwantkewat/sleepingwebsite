import React, { useState } from "react";
import Navbar from "../component/Navbar";

const faqs = [
    {
        question: "How should I wash my cotton sheets?",
        answer:
            "Machine wash your cotton sheets in cold or warm water with mild detergent. Tumble dry on low to medium heat and avoid over-drying.",
    },
    {
        question: "Can I use bleach on bamboo sheets?",
        answer:
            "No. Bleach and fabric softeners can damage bamboo fibers. Use a gentle, liquid detergent and cold water.",
    },
    {
        question: "How often should I wash duvet covers and pillowcases?",
        answer:
            "It’s best to wash them every 1–2 weeks to keep them fresh and hygienic.",
    },
    {
        question: "What’s the best way to store bed linens?",
        answer:
            "Store your linens in a cool, dry place using cotton or fabric bags. Avoid plastic and ensure the fabric is completely dry before folding.",
    },
    {
        question: "How can I remove stains from bed sheets?",
        answer:
            "Treat stains quickly using cold water. Baking soda paste helps with oil stains, while hydrogen peroxide is effective on protein stains like blood.",
    },
    {
        question: "Can I iron sateen sheets?",
        answer:
            "Yes, but iron them inside out on low heat. This helps maintain their natural shine.",
    },
    {
        question: "How should I care for fitted sheets?",
        answer:
            "Wash weekly with similar fabrics, fold immediately after drying, and use the right mattress size to avoid wear and tear.",
    },
];

const CareFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <>
            <Navbar />
            <div className="pt-20">
                <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
                    <h2 className="text-3xl font-bold text-center mb-8">FAQs – Care Instructions</h2>

                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            onClick={() => toggle(index)}
                            className={`border-b border-gray-300 py-4 px-2 cursor-pointer transition-colors duration-200 rounded
            hover:bg-red-200 hover:text-grey-200`}
                        >
                            <h3 className="text-lg text-red-500 font-medium flex justify-between items-center">
                                {faq.question}
                                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
                            </h3>
                            {openIndex === index && (
                                <p className="text-gray-600 mt-2">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
};

export default CareFAQ;
