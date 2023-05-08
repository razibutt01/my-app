import React from "react";
import { useRouter } from "next/router";
import { useSignup } from "../hooks/useSignup";
import Link from "next/link";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Z\s]{4,}$/,
      "Name must be at least 4 characters and contain only alphabets and spaces"
    )
    .required("Name is required"),
  email: yup
    .string()
    .email("Enter a Valid E-Mail")
    .required("Email is Required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})/,
      "Password should contain at least one alphabet and one number and must be 8 characters long"
    )
    .required("Password is required"),
  address: yup
    .string()
    .test("word-count", "Address must contain at least 4 words", (value) => {
      if (!value) return false; // reject empty values
      const wordCount = value.trim().split(/\s+/).length;
      return wordCount >= 4;
    })
    .required("Address is Required"),
  city: yup
    .string()
    .min(3)
    .required("City Should be at least 3 characters long."),
});
const Signin = () => {
  const router = useRouter();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const { signup, error, isLoading } = useSignup();
  const [validationErrors, setValidationErrors] = React.useState([]);
  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      await schema.validate({ name, email, password, address, city });
      await signup(name, email, password, address, city);
      if (isLoading == false) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      setValidationErrors(error.errors);
    }
  };

  return (
    <section class="text-gray-600 body-font bg-derm-hero bg-cover bg-no-repeat bg-fixed bg-center">
      <div class="container px-5 py-24 mx-auto flex flex-wrap items-center backdrop-blur-xs">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 class="title-font font-medium text-3xl  text-green-600">
            Dermatological Diseases Detection.
          </h1>
          <p class="leading-relaxed mt-4  text-green-500">
            A Website to detect skin diseases through images.
          </p>
        </div>
        <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <form onSubmit={handleSignUp}>
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
              Sign Up
            </h2>
            <div class="relative mb-4">
              <label for="full-name" class="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                class="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div class="relative mb-4">
              <label for="address" class="leading-7 text-sm text-gray-600">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                class="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </div>

            <div class="relative mb-4">
              <label for="city" class="leading-7 text-sm text-gray-600">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                class="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div class="relative mb-4">
              <label for="password" class="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                class="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <button
              type="submit"
              className="flex justify-center items-center text-white bg-green-500  border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
              disabled={isLoading}
              // class="text-white bg-green-500  border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Sign up
            </button>

            {/* {validationErrors && (
              <div className="flex justify-center items-center px-2 text-red-500">
                {validationErrors}
              </div>
            )} */}
            {error
              ? error && (
                  <div
                    className="flex justify-center items-center px-2 text-red-500"
                    id="error"
                  >
                    {error}
                  </div>
                )
              : validationErrors && (
                  <div className="flex justify-center items-center px-2 text-red-500">
                    {validationErrors}
                  </div>
                )}
            <Link href="/">
              <div className="text-center m-2 text-green-500 ">
                Back to Log in
              </div>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signin;
