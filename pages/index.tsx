import React from 'react';
import Header from '@/components/Header';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <div className="container mx-auto p-4 flex-grow flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Welcome to Briliantdo Architect</h1>
        <p className="text-xl md:text-2xl mb-4 text-center">
          Crafting Your Vision.
        </p>
        <p className="text-xl md:text-2xl text-center">
          Brilliantly Designed
        </p>
      </div>
    </div>
  );
};

export default Home;