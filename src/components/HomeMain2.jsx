// import React from "react";
// import Hero from "../assets/Hero.png";

// const HomeMain2 = () => {
//   return (
//     <section className="flex flex-col items-center justify-center pt-4 pb-10 px-4 bg-gray-50">
//       {/* Image with oval shape */}
//       {/* <div className="w-full max-w-7xl overflow-hidden rounded-[9999px]">
//         <img
//           src={Hero}
//           alt="Hero Illustration"
//           className="w-full h-auto object-cover"
//         />
//       </div> */}

//       {/* Stats Section */}
//       <div className="mt-8 w-full max-w-3xl bg-white shadow-sm rounded-2xl grid grid-cols-3 divide-x divide-gray-200">
//         {/* Stat 1 */}
//         <div className="flex flex-col items-center py-2 sm:py-6 px-2 sm:px-4">
//           <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900">50K</h2>
//           <p className="mt-1 text-xs sm:text-sm md:text-base text-gray-600 text-center">
//             New users per month
//           </p>
//         </div>

//         {/* Stat 2 */}
//         <div className="flex flex-col items-center py-2 sm:py-6 px-2 sm:px-4">
//           <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900">150K</h2>
//           <p className="mt-1 text-xs sm:text-sm md:text-base text-gray-600 text-center">
//             Active Users
//           </p>
//         </div>

//         {/* Stat 3 */}
//         <div className="flex flex-col items-center py-2 sm:py-6 px-2 sm:px-4">
//           <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900">98%</h2>
//           <p className="mt-1 text-xs sm:text-sm md:text-base text-gray-600 text-center">
//             Satisfied Customers
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeMain2;

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Counter = ({ start, end }) => {
  const { ref, inView } = useInView({ triggerOnce: false }); // Detect when in viewport
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (inView) {
      let current = start;
      setCount(start); // Reset count when re-entering

      const increment = Math.ceil((end - start) / 50); // Adjust speed
      const interval = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(current);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [inView, start, end]);

  return (
    <span ref={ref} className="md:text-5xl text-[20px] font-bold">
      {count}+
    </span>
  );
};

export default function HomeMain2() {
  return (
    <div className=" text-black  font-[Nunito] ml-[5%] mr-[5%]">
      <div className="container  flex justify-between text-center">
        {/* Projects */}
        <div className="mt-15">
          <Counter start={0} end={200} />
          <p className="md:text-lg " >Projects Complete</p>
        </div>

        {/* Happy Clients */}
        <div className="mt-15">
          <Counter start={0} end={100} />
          <p className="md:text-lg">Happy Clients</p>
        </div>

        {/* Years Experience */}
        <div className="mt-15">
          <Counter start={0} end={10} />
          <p className="md:text-lg">Years Experience</p>
        </div>

        {/* Awards Won */}
        <div className="mt-15">
          <Counter start={0} end={15} />
          <p className="md:text-lg">Awards Won</p>
        </div>
      </div><br /><br /><br />
    </div>
  );
}