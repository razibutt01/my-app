import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13579.163287724077!2d74.2472402!3d31.6942859!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd947205dd8328550!2sUniversity%20of%20Engineering%20%26%20Technology%20-%20KSK%20Campus!5e0!3m2!1sen!2s!4v1669734939256!5m2!1sen!2s"
              style={{
                filter: "grayscale(1)" + "contrast(1.2)" + "opacity(0.4)",
              }}
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Lahore Bypass, Kala Shah Kaku, Sheikhupura, Punjab
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-green-500 leading-relaxed">
                  buttrazi84@gmail.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">03114587344</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSddHe5LpkBNEHRYHHuKWVZOeKABq_IO_X6ZlhCuxbXTNv4MXw/viewform?embedded=true"
              width="640"
              height="800"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>{" "}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
