import Link from "next/link";
import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { Doctors } from "../objects/Doctors";
import { Remedies } from "../objects/Remedies";
import { PredictionContext } from "../context/PredictionContext";
const Result = () => {
  const { user } = useAuthContext();
  const { prediction } = React.useContext(PredictionContext);
  const [result, setResult] = React.useState(null);
  const [medicine, setMedicine] = React.useState(
    Remedies.filter((med) => med.disease === prediction)
  );
  const [doctors, setDoctors] = React.useState(
    Doctors.filter(
      (doc) => doc.city.toLowerCase() == user.user.city.toLowerCase()
    )
  );
  const handleSave = async () => {
    const data = {
      userId: user.user._id,
      disease: prediction,
      remedies: medicine[0].remedies,
      dermatologists: doctors[0].doctors.map((doc) => doc.name),
    };
    console.log(data);

    try {
      const response = await fetch("/api/saveResult", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const textResponse = await response.text(); // get the response as text
      console.log(textResponse); // log the response

      const responseData = JSON.parse(textResponse);

      setResult(responseData.message);
      console.log(result);
    } catch (error) {
      console.log(error);
      setResult("Error saving result");
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
              <img
                src="/disease-icon.png"
                alt="icon"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              ></img>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2 font-bolder">
                Disease name:
              </h2>
              <p class="leading-relaxed text-base" id="name">
                {prediction}
              </p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Remedies & Cautions:
              </h2>
              <p className="leading-relaxed text-base">
                {medicine[0].remedies.map((rem, index) => (
                  <React.Fragment key={index}>
                    {rem.toUpperCase()}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
              <img
                src="/remedies-icon.png"
                alt="icon"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              ></img>
            </div>
          </div>
          <div className="flex items-start lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
              <img
                src="/icon-dermatologist.png"
                alt="icon"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              ></img>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Dermatologists
              </h2>
              {doctors[0].doctors.map((docMap) => (
                <div
                  key={docMap.name}
                  className="flex flex-row border-b mt-5 border-gray-200"
                >
                  <div className="float-right flex-grow-1">
                    <Link href={docMap.href}>
                      <p class="leading-relaxed text-base hover:text-green-400">
                        {docMap.name}
                      </p>
                    </Link>
                  </div>
                  <div
                    id="location"
                    className=" flex items-center justify-center relative pl-20 pb-10"
                  >
                    <iframe
                      src={docMap.location}
                      width="400"
                      height="300"
                      style={{ border: 0 }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-2 w-full">
            <button
              className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
          {result && (
            <span className="flex mx-auto text-red-600 justify-center border-0 py-2 px-8  text-lg">
              {result}
            </span>
          )}
        </div>
      </section>
    </div>
  );
};

export default Result;
