import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useContext } from "react";
import { PredictionContext } from "../context/PredictionContext";
import * as yup from "yup";

const fileSchema = yup
  .mixed()
  .required("File is required")
  .test("fileFormat", "Only JPG and PNG files are allowed", (value) => {
    if (!value) {
      return true; // allow empty files
    }
    const allowedFormats = ["image/jpg", "image/jpeg", "image/png"];
    return allowedFormats.includes(value.type);
  });

const Upload = () => {
  const router = useRouter();
  const { setPrediction } = useContext(PredictionContext);
  const { useState } = React;
  const [selectedFile, setSelectedFile] = useState();
  const [checkFile, setCheckFile] = useState(false);
  const array = ["Eczema", "Acne", "Ringworm Fungus", "Melanoma"];
  const medicine = [
    "dicloxacillin",
    "erythromycin",
    "tetracycline",
    "fluconazole",
    "itraconazole",
  ];

  const imageHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setCheckFile(true);
  };
  //dicloxacillin, erythromycin, and tetracycline
  //fluconazole and itraconazole
  // const imagesubmission = async () => {
  //   if (checkFile) {
  //     const formData = new FormData();
  //     formData.append("image", selectedFile);

  //     const response = await fetch("http://localhost:5000/predict", {
  //       method: "POST",
  //       body: formData,
  //       mode: "cors", // add this line to enable CORS
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     const result = await response.json();
  //     setPrediction(result);
  //     document.getElementById("error").innerHTML = "";
  //     router.push("/result");
  //   } else {
  //     document.getElementById("error").innerHTML = "Please select the file";
  //   }
  // };
  const imagesubmission = async () => {
    try {
      const isValid = await fileSchema.isValid(selectedFile);

      if (!isValid) {
        document.getElementById("error").innerHTML =
          "Please select a JPG or PNG file";
        return;
      }

      const formData = new FormData();
      formData.append("image", selectedFile);

      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
        mode: "cors", // add this line to enable CORS
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setPrediction(result);
      document.getElementById("error").innerHTML = "";
      router.push("/result");
    } catch (error) {
      console.error(error);
      document.getElementById("error").innerHTML = "An error occurred";
    }
  };

  return (
    <div className="bg-detection bg-cover bg-no-repeat bg-fixed bg-center">
      {" "}
      <>
        <div className="h-screen  flex justify-center items-center px-2 backdrop-blur-xs">
          <div className="w-[320px] grid gap-2">
            <div className="h-24 cursor-pointer relative flex justify-center items-center border-2 rounded-md bg-gray-200">
              <input
                type="file"
                name="file"
                onChange={imageHandler}
                className="z-20 opacity-0 cursor-pointer h-full w-full"
              />
              <div className="absolute flex justify-center items-center gap-2">
                <img
                  className={`h-10 w-10 rounded-full ${
                    checkFile ? "opacity-1" : "opacity-0"
                  }`}
                  src={selectedFile ? URL.createObjectURL(selectedFile) : null}
                />
                <span className="text-[18px] w-56 truncate">
                  {checkFile ? selectedFile.name : "Select an image"}
                </span>
              </div>
            </div>

            <button
              onClick={imagesubmission}
              className="w-full h-14 bg-green-600 text-white rounded-md"
            >
              Upload
            </button>

            <div
              className="flex justify-center items-center px-2 text-red-500"
              id="error"
            ></div>
          </div>
        </div>
        <div className="flex-column justify-center items-center ">
          <div className="text-center">
            <label id="name" className="font-bold">
              {" "}
            </label>
            <span className="diseases" id="disease"></span>
          </div>
          <div className="text-center">
            <label id="remediesName" className="font-bold">
              {" "}
            </label>
            <span className="remedies" id="remedies"></span>
          </div>
          <div className="text-center">
            <label id="dermaName" className="font-bold">
              {" "}
            </label>
            <Link href="https://www.drsanayounas.com/?gclid=Cj0KCQiAyracBhDoARIsACGFcS7zqiP9MsQJkyDSD5WGvSuVJj0ZnM4szc2OJj-2l55nAGgM8g3POYwaAnBMEALw_wcB">
              <span
                className="remedies text-blue-500"
                id="dermatologist"
              ></span>
            </Link>
          </div>

          <div
            id="location"
            className=" flex items-center justify-center relative"
          ></div>
        </div>
      </>
    </div>
  );
};

export default Upload;
