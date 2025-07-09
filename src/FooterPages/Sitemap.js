import React from "react";
import Navbar from "../component/Navbar";

const Sitemap = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800">
          <h1 className="text-3xl font-semibold text-center mb-10">Sitemap</h1>

          {/* Main Menu Section */}
          <Section title="Main Menu" links={[
            { name: "Our Story", href: "/pages/our-story" },
            { name: "Blogs", href: "/pages/blogs" },
            { name: "Contact Us", href: "/pages/contact-us" }
          ]} />

          {/* Sheet Sets Section */}
          <Section title="Sheet Sets" links={[
            { name: "1000 Thread Count", href: "/1000-TC" },
            { name: "800 Thread Count", href: "/800-TC" },
            { name: "600 Thread Count", href: "/600-TC" }
          ]} />

          {/* Fitted Sheets Section */}
          <Section title="Fitted Sheets" links={[
            { name: "All Fitted Sheets", href: "/fitted-sheets" },
            { name: "Luxury Fitted Sheet", href: "/fitted-sheets/luxury" }, // Only valid if routes exist
            { name: "Organic Fitted Sheet", href: "/fitted-sheets/organic" },
            { name: "Cooling Fitted Sheet", href: "/fitted-sheets/cooling" }
          ]} />

          {/* Duvet Covers Section */}
          <Section title="Duvet Covers" links={[
            { name: "All Duvet Covers", href: "/duvet-covers" },
            { name: "1000 TC Duvet", href: "/duvet-covers/1000-thread-count" },
            { name: "800 TC Duvet", href: "/duvet-covers/800-thread-count" }
          ]} />

          {/* Pillow Cases Section */}
          <Section title="Pillow Cases" links={[
            { name: "All Pillow Cases", href: "/Pillow-cases" },
            { name: "Luxury Pillow", href: "/Pillow-cases/luxury" }
          ]} />

          {/* Bamboo Section */}
          <Section title="Bamboo Sheets" links={[
            { name: "Bamboo Collection", href: "/Bamboo" }
          ]} />

          {/* Legal Pages Section */}
          <Section title="Legal" links={[
            { name: "Shipping Policy", href: "/pages/shipping" },
            { name: "Return Policy", href: "/pages/return-policy" },
            { name: "Privacy Policy", href: "/pages/privacy-policy" },
            { name: "Terms & Conditions", href: "/pages/term-policy" }
          ]} />

          {/* Account Pages */}
          <Section title="Account" links={[
            { name: "Register", href: "/account/register" },
            { name: "Login", href: "/account/logged-in" },
            { name: "Forget Password", href: "/account/Forget-password" }
          ]} />
        </div>
      </div>
    </>

  );
};

const Section = ({ title, links }) => (
  <div className="mb-10">
    <h2 className="text-sm uppercase font-medium text-gray-600 mb-2">{title}</h2>
    <hr className="mb-3" />
    <ul className="space-y-2 list-disc list-inside">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} className="underline text-base hover:underline text-gray-800">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Sitemap;
