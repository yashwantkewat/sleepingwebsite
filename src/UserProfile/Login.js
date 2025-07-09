import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';

export default function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const matchedUser = users.find(
            user => user.email === formData.email && user.password === formData.password
        );

        if (matchedUser) {
            alert('Login successful!');
            // Navigate to home or dashboard
            navigate('/');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <>
            <Navbar />
            <div className="pt-40 mb-20">
                <div className="w-full md:w-1/3 mx-auto bg-white p-6 border border-gray-200 shadow-md rounded-md">
                    <h2 className="text-2xl  mb-4 text-center">Login</h2>

                    {error && (
                        <p className="text-center text-red-600 mb-4">{error}</p>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-md"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-md"
                            required
                        />

                        <button
                            type="submit"
                            className="w-full bg-stone-700 text-white py-2 rounded-md hover:bg-stone-800"
                        >
                            Login
                        </button>
                    </form>

                    <div className="text-center text-sm mt-4 pl-20 flex flex-col-2 items-center gap-2">
                        <span className="inline-block">
                            <Link to="/account/register" className=" hover:underline">
                                Create Account
                            </Link>
                            <hr className="border-t-2 border-grey-600 mt-1 w-full" />
                        </span>

                        <span className="inline-block">
                            <Link to="/account/forget-password" className=" text-center hover:underline">
                                Forgot Password?
                            </Link>
                            <hr className="border-t-2 border-grey-600 mt-1 w-full" />
                        </span>
                    </div>

                </div>
            </div>
        </>
    );
}
