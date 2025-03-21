import React from "react";
import Link from "next/link";

const services = [
  { title: "Architectural Design", image: "assets/image1.jpg" },
  { title: "Interior Design", image: "assets/image1.jpg" },
  { title: "Construction", image: "assets/image2.jpeg" },
  { title: "Visualization", image: "assets/image3.jpg" },
  { title: "Civil Engineers", image: "assets/image4.jpg" },
  { title: "?", image: "assets/image5.jpg" },
  { title: "Housing", image: "assets/image6.jpg" },
  { title: "Architecture", image: "assets/image7.jpg" },
  { title: "Consultation Services", image: "assets/image8.jpeg" }
];

const Services = () => {
  return (
    <section className="bg-gray-100 py-12 min-h-screen flex flex-col justify-between">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden p-4 text-center">
              <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{service.title}</h3>
              <p className="mt-4 text-gray-700">
                Our {service.title.toLowerCase()} service provides expert solutions tailored to your needs, ensuring high quality and satisfaction.
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12">
  <p className="text-lg text-gray-700">
    Get expert advice and personalized solutions at no cost. Schedule your free consultation today!
  </p>
  <Link href="/contact" legacyBehavior>
    <a className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded underline">
      Get a Free Consultation
    </a>
  </Link>
</div>
      </div>
    </section>
  );
};

export default Services;