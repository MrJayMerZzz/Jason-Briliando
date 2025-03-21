import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black py-16 px-6 md:px-12 lg:px-24">
      <h1 className="text-5xl md:text-7xl font-bold text-center mb-12">About Us</h1>

      <div className="space-y-8">
        {/* Our Team */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p>
            At BrilliantDo Architect, we believe that great design begins with understanding your vision.
            We're not just architects and interior designers; we're your partners in creating spaces that reflect your unique style and aspirations.
            Our talented team of young designers, with their diverse expertise, collaborates closely with you every step of the way, from initial concept to final execution.
            We blend the latest design trends with enduring principles to craft spaces that are both functional and breathtakingly beautiful.
          </p>
        </section>

        <section><h2 className="text-2xl font-semibold text-black mb-4">Our Vision</h2>
          <p className="text-black">
          To be the leading architectural and interior design firm, recognized for our collaborative approach, innovative design, and unwavering commitment to realizing our clients' unique visions.
          </p>
        </section>

        {/* Our Mission */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>
            BrilliantDo Architect is driven by the belief that space has the power to transform lives. We are dedicated to creating environments that are not just aesthetically pleasing, but deeply personal, reflecting the unique stories and aspirations of our clients. By seamlessly integrating modern innovation with enduring design principles, we craft spaces that enhance the quality of life for those who experience them.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
          


