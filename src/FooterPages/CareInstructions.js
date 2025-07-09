import React from "react";
import Navbar from "../component/Navbar";

const CareInstructions = () => {
  return (
    <>
    <Navbar/>
    <div className="pt-20">
    <div className="max-w-6xl  mx-auto px-20 py-10 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-8">Care Instructions</h1>

      <Section title="General Tips">
        <ul className="list-disc list-inside space-y-1">
          <li>Wash your bedding before first use.Wash dark and light colors separately Wash dark and light colors separately </li>
          <li>Always read the care label on the product.Wash dark and light colors separately Wash dark and light colors separately</li>
          <li>Use mild detergent and avoid bleach Wash your bedding before first use.Wash dark and light colors separately Wash dark and light colors separately.</li>
          <li>Wash dark and light colors separately.Wash your bedding before first use.Wash dark and light colors separately Wash dark and light colors separately</li>
        </ul>
      </Section>

      <Section title="Cotton Sheets">
        <ul className="list-disc list-inside space-y-1">
          <li>Machine wash in cold or warm water Tumble dry on low or medium heat. Iron on low if needed Avoid over-drying to maintain softness.</li>
          <li>Tumble dry on low or medium heat.Machine wash in cold or warm water Tumble dry on low or medium heat. Iron on low if needed Avoid over-drying to maintain softness.</li>
          <li>Iron on low if needed.Machine wash in cold or warm water Tumble dry on low or medium heat. Iron on low if needed Avoid over-drying to maintain softness.</li>
          <li>Avoid over-drying to maintain softness. Machine wash in cold or warm water Tumble dry on low or medium heat. Iron on low if needed Avoid over-drying to maintain softness.</li>
        </ul>
      </Section>

      <Section title="Sateen Sheets">
        <ul className="list-disc list-inside space-y-1">
          <li>Wash inside out to maintain sheen.Use gentle cycle and cold water. Avoid fabric softeners and bleah Hang dry or tumble dry low.</li>
          <li>Use gentle cycle and cold water.Wash inside out to maintain sheen.Use gentle cycle and cold water. Avoid fabric softeners and bleah Hang dry or tumble dry low</li>
          <li>Avoid fabric softeners and bleach.Wash inside out to maintain sheen.Use gentle cycle and cold water. Avoid fabric softeners and bleah Hang dry or tumble dry low</li>
          <li>Hang dry or tumble dry low.Wash inside out to maintain sheen.Use gentle cycle and cold water. Avoid fabric softeners and bleah Hang dry or tumble dry low</li>
        </ul>
      </Section>

      <Section title="Bamboo Sheets">
        <ul className="list-disc list-inside space-y-1">
          <li>Wash separately in cold water. Use liquid detergent (no bleach or softeners). Air dry or tumble dry low to prevent shrinkage</li>
          <li>Use liquid detergent (no bleach or softeners).Air dry or tumble dry low to prevent shrinkage</li>
          <li>Air dry or tumble dry low to prevent shrinkage. Air dry or tumble dry low to prevent shrinkage</li>
        </ul>
      </Section>

      <Section title="Duvet Covers & Pillowcases">
        <ul className="list-disc list-inside space-y-1">
          <li>Wash every 1-2 weeks to maintain freshness.Use cold or warm water on gentle cycle.Iron lightly if needed.</li>
          <li>Use cold or warm water on gentle cycle.Iron lightly if needed.</li>
          <li>Iron lightly if needed.Wash every 1-2 weeks to maintain freshness.Use cold or warm water on gentle cycle.Iron lightly if needed</li>
        </ul>
      </Section>

      <Section title="Storage Instructions">
        <ul className="list-disc list-inside space-y-1">
          <li>Store in a cool, dry place.Avoid storing in plastic; use fabric bags.Ensure items are fully dry before storing.</li>
          <li>Avoid storing in plastic; use fabric bags.Ensure items are fully dry before storing.</li>
          <li>Ensure items are fully dry before storing.Avoid storing in plastic; use fabric bags.</li>
        </ul>
      </Section>
    </div>
    </div>
    </>
  );
};

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    {children}
  </div>
);

export default CareInstructions;
