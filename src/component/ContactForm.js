import React, { useState } from 'react';
import Navbar from './Navbar';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        comment: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate fields
        if (!formData.name || !formData.phone || !formData.email || !formData.comment) {
            alert('Please fill in all fields.');
            return;
        }

        // Save to localStorage
        const existingData = JSON.parse(localStorage.getItem('contactMessages')) || [];
        const updatedData = [...existingData, formData];
        localStorage.setItem('contactMessages', JSON.stringify(updatedData));

        alert('Your message has been saved!');
        setFormData({ name: '', phone: '', email: '', comment: '' });
    };

    return (
        <>

            <Navbar />
            <div className='pt-20'>
                <div className="w-full md:w-1/2 mx-auto bg-white p-6 shadow-md rounded-md mt-8">
                    <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
                    <form onSubmit={handleSubmit} className="space-y-4 ">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-md"
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-md"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-md"
                            required
                        />
                        <textarea
                            name="comment"
                            placeholder="Your Comment"
                            value={formData.comment}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-md"
                            rows={4}
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-stone-700 text-white py-2 rounded-md hover:bg-stone-800"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

        </>
    );
}
