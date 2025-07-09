import React, { useState, useEffect } from 'react';
import { 
  Package, 
  RefreshCw, 
  Clock, 
  Shield, 
  CreditCard, 
  FileText,
  Calendar,
  Truck,
  Award,
} from 'lucide-react';
import Navbar from '../component/Navbar';

const ReturnPolicyPage = () => {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  const returnSteps = [
    {
      step: 1,
      title: "Initiate Return",
      description: "Log into your account and select the item you wish to return",
      icon: Package,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: 2,
      title: "Print Label",
      description: "Download and print the prepaid return shipping label",
      icon: FileText,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: 3,
      title: "Package Item",
      description: "Pack the item securely in original packaging if available",
      icon: RefreshCw,
      color: "from-green-500 to-teal-500"
    },
    {
      step: 4,
      title: "Ship Back",
      description: "Drop off at any authorized shipping location",
      icon: Truck,
      color: "from-orange-500 to-red-500"
    }
  ];


  return (

    <>
    <Navbar/>
    <div className='pt-20'>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
     
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className={`text-center mb-16 ${animateIn ? 'animate-in fade-in slide-in-from-bottom duration-1000' : ''}`}>
       
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Easy Returns & Exchanges
          </h1>
      
        </div>

        {/* Key Benefits */}
        <div className={`grid md:grid-cols-3 gap-6 mb-16 ${animateIn ? 'animate-in fade-in slide-in-from-bottom duration-1000 delay-300' : ''}`}>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Calendar className="text-green-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white">30-Day Window</h3>
            </div>
            <p className="text-gray-300">Full 30 days from delivery to return or exchange your items</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Shield className="text-blue-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white">Free Returns</h3>
            </div>
            <p className="text-gray-300">No restocking fees, and we cover return shipping for defective items</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Award className="text-purple-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white">Quality Guarantee</h3>
            </div>
            <p className="text-gray-300">100% satisfaction guarantee on all purchases</p>
          </div>
        </div>

        {/* Return Process */}
        <div className={`mb-16 ${animateIn ? 'animate-in fade-in slide-in-from-bottom duration-1000 delay-500' : ''}`}>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">How to Return an Item</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {returnSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.step} className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                    <div className="text-sm font-medium text-gray-400 mb-1">Step {step.step}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Refund Information */}
        <div className={`mb-16 ${animateIn ? 'animate-in fade-in slide-in-from-bottom duration-1000 delay-900' : ''}`}>
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <CreditCard className="text-blue-400" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Refund Process</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Processing Time</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <Clock size={16} className="text-blue-400" />
                    5-7 business days after we receive your item
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock size={16} className="text-blue-400" />
                    Additional 3-5 days for bank processing
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Refund Methods</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CreditCard size={16} className="text-purple-400" />
                    Original payment method
                  </li>
                  <li className="flex items-center gap-2">
                    <CreditCard size={16} className="text-purple-400" />
                    Store credit (instant processing)
                  </li>
                </ul>
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

export default ReturnPolicyPage;