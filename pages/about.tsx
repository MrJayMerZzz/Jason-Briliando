import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-6 text-black">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">About Us</h1>

      {/* Our Team Section */}
      <section className="mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <p>
          We are a passionate team of architects and designers committed to bringing innovative and functional spaces to life.
          Our diverse expertise allows us to tackle projects of all scales, ensuring quality and excellence in every step.
        </p>
      </section>

      {/* Vision Section */}
      <section className="mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p>
          Our vision is to redefine modern architecture by combining sustainability, aesthetics, and cutting-edge technology.
          We aim to create timeless designs that inspire and enhance everyday living.
        </p>
      </section>

      {/* Goals Section */}
      <section className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Our Goals</h2>
        <ul className="list-disc pl-6">
          <li>Deliver high-quality architectural solutions</li>
          <li>Prioritize sustainability and eco-friendly materials</li>
          <li>Enhance functionality while maintaining artistic value</li>
          <li>Continuously innovate and adapt to modern trends</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
