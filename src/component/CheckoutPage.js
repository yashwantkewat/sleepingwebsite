import React, { useState } from 'react';
import { CreditCard, Lock, ShoppingCart, Mail, MapPin, Eye, EyeOff } from 'lucide-react';
import Navbar from './Navbar';
import { selectCartItems } from '../redux/Cartslice';
import { useSelector } from 'react-redux';

const CheckoutPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        apartment: '',
        city: '',
        state: '',
        zipCode: '',
        phone: '',
        cardNumber: '',
        expiryDate: '',
        securityCode: '',
        nameOnCard: '',
        discountCode: ''
    });

    const [emailForOffers, setEmailForOffers] = useState(true);
    const [saveInfo, setSaveInfo] = useState(false);
    const [useShippingAsBilling, setUseShippingAsBilling] = useState(true);
    const [showSecurityCode, setShowSecurityCode] = useState(false);

    const cartItems = useSelector(selectCartItems);
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 0;
    const total = subtotal + shipping;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Order submitted:', formData);
        alert('Order placed successfully!');
    };

    const applyDiscount = () => {
        if (!formData.discountCode.trim()) {
            alert('Please enter a discount code before applying.');
            return;
        }

        console.log('Applying discount:', formData.discountCode);
        alert('Discount code applied!');
    };


    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 pt-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left: Form Sections */}
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Contact */}
                            <div className="bg-white p-6 rounded-lg shadow-sm border">
                                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                                    <Mail className="w-5 h-5 mr-2" />
                                    Contact
                                </h2>
                                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4" />
                                <div className="flex items-center">
                                    <input type="checkbox" id="emailOffers" checked={emailForOffers} onChange={(e) => setEmailForOffers(e.target.checked)} className="mr-2" />
                                    <label htmlFor="emailOffers">Email me with news and offers</label>
                                </div>
                            </div>

                            {/* Delivery */}
                            <div className="bg-white p-6 rounded-lg shadow-sm border">
                                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                                    <MapPin className="w-5 h-5 mr-2" />
                                    Delivery
                                </h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" name="firstName" placeholder="First name" value={formData.firstName} onChange={handleInputChange} required className="px-4 py-3 border border-gray-300 rounded-lg" />
                                    <input type="text" name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleInputChange} required className="px-4 py-3 border border-gray-300 rounded-lg" />
                                </div>
                                <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} required className="w-full mt-4 px-4 py-3 border border-gray-300 rounded-lg" />
                                <input type="text" name="apartment" placeholder="Apartment, suite, etc. (optional)" value={formData.apartment} onChange={handleInputChange} className="w-full mt-4 px-4 py-3 border border-gray-300 rounded-lg" />
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                                    <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleInputChange} required className="px-4 py-3 border border-gray-300 rounded-lg" />
                                    <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleInputChange} required className="px-4 py-3 border border-gray-300 rounded-lg" />
                                    <input type="text" name="zipCode" placeholder="ZIP code" value={formData.zipCode} onChange={handleInputChange} required className="px-4 py-3 border border-gray-300 rounded-lg" />
                                </div>
                                <input type="tel" name="phone" placeholder="Phone (optional)" value={formData.phone} onChange={handleInputChange} className="w-full mt-4 px-4 py-3 border border-gray-300 rounded-lg" />
                                <div className="mt-4 flex items-center">
                                    <input type="checkbox" id="saveInfo" checked={saveInfo} onChange={(e) => setSaveInfo(e.target.checked)} className="mr-2" />
                                    <label htmlFor="saveInfo">Save this information for next time</label>
                                </div>
                            </div>

                            {/* Payment */}
                            <div className="bg-white p-6 rounded-lg shadow-sm border">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                    <CreditCard className="w-5 h-5 mr-2" /> Payment
                                </h2>
                                <input type="text" name="cardNumber" placeholder="Card number" value={formData.cardNumber} onChange={handleInputChange} required className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg" />
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" name="expiryDate" placeholder="Expiration date (MM / YY)" value={formData.expiryDate} onChange={handleInputChange} required className="px-4 py-3 border border-gray-300 rounded-lg" />
                                    <div className="relative">
                                        <input type={showSecurityCode ? 'text' : 'password'} name="securityCode" placeholder="Security code" value={formData.securityCode} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                                        <button type="button" onClick={() => setShowSecurityCode(!showSecurityCode)} className="absolute right-3 top-3">
                                            {showSecurityCode ? <EyeOff /> : <Eye />}
                                        </button>
                                    </div>
                                </div>
                                <input type="text" name="nameOnCard" placeholder="Name on card" value={formData.nameOnCard} onChange={handleInputChange} required className="w-full mt-4 px-4 py-3 border border-gray-300 rounded-lg" />
                                <div className="mt-4 flex items-center">
                                    <input type="checkbox" id="useShippingAsBilling" checked={useShippingAsBilling} onChange={(e) => setUseShippingAsBilling(e.target.checked)} className="mr-2" />
                                    <label htmlFor="useShippingAsBilling">Use shipping address as billing address</label>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-blue-300 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center">
                                <Lock className="w-5 h-5 mr-2" /> Pay now
                            </button>

                            <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-600">
                                <a href="/pages/return-policy" className="hover:underline">Refund policy</a>
                                <a href="/pages/privacy-policy" className="hover:underline">Privacy policy</a>
                                <a href="/pages/term-policy" className="hover:underline">Terms of service</a>
                            </div>
                        </form>

                        {/* Right: Order Summary */}
                        <div className="lg:sticky lg:top-8 lg:h-fit">
                            <div className="bg-white p-6 rounded-lg shadow-sm border">
                                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                                    <ShoppingCart className="w-5 h-5 mr-2" /> Order Summary
                                </h2>
                                <div className="space-y-4 mb-6">
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                                            <div className="relative">
                                                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                                <span className="absolute -top-2 -right-2 bg-gray-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                                    {item.quantity}
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-sm font-semibold text-gray-900">{item.name}</h4>
                                                <p className="text-xs text-gray-500">{item.variant || 'Default Variant'}</p>
                                            </div>
                                            <div className="text-sm font-medium text-right text-gray-900">
                                                ₹{(item.price * item.quantity).toFixed(2)}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-t pt-4">
                                    <div className="flex mb-4">
                                        <input type="text" name="discountCode" placeholder="Discount code" value={formData.discountCode} onChange={handleInputChange} required className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg" />
                                        <button type="button" onClick={applyDiscount} className="px-6 py-2 bg-gray-600 text-white rounded-r-lg hover:bg-gray-700">
                                            Apply
                                        </button>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Subtotal • {cartItems.length} items</span>
                                            <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Shipping</span>
                                            <span className="font-medium">{shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}</span>
                                        </div>
                                        <div className="border-t pt-2">
                                            <div className="flex justify-between text-lg font-semibold">
                                                <span>Total</span>
                                                <span>₹{total.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckoutPage;