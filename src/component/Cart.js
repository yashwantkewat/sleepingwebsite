import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, selectCartItems, } from '../redux/Cartslice';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  
  return (
    <>
      <Navbar />
      <div className="pt-32 px-4 lg:px-20">
        <h2 className="text-3xl font-semibold mb-6">Your cart</h2>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left: Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col lg:flex-row items-center justify-between bg-gray-100 p-4 rounded">
                {/* Image and Info */}
                <div className="flex items-center gap-4 w-full lg:w-2/3">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.variant || 'Light Blue / King'}</p>
                    <p className="text-sm text-gray-600 mt-1">₹{item.price}</p>
                  </div>
                </div>

                {/* Quantity, Price, Remove */}
                <div className="flex flex-col lg:flex-row items-center gap-4 mt-4 lg:mt-0">
                  {/* Quantity */}
                 

                  {/* Total price */}
                  <p className="text-lg font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>

                  {/* Remove button */}
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="border px-4 py-1 text-sm hover:bg-gray-200 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* Note Input */}
            <div>
              <label className="block font-medium mb-2">Add a note to your order</label>
              <textarea className="w-full border border-red-100 p-2 rounded h-24" placeholder="Write your note here..." />
            </div>
          </div>

          {/* Right: Summary */}
          <div className="bg-gray-50 p-6 rounded shadow-md h-fit">
            <div className="flex justify-between mb-2 text-gray-600">
              <span>Subtotal</span>
              <span>₹{getTotal().toFixed(2)}</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Taxes and shipping calculated at checkout.
            </p>
            <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-900">

              <Link to="/Checkout" className='font-bold'>check out</Link>

            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
