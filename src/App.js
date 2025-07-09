import React from 'react'
import { Routes, Route } from 'react-router-dom';
import "./App.css"
import DashboardPage from './component/DashboardPage'
import Footer from './component/Footer';
import OurStory from './component/ourStory';
import BlogGrid from './component/Journalblog';
import ContactForm from './component/ContactForm';
import BlogDetail from './pages/BlogDetail';
import RegisterForm from './UserProfile/Register';
import Login from './UserProfile/Login';
import ForgetPassword from './UserProfile/ForgetPassword';
import ChatBot from './ChatFile/Chatbot';


import SheetSets from './pages/SheetSets';
import ProductCollection from './data/Productlist';
import SheetProduct from './mainpage/SheetProduct';


import DuvetCovers from './pages/DuvetCovers';
import DuvetProduct from './mainpage/DuvetProduct';
import PillowcaseProduct from './mainpage/PillowcaseProduct';
import BlanketProduct from './mainpage/BlanketProduct';
import FittedSheetProduct from './mainpage/FittedSheetProduct';
import PillowCases from './pages/PillowCases';
import Blankets from './pages/Blankets';
import FittedSheets from './pages/FittedSheets';
import ThousandThreadCount from './pages/ThousandThreadCount';
import SixThreadCount from './pages/SixhundredTC';
import EightThreadCount from './pages/EightThread';
import Sateen from './pages/Sateen';
import ThousandthreadProduct from './mainpage/ThousandThreadProduct';
import EightHundredProduct from './mainpage/EightHundredProduct';
import SixHundredProduct from './mainpage/SixHundredProduct';
import Bamboo from './pages/Bamboo';
import BambooProduct from './mainpage/BambooProduct';
import Shipping from './FooterPages/Shipping';
import ReturnPolicyPage from './FooterPages/ReturnPolicy';
import PrivacyPolicyPage from './FooterPages/PrivacyPolicy';
import TermsOfServicePage from './FooterPages/TermPolicy';
import Sitemap from './FooterPages/Sitemap';
import CareInstructions from './FooterPages/CareInstructions';
import CareFAQ from './FooterPages/FAQqustion';
import BeddingCollection from './FooterPages/BeddingCollection';
import Cart from './component/Cart';
import CheckoutPage from './component/CheckoutPage';
import Home from './pages/Home';

function App() {
  return (
    <>


      <div className='App'>
        <Routes>
          <Route path="*" element={<h1>404 - Page not found</h1>} />
          <Route path="/" element={<DashboardPage />} />
          <Route path="/pages/home" element={<Home />} />
          <Route path="/pages/our-story" element={<OurStory />} />
          <Route path="/pages/blogs" element={<BlogGrid />} />
          <Route path="/pages/blogs/:id" element={<BlogDetail />} />
          <Route path="/pages/contact-us" element={<ContactForm />} />
          <Route path="/account/register" element={<RegisterForm />} />
          <Route path="/account/logged-in" element={<Login />} />
          <Route path="/account/Forget-password" element={<ForgetPassword />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Checkout" element={<CheckoutPage />} />



          {/* product list  */}
          <Route path="/collections" element={<ProductCollection />} />
          <Route path="/sheets-sets" element={<SheetSets />} />
          <Route path="/sheets-sets/:id" element={<SheetProduct />} />

          <Route path="/duvet-covers" element={<DuvetCovers />} />
          <Route path="/duvet-covers/:id" element={<DuvetProduct />} />

          <Route path="/Pillow-cases" element={<PillowCases />} />
          <Route path="/Pillow-cases/:id" element={<PillowcaseProduct />} />

          <Route path="/blankets" element={<Blankets />} />
          <Route path="/blankets/:id" element={<BlanketProduct />} />

          <Route path="/fitted-sheets" element={<FittedSheets />} />
          <Route path="/fitted-sheets/:id" element={<FittedSheetProduct />} />

          <Route path="/1000-TC" element={<ThousandThreadCount />} />
          <Route path="/thousand-thread-count/:id" element={<ThousandthreadProduct />} />

          <Route path="/800-TC" element={<EightThreadCount />} />
          <Route path="/eight-thread-count/:id" element={<EightHundredProduct />} />

          <Route path="/600-TC" element={<SixThreadCount />} />
          <Route path="/six-thread-count/:id" element={<SixHundredProduct />} />

          <Route path="/sateen" element={<Sateen />} />

          <Route path="/Bamboo" element={<Bamboo />} />
          <Route path="/Bamboo/:id" element={<BambooProduct />} />

          <Route path="/pages/bedding-collection" element={<BeddingCollection />} />
          <Route path="/pages/shipping" element={<Shipping />} />
          <Route path="/pages/return-policy" element={<ReturnPolicyPage />} />
          <Route path="/pages/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/pages/term-policy" element={<TermsOfServicePage />} />
          <Route path="/pages/sitemap" element={<Sitemap />} />
          <Route path="/pages/care" element={<CareInstructions />} />
          <Route path="/pages/faq" element={<CareFAQ />} />


        </Routes>
        <Footer />
        <ChatBot />
      </div>
    </>
  )
}

export default App
