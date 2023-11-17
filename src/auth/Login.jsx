import React from "react";
import { Link } from "react-router-dom";
const Login = () => {    
  return (
    <div className="">
    
      <section class="bg-white ">
        <div class=" flex items-center justify-center min-h-screen px-4 mx-auto">
          <form class="w-full">
            <h1 class="mt-3 text-3xl font-extrabold text-gray-800 capitalize sm:text-4xl ">
              Login
            </h1>
            <h4 className="text-lg font-medium text-gray-700 py-4">
              Please sign in to continue
            </h4>
            <div className="py-4">
              <label>Phone Number</label>
              <div class="relative flex items-center py-2">
                <span class="absolute">
                <span className="absolute mx-8 items-center ">+91</span>
                  <svg

                  className="ml-2 mx-5 rounded-full"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 13.5003V15.0003C17.5 18.3001 17.5 19.9501 16.4749 20.9752C15.4497 22.0003 13.7998 22.0003 10.5 22.0003C7.20017 22.0003 5.55025 22.0003 4.52513 20.9752C3.5 19.9501 3.5 18.3001 3.5 15.0003V9.00031C3.5 5.70048 3.5 4.05056 4.52513 3.02544C5.38151 2.16906 6.67392 2.02809 9 2.00488"
                      stroke="#141B34"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.9991 2C14.5744 2 13.6506 2.90855 12.5581 3.23971C12.1138 3.37436 11.8917 3.44168 11.8018 3.53659C11.7119 3.6315 11.6856 3.77019 11.633 4.04756C11.0696 7.0157 12.301 9.75979 15.2375 10.8279C15.553 10.9426 15.7108 11 16.0007 11C16.2906 11 16.4484 10.9426 16.7639 10.8279C19.7002 9.75978 20.9304 7.01569 20.3669 4.04756C20.3142 3.77014 20.2879 3.63143 20.198 3.53652C20.1081 3.44161 19.886 3.37432 19.4418 3.23974C18.3488 2.90862 17.4239 2 15.9991 2Z"
                      stroke="#141B34"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.5 19H11.5"
                      stroke="#141B34"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>

                <input
                  type="number"
                  className="block w-full py-3 text-gray-700 bg-gray-200 border rounded-2xl px-16 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Entre Phone Number"
                />
                  {/* <span className="absolute">+91</span> */}
              </div>
            </div>
            <div className="py-4">
              <label className="py-5">Password</label>
              <div class="relative flex items-center py-2 ">
                <span class="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 mx-3 text-gray-300 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>

                <input
                  type="password"
                  class="block w-full px-10 py-3 text-gray-700 bg-gray-200 border rounded-2xl  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
                />
              </div>
            </div>

            <div class="mt-6 text-end">
              <p class="my-6 text-end font-bold text-lg text-blue-600 underline cursor-pointer">
                Forgot Password?
              </p>
              <Link to="/open">
              <button class="w-32 px-6 py-2 text-lg font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#00a7ef] rounded-2xl hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Login →
              </button>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
