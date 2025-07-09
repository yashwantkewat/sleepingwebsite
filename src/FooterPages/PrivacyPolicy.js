import React, { useState, useEffect } from 'react';
import {
    Shield,
    Eye,
    Lock,
    Users,
    Settings,
    AlertTriangle,
    CheckCircle,
    Mail,
    FileText,
    Calendar,
    Database,
    UserCheck,
    Zap,
    Heart,
    Cookie,
    Smartphone,
    MapPin,
    CreditCard,
    Share2,
    Download,
    Trash2,
    Edit3
} from 'lucide-react';
import Navbar from '../component/Navbar';

const PrivacyPolicyPage = () => {
    const [selectedSection, setSelectedSection] = useState('overview');
    const [animateIn, setAnimateIn] = useState(false);
    const [cookieConsent, setCookieConsent] = useState(false);

    useEffect(() => {
        setAnimateIn(true);
    }, []);

    const sections = [
        { id: 'overview', title: 'Overview', icon: Eye },
        { id: 'collection', title: 'Data Collection', icon: Database },
        { id: 'usage', title: 'How We Use Data', icon: Settings },
        { id: 'sharing', title: 'Data Sharing', icon: Share2 },
        { id: 'cookies', title: 'Cookies & Tracking', icon: Cookie },
        { id: 'security', title: 'Security', icon: Shield },
        { id: 'rights', title: 'Your Rights', icon: UserCheck },
        { id: 'contact', title: 'Contact Us', icon: Mail }
    ];

    const dataTypes = [
        {
            category: 'Personal Information',
            items: ['Name', 'Email Address', 'Phone Number', 'Billing Address'],
            icon: Users,
            color: 'from-blue-500 to-cyan-500',
            required: true
        },
        {
            category: 'Payment Information',
            items: ['Credit Card Details', 'Payment History', 'Billing Information'],
            icon: CreditCard,
            color: 'from-green-500 to-teal-500',
            required: true
        },
        {
            category: 'Usage Data',
            items: ['Page Views', 'Click Patterns', 'Search Queries', 'Time Spent'],
            icon: Zap,
            color: 'from-purple-500 to-pink-500',
            required: false
        },
        {
            category: 'Device Information',
            items: ['IP Address', 'Browser Type', 'Operating System', 'Device ID'],
            icon: Smartphone,
            color: 'from-orange-500 to-red-500',
            required: false
        },
        {
            category: 'Location Data',
            items: ['GPS Coordinates', 'City/Region', 'Timezone'],
            icon: MapPin,
            color: 'from-indigo-500 to-purple-500',
            required: false
        }
    ];

    const userRights = [
        {
            right: 'Access Your Data',
            description: 'Request a copy of all personal data we have about you',
            icon: Download,
            action: 'Download Data'
        },
        {
            right: 'Correct Information',
            description: 'Update or correct any inaccurate personal information',
            icon: Edit3,
            action: 'Edit Profile'
        },
        {
            right: 'Delete Account',
            description: 'Request complete deletion of your account and data',
            icon: Trash2,
            action: 'Delete Account'
        },
        {
            right: 'Data Portability',
            description: 'Transfer your data to another service provider',
            icon: Share2,
            action: 'Export Data'
        }
    ];

    const securityMeasures = [
        'End-to-end encryption for all data transmission',
        'Multi-factor authentication for account access',
        'Regular security audits and penetration testing',
        'SOC 2 Type II compliance certification',
        'Data minimization and retention policies',
        'Employee security training and background checks'
    ];

    const renderContent = () => {
        switch (selectedSection) {
            case 'overview':
                return (
                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-blue-500/20 rounded-lg">
                                    <Eye className="text-blue-400" size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-white">Privacy Overview</h2>
                            </div>
                            <div className="space-y-4 text-gray-300">
                                <p className="text-lg">
                                    We believe privacy is a fundamental right. This policy explains how we collect, use, and protect your personal information when you use our services.
                                </p>
                                <p>
                                    We're committed to transparency and giving you control over your data. We only collect information that helps us provide better services and never sell your personal information to third parties.
                                </p>
                                <div className="grid md:grid-cols-3 gap-4 mt-6">
                                    <div className="bg-gray-800/50 rounded-lg p-4">
                                        <CheckCircle className="text-green-400 mb-2" size={20} />
                                        <div className="text-sm font-medium text-white">No Data Sales</div>
                                        <div className="text-xs text-gray-400">We never sell your personal information</div>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-lg p-4">
                                        <Lock className="text-blue-400 mb-2" size={20} />
                                        <div className="text-sm font-medium text-white">Encrypted Storage</div>
                                        <div className="text-xs text-gray-400">All data is encrypted at rest and in transit</div>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-lg p-4">
                                        <UserCheck className="text-purple-400 mb-2" size={20} />
                                        <div className="text-sm font-medium text-white">Your Control</div>
                                        <div className="text-xs text-gray-400">Access, modify, or delete your data anytime</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <Calendar className="text-yellow-400" size={20} />
                                <h3 className="text-lg font-semibold text-white">Last Updated</h3>
                            </div>
                            <p className="text-gray-300">This privacy policy was last updated on July 1, 2025. We'll notify you of any material changes.</p>
                        </div>
                    </div>
                );

            case 'collection':
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white mb-6">Data We Collect</h2>
                        <div className="grid gap-6">
                            {dataTypes.map((type, index) => {
                                const IconComponent = type.icon;
                                return (
                                    <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className={`p-3 rounded-lg bg-gradient-to-r ${type.color}`}>
                                                <IconComponent className="text-white" size={24} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-white">{type.category}</h3>
                                                <div className="flex items-center gap-2">
                                                    <span className={`text-xs px-2 py-1 rounded ${type.required ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'
                                                        }`}>
                                                        {type.required ? 'Required' : 'Optional'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-2">
                                            {type.items.map((item, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-gray-300">
                                                    <CheckCircle className="text-green-400" size={16} />
                                                    <span className="text-sm">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );

            case 'usage':
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white mb-6">How We Use Your Data</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                                <h3 className="text-lg font-semibold text-white mb-4">Primary Uses</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-green-400 mt-0.5" size={16} />
                                        <div>
                                            <div className="text-white font-medium">Service Delivery</div>
                                            <div className="text-gray-400 text-sm">Process orders, provide customer support</div>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-green-400 mt-0.5" size={16} />
                                        <div>
                                            <div className="text-white font-medium">Account Management</div>
                                            <div className="text-gray-400 text-sm">Maintain your account, process payments</div>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-green-400 mt-0.5" size={16} />
                                        <div>
                                            <div className="text-white font-medium">Communication</div>
                                            <div className="text-gray-400 text-sm">Send order updates, important notifications</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                                <h3 className="text-lg font-semibold text-white mb-4">Secondary Uses</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <Settings className="text-blue-400 mt-0.5" size={16} />
                                        <div>
                                            <div className="text-white font-medium">Service Improvement</div>
                                            <div className="text-gray-400 text-sm">Analyze usage patterns, fix bugs</div>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Settings className="text-blue-400 mt-0.5" size={16} />
                                        <div>
                                            <div className="text-white font-medium">Personalization</div>
                                            <div className="text-gray-400 text-sm">Customize your experience, recommendations</div>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Settings className="text-blue-400 mt-0.5" size={16} />
                                        <div>
                                            <div className="text-white font-medium">Marketing</div>
                                            <div className="text-gray-400 text-sm">Send promotional emails (opt-in only)</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                );

            case 'sharing':
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white mb-6">Data Sharing</h2>
                        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-6">
                            <div className="flex items-center gap-3 mb-3">
                                <AlertTriangle className="text-red-400" size={20} />
                                <h3 className="text-lg font-semibold text-white">We Never Sell Your Data</h3>
                            </div>
                            <p className="text-gray-300">We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                                <h3 className="text-lg font-semibold text-white mb-4">When We Share Data</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="text-green-400 mt-0.5" size={16} />
                                        <div>
                                            <div className="text-white font-medium">Service Providers</div>
                                            <div className="text-gray-400 text-sm">Payment processors, shipping companies, cloud storage providers</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="text-green-400 mt-0.5" size={16} />
                                        <div>
                                            <div className="text-white font-medium">Legal Requirements</div>
                                            <div className="text-gray-400 text-sm">When required by law, court orders, or government requests</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="text-green-400 mt-0.5" size={16} />
                                        <div>
                                            <div className="text-white font-medium">Business Transfers</div>
                                            <div className="text-gray-400 text-sm">In case of merger, acquisition, or sale of assets</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'cookies':
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white mb-6">Cookies & Tracking</h2>
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <div className="flex items-center gap-3 mb-4">
                                <Cookie className="text-orange-400" size={24} />
                                <h3 className="text-lg font-semibold text-white">Cookie Consent</h3>
                            </div>
                            <p className="text-gray-300 mb-4">We use cookies to improve your experience. You can control cookie preferences below.</p>
                            <div className="flex items-center gap-4">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={cookieConsent}
                                        onChange={(e) => setCookieConsent(e.target.checked)}
                                        className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-blue-500"
                                    />
                                    <span className="text-white">Accept non-essential cookies</span>
                                </label>
                                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                                    Save Preferences
                                </button>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                                <h3 className="text-lg font-semibold text-white mb-4">Essential Cookies</h3>
                                <p className="text-gray-300 text-sm mb-3">Required for basic site functionality</p>
                                <ul className="space-y-2 text-gray-400 text-sm">
                                    <li>• Authentication and security</li>
                                    <li>• Shopping cart functionality</li>
                                    <li>• Language preferences</li>
                                </ul>
                            </div>
                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                                <h3 className="text-lg font-semibold text-white mb-4">Analytics Cookies</h3>
                                <p className="text-gray-300 text-sm mb-3">Help us understand how you use our site</p>
                                <ul className="space-y-2 text-gray-400 text-sm">
                                    <li>• Page views and user behavior</li>
                                    <li>• Performance monitoring</li>
                                    <li>• A/B testing data</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                );

            case 'security':
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white mb-6">Security Measures</h2>
                        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-8 border border-green-500/30">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-green-500/20 rounded-lg">
                                    <Shield className="text-green-400" size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Enterprise-Grade Security</h3>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {securityMeasures.map((measure, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle className="text-green-400 mt-0.5" size={16} />
                                        <span className="text-gray-300">{measure}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );

            case 'rights':
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white mb-6">Your Privacy Rights</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {userRights.map((right, index) => {
                                const IconComponent = right.icon;
                                return (
                                    <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 bg-blue-500/20 rounded-lg">
                                                <IconComponent className="text-blue-400" size={20} />
                                            </div>
                                            <h3 className="text-lg font-semibold text-white">{right.right}</h3>
                                        </div>
                                        <p className="text-gray-300 mb-4">{right.description}</p>
                                        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all">
                                            {right.action}
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );

            case 'contact':
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white mb-6">Contact Our Privacy Team</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                                <div className="flex items-center gap-3 mb-4">
                                    <Mail className="text-blue-400" size={24} />
                                    <h3 className="text-lg font-semibold text-white">Email Us</h3>
                                </div>
                                <p className="text-gray-300 mb-4">For privacy-related questions or concerns</p>
                                <div className="text-blue-400 font-medium">privacy@company.com</div>
                            </div>
                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                                <div className="flex items-center gap-3 mb-4">
                                    <FileText className="text-purple-400" size={24} />
                                    <h3 className="text-lg font-semibold text-white">Data Protection Officer</h3>
                                </div>
                                <p className="text-gray-300 mb-4">For GDPR and formal privacy requests</p>
                                <div className="text-purple-400 font-medium">dpo@company.com</div>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <>
            <Navbar />
            <div className='pt-20'>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">


                    <div className="max-w-7xl mx-auto px-6 py-12">
                        {/* Hero Section */}
                        <div className={`text-center mb-12 ${animateIn ? 'animate-in fade-in slide-in-from-bottom duration-1000' : ''}`}>

                            <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Your Privacy Matters
                            </h1>

                        </div>

                        <div className="grid lg:grid-cols-4 gap-8">
                            {/* Sidebar Navigation */}
                            <div className={`lg:col-span-1 ${animateIn ? 'animate-in fade-in slide-in-from-left duration-1000 delay-300' : ''}`}>
                                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 sticky top-6">
                                    <h3 className="text-lg font-semibold text-white mb-4">Sections</h3>
                                    <nav className="space-y-2">
                                        {sections.map((section) => {
                                            const IconComponent = section.icon;
                                            return (
                                                <button
                                                    key={section.id}
                                                    onClick={() => setSelectedSection(section.id)}
                                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${selectedSection === section.id
                                                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                                                        : 'text-gray-300 hover:bg-gray-700/50'
                                                        }`}
                                                >
                                                    <IconComponent size={18} />
                                                    <span className="font-medium">{section.title}</span>
                                                </button>
                                            );
                                        })}
                                    </nav>
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className={`lg:col-span-3 ${animateIn ? 'animate-in fade-in slide-in-from-right duration-1000 delay-500' : ''}`}>
                                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                                    {renderContent()}
                                </div>
                            </div>
                        </div>

                        {/* Bottom CTA */}
                        <div className={`mt-12 text-center ${animateIn ? 'animate-in fade-in slide-in-from-bottom duration-1000 delay-700' : ''}`}>
                            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
                                <div className="flex items-center justify-center gap-3 mb-4">
                                    <Heart className="text-red-400" size={24} />
                                    <h3 className="text-2xl font-bold text-white">Questions About Privacy?</h3>
                                </div>
                                <p className="text-gray-300 mb-6">
                                    We're here to help. Contact our privacy team for any questions or concerns.
                                </p>
                                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                                    Contact Privacy Team
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default PrivacyPolicyPage;