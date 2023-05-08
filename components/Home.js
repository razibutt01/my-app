import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuthContext } from "../hooks/useAuthContext";

const MainHome = () => {
  const { user } = useAuthContext();
  console.log(user.user);
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          {/* <!-- text - start --> */}
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Greetings!
            </h2>

            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              Lets start the process by uploading the image and see, what might
              be the solution?
            </p>
          </div>
          {/* <!-- text - end --> */}

          <div className="grid sm:grid-cols-2 gap-6">
            {/* <!-- product - start --> */}
            <Link
              href="/upload"
              className="group h-80 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4"
            >
              <img
                src="/upload-image.jpg"
                loading="lazy"
                alt="Photo by Fakurian Design"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                // width={500}
                // height={300}
              />

              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

              <div className="flex flex-col relative">
                {/* <span className="text-gray-300">Home</span> */}
                <span className="text-white text-lg lg:text-xl font-semibold">
                  New Detection
                </span>
              </div>
            </Link>
            {/* <!-- product - end --> */}

            {/* <!-- product - start --> */}
            <Link
              href="/history"
              className="group h-80 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4"
            >
              <img
                src="/History.png"
                loading="lazy"
                alt="Photo by Fakurian Design"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

              <div className="flex flex-col relative">
                <span className="text-white text-lg lg:text-xl font-semibold">
                  History
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
