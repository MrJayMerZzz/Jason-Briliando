import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-center text-2xl font-light mb-6">Contact Us</h2>
      <div className="flex flex-col md:flex-row justify-between items-start bg-white p-6 shadow-md rounded-lg">
        {/* Left - Contact Form */}
        <div className="md:w-1/2 w-full p-4">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
              <input type="text" id="phone" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" placeholder="Your Phone Number" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700 mb-2">Address</label>
              <input type="text" id="address" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" placeholder="Your Address" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea id="message" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" placeholder="Your Message" rows={5}></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:ring-2 focus:ring-blue-500">
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Right - Office Info */}
        <div className="md:w-1/2 w-full p-4 bg-gray-100 rounded-lg text-black">
          <h3 className="text-xl font-bold mb-2">Our Office</h3>
          <p><strong>Location:</strong> Kemayoran, Jakarta Pusat</p>
          <p><strong>Working Hours:</strong> 9AM - 3PM, Mon to Fri</p>
          <div className="mt-4">
            <p><strong>Contact:</strong></p>
            <p>📞 WhatsApp: +62 815 9788 788</p>
            <p>📧 Email: brilliantdo.architect@gmail.com</p>
            <p>📸 Instagram: brilliantdo.architect</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
