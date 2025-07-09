import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../component/Navbar';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));

    alert("Registration successful!");
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
  };

  return (
    <>
    <Navbar/>
    <div className='pt-40 mb-20'>
      <div className="w-full md:w-1/3 mx-auto bg-white p-6 border border-grey-100 shadow-md rounded-md mt-8 ">
        <h2 className="text-2xl font-bold mb-4 text-center ">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4 ">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
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
            Register
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          <Link to="/" className=" hover:underline">Return to Store </Link>
        </p>
      </div>
    </div>
    </>
  );
}
