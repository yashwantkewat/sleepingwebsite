import React from 'react';
import Navbar from '../component/Navbar';

const Shipping = () => {
    return (

        <>
            <Navbar />
            <div className='pt-20'>
                <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
                        <h1 className="text-3xl font-bold text-gray-800 mb-6">Shipping </h1>

                        <p className="text-gray-700 mb-4">
                            Good Sleep Bedding is pleased to offer complimentary Expedited shipping on all orders to a USA address. Most purchases ship within 2-4 business days        </p>

                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Order Tracking</h2>
                        <p className="text-gray-700 mb-6">
                            Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this to track your shipment in real-time.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Delivery Issues</h2>
                        <p className="text-gray-700 mb-6">
                            If your package hasn’t arrived within the expected timeframe, please contact our customer support at <a href="mailto:support@example.com" className="text-blue-600 underline">support@example.com</a> for assistance.
                        </p>

                        <p className="text-sm text-gray-500">
                            Note: Delivery timelines may be affected by holidays or external courier delays.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shipping;
