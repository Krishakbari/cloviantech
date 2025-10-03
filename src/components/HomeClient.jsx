import React from 'react';
import client1 from '../assets/c1.png';
import client2 from '../assets/c2.png';
import client3 from '../assets/c3.png';
import client4 from '../assets/c4.png';
import client5 from '../assets/c5.png';

const clients = [client1, client2, client3, client4, client5];

const HomeClient = () => {
  const scrollingClients = [...clients, ...clients, ...clients]; // repeat logos for continuous scroll

  return (
    <section className="sm:py-16 py-2 px-2 sm:px-12 bg-gray-50 overflow-hidden relative">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="text-md text-white bg-blue-800 px-3 py-1 rounded-full mb-6 inline-block">
          Our Clients
        </span>
        <h2 className="text-2xl sm:text-5xl text-gray-900 mb-2 font-inter">
          Trusted by Industry Leaders
        </h2>
        <p className="text-gray-500 text-lg">
          Join our roster of satisfied clients and experience the exceptional results and service that have 
          <br className="hidden sm:block" />
          earned us the trust of industry leaders worldwide
        </p>
      </div>

      {/* Horizontal Scrolling Logos */}
      <div className="overflow-hidden w-full">
        <div
          className="flex animate-scroll whitespace-nowrap"
          style={{ animation: "scrollLeft 40s linear infinite" }}
        >
          {scrollingClients.map((logo, index) => (
            <div key={index} className="px-10 flex items-center">
              <img
                src={logo}
                alt={`client-${index}`}
                className="h-12 sm:h-16 object-contain select-none pointer-events-none"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Embedded CSS for scrolling */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default HomeClient;
