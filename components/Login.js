import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useLogin } from "../hooks/useLogin";
import Link from "next/link";

const Login = () => {
  // const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleLogin = async (event) => {
    //     event.preventDefault();
    // console.log(password)
    //     const response = await fetch('/api/login', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         email,
    //         password,
    //       }),
    //     });

    //     const data = await response.json();

    //     if (response.ok) {
    //       // If the user was logged in successfully, redirect to the home page
    //       router.push('/');
    //     } else {
    //       // If there was an error, display the error message
    //       alert(data.message);
    //     }
    event.preventDefault();

    await login(email, password);
  };
  //   React.useEffect(() => {
  //     // This code will run only on the client side
  //     // You can put any client-side code here
  //   }, []);
  return (
    <div>
      <form onSubmit={handleLogin}>
        <section className="text-gray-600 body-font bg-derm-hero bg-cover bg-no-repeat bg-fixed bg-center">
          <div className="container px-5 py-24 mx-auto flex flex-wrap items-center backdrop-blur-xs ">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 ">
              <h1 className="title-font font-medium text-3xl text-green-600">
                Dermatological Diseases Detection.
              </h1>
              <p className="leading-relaxed mt-4  text-green-500">
                A Website to detect skin diseases through images.
              </p>
            </div>
            <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                Login
              </h2>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="relative mb-4">
                <label
                  for="password"
                  className="leading-7 text-sm text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg text-center"
              >
                Log in
              </button>
              <Link href="/signin">
                <div className="text-center m-2 text-green-500 ">Sign up</div>
              </Link>
              {error && (
                <div
                  className="flex justify-center items-center px-2 text-red-500"
                  id="error"
                >
                  {error}
                </div>
              )}
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Login;
