import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import { useNavigate } from 'react-router-dom';

export default function ForgetPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.find((user) => user.email === email);

        if (userExists) {
            setMessage('Password reset link has been sent to your email.');
            alert('Password reset link sent!');
            setEmail('');
        } else {
            setMessage('Email not found. Please try again or create an account.');
        }
    };

    const handleCancel = () => {
        navigate('/account/login'); // You can update the route as needed
    };

    return (
        <>
            <Navbar />
            <div className="pt-40 mb-20 ">
                <div className="w-full md:w-1/3 mx-auto bg-white p-6 border border-gray-100 shadow-md rounded-md">
                    <h2 className="text-2xl font-bold mb-4 text-center">Reset Your Password</h2>
                    <h2 className="text-1xl  mb-4 text-center">we will send you an email to reset your password.</h2>

                    <form onSubmit={handleSubmit} className="space-y-4  p-8">
                        {message && (
                            <div className="text-sm text-green-600 font-medium text-center">{message}</div>
                        )}

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your registered email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 p-2 rounded-md"
                            required
                        />

                        <div className="flex justify-between">
                            <button
                                type="submit"
                                className="bg-stone-700 w-full text-white px-4 py-2 rounded-md hover:bg-stone-800"
                            >
                                Submit
                            </button>
                        </div>
                        <div className="flex justify-between">

                            <button
                                type="button"
                                onClick={handleCancel}
                                className="bg-gray-300 w-full text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}
