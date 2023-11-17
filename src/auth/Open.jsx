import React from "react";
import myService from "../comp/myService";

const Open = () => {
  return (
    <>
      <div className="bg-[#efeff2] pb-10">
        {/* NavBar_______ */}
        <div className=" flex flex-col">
          <nav className="flex items-center justify-between my-10">
            <div className="logo flex items-center ">
              <svg
                className="bg-blue-300 mx-3 items-center rounded-2xl px-2 py-1"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 20H10V4H4V20Z"
                  stroke="#141B34"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 20H20V4H14V20Z"
                  stroke="#141B34"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="">
                <span className="font-bold">Deep</span>
                <p>VIP LEVEL 0</p>
              </div>
            </div>

            <div className="icon mx-5">
              <svg
                className="bg-white rounded-2xl px-2 py-1"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 10V18H17C19.2091 18 21 16.2091 21 14C21 11.7909 19.2091 10 17 10H15Z"
                  stroke="#141B34"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 10V18H7C4.79086 18 3 16.2091 3 14C3 11.7909 4.79086 10 7 10H9Z"
                  stroke="#141B34"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 14V11C3 6.02944 7.02944 2 12 2C16.9706 2 21 6.02944 21 11V22H12"
                  stroke="#141B34"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </nav>
        </div>

        {/* section 2 */}
        <div className="londellbase flex justify-between items-center bg-blue-950 rounded-3xl mx-3">
          <button className="bg-[#00a7ef] font-bold text-white my-6 py-3 px-4 ml-4 rounded-2xl">
            About Us
          </button>
          <img className="mx-4" src="/loo.png" alt="" />
        </div>

        {/* section 3 */}
        {/* 1st term */}
        <h1 className="font-bold text-blue-950 mx-3 mt-8 text-xl">
          My Service
        </h1>
        <div className="grid grid-cols-4 mx-3 items-center">
          {myService.map((ele) => {
            return (
              <>
                <div className="mx-1 items-center bg-white text-center w-auto h-24 px-1 py-1 my-2 rounded-2xl grid-item">
                  <h1 className="items-center text-cente ml-5 sm:ml-16 md:ml-28 lg:ml-32 xl:ml-[215px] 2xl:ml-[212px] my-2 ">
                    {ele.log}
                  </h1>
                  <h1 className="text-blue-950 font-semibold">{ele.name}</h1>
                </div>
              </>
            );
          })}
        </div>

        {/* 2nd term */}
        <div className="main grid grid-cols-2 w-full ">
          <div className="first bg-white  mx-5 my-4 items-center px-5 py-5 rounded-lg">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.9427 16.8354C20.2864 12.8866 16.7762 8.72713 15 7H9C7.22378 8.72713 3.71361 12.8866 3.05727 16.8354C2.56893 19.7734 5.27927 22 8.30832 22H15.6917C18.7207 22 21.4311 19.7734 20.9427 16.8354Z"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17 3.5L17.6512 3.8721C17.7949 3.62066 17.7809 3.30897 17.6154 3.07133C17.4499 2.8337 17.1624 2.71259 16.8767 2.7602L17 3.5ZM14 4L13.4697 4.53033L13.7426 4.80325L14.1233 4.7398L14 4ZM12 2L12.5303 1.46967C12.2374 1.17678 11.7626 1.17678 11.4697 1.46967L12 2ZM7 3.5L7.1233 2.7602C6.83764 2.71259 6.5501 2.8337 6.38458 3.07133C6.21906 3.30897 6.20514 3.62066 6.34882 3.8721L7 3.5ZM10 4L9.8767 4.7398L10.2574 4.80325L10.5303 4.53033L10 4ZM16.3488 3.1279L14.3488 6.6279L15.6512 7.3721L17.6512 3.8721L16.3488 3.1279ZM16.8767 2.7602L13.8767 3.2602L14.1233 4.7398L17.1233 4.2398L16.8767 2.7602ZM14.5303 3.46967L12.5303 1.46967L11.4697 2.53033L13.4697 4.53033L14.5303 3.46967ZM6.34882 3.8721L8.34882 7.3721L9.65118 6.6279L7.65118 3.1279L6.34882 3.8721ZM6.8767 4.2398L9.8767 4.7398L10.1233 3.2602L7.1233 2.7602L6.8767 4.2398ZM10.5303 4.53033L12.5303 2.53033L11.4697 1.46967L9.46967 3.46967L10.5303 4.53033Z"
                fill="#141B34"
              />
              <path
                d="M12 11.5C10.8954 11.5 10 12.1716 10 13C10 13.8284 10.8954 14.5 12 14.5C13.1046 14.5 14 15.1716 14 16C14 16.8284 13.1046 17.5 12 17.5M12 11.5C12.8708 11.5 13.6116 11.9174 13.8862 12.5M12 11.5V10M12 17.5C11.1292 17.5 10.3884 17.0826 10.1138 16.5M12 17.5V19"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </svg>
            <h1 className="font-bold ">₹23.00</h1>
            <p className="w-full ">Current Balance</p>
            <h1 className="font-bold mt-4">₹0.00</h1>
            <p>Withdraw Balance</p>

            <button class="w-full my-2 px- py-2 text-lg font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#00a7ef] rounded-2xl hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Deposit
            </button>
            <br />
            <button class="w-full px- py-2 text-lg font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#061e29] rounded-2xl focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Withdraw
            </button>
          </div>

          {/* 3rd term */}
          <div className="first flex flex-col mx-2 my- b items-center px-5 py-[17px] rounded-lg">
            <div className="w-full bg-white py-10 px-5 rounded-xl">
              <svg
                className="bg-slate-200 px-2 rounded-xl"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 9C19.6254 9.81968 20 10.8634 20 12C20 13.1366 19.6254 14.1803 19 15"
                  stroke="#141B34"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.9993 4H16.7493C16.7493 3.72564 16.5995 3.47317 16.3587 3.34171C16.1179 3.21024 15.8245 3.22076 15.5937 3.36913L15.9993 4ZM15.9993 20L15.5937 20.6309C15.8245 20.7792 16.1179 20.7898 16.3587 20.6583C16.5995 20.5268 16.7493 20.2744 16.7493 20H15.9993ZM4 8.5V7.75C3.58579 7.75 3.25 8.08579 3.25 8.5H4ZM4 15.5H3.25C3.25 15.9142 3.58579 16.25 4 16.25V15.5ZM9 8.5V9.25H9.2203L9.4056 9.13087L9 8.5ZM9 15.5L9.4056 14.8691L9.2203 14.75H9V15.5ZM15.2493 4V20H16.7493V4H15.2493ZM3.25 8.5V15.5H4.75V8.5H3.25ZM4 9.25H9V7.75H4V9.25ZM4 16.25H9V14.75H4V16.25ZM9.4056 9.13087L16.4049 4.63087L15.5937 3.36913L8.5944 7.86913L9.4056 9.13087ZM8.5944 16.1309L15.5937 20.6309L16.4049 19.3691L9.4056 14.8691L8.5944 16.1309Z"
                  fill="#141B34"
                />
              </svg>
              <h1 className="font-bold ">Promotion</h1>
            </div>

            <div className="w-full bg-white py-10 px-5 rounded-xl my-5">
              <svg
                className="bg-slate-200 px-2 flex justify-start items-start rounded-xl"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#141B34"
                  stroke-width="1.5"
                />
                <path
                  d="M12 8V12L14 14"
                  stroke="#141B34"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h1 className="font-bold ">My Earnings Investment</h1>
            </div>
          </div>
        </div>

        {/* section 4th */}
        <div className="">
          <div className="last_item mx-4 my-4 flex ">
            <div className="bg-white px-4 py-2 rounded-xl w-full">
              <svg
                className="px-2 bg-slate-200 rounded-2xl"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 7.5C15 7.5 15.5 7.5 16 8.5C16 8.5 17.5882 6 19 5.5"
                  stroke="#141B34"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 7C22 9.76142 19.7614 12 17 12C14.2386 12 12 9.76142 12 7C12 4.23858 14.2386 2 17 2C19.7614 2 22 4.23858 22 7Z"
                  stroke="#141B34"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M3.60746 21.0092L4.07229 20.4206L3.60746 21.0092ZM3.0528 20.4871L3.61262 19.988L3.0528 20.4871ZM20.9472 20.4871L20.3874 19.988L20.9472 20.4871ZM20.3925 21.0092L19.9277 20.4206L20.3925 21.0092ZM3.60746 6.9909L3.14263 6.40232L3.60746 6.9909ZM3.0528 7.51293L3.61262 8.01204L3.0528 7.51293ZM22.75 13.2441C22.7493 12.8299 22.4129 12.4947 21.9987 12.4954C21.5845 12.4961 21.2493 12.8325 21.25 13.2467L22.75 13.2441ZM9.06582 6.75255C9.48003 6.75021 9.81391 6.41253 9.81157 5.99832C9.80922 5.58411 9.47154 5.25023 9.05734 5.25258L9.06582 6.75255ZM13.5 21.25H10.5V22.75H13.5V21.25ZM10.5 21.25C8.60311 21.25 7.24353 21.2489 6.19895 21.1309C5.16816 21.0145 4.54359 20.7928 4.07229 20.4206L3.14263 21.5977C3.926 22.2164 4.86842 22.4902 6.03058 22.6214C7.17896 22.7512 8.63832 22.75 10.5 22.75V21.25ZM1.25 14C1.25 15.749 1.24857 17.1318 1.38762 18.2222C1.52932 19.3333 1.82681 20.239 2.49298 20.9862L3.61262 19.988C3.22599 19.5544 2.99708 18.9852 2.87558 18.0324C2.75143 17.0589 2.75 15.7886 2.75 14H1.25ZM4.07229 20.4206C3.90545 20.2888 3.7517 20.144 3.61262 19.988L2.49298 20.9862C2.69068 21.208 2.90811 21.4125 3.14263 21.5977L4.07229 20.4206ZM21.25 14C21.25 15.7886 21.2486 17.0589 21.1244 18.0324C21.0029 18.9852 20.774 19.5544 20.3874 19.988L21.507 20.9862C22.1732 20.239 22.4707 19.3333 22.6124 18.2222C22.7514 17.1318 22.75 15.749 22.75 14H21.25ZM13.5 22.75C15.3617 22.75 16.821 22.7512 17.9694 22.6214C19.1316 22.4902 20.074 22.2164 20.8574 21.5977L19.9277 20.4206C19.4564 20.7928 18.8318 21.0145 17.801 21.1309C16.7565 21.2489 15.3969 21.25 13.5 21.25V22.75ZM20.3874 19.988C20.2483 20.144 20.0946 20.2888 19.9277 20.4206L20.8574 21.5977C21.0919 21.4125 21.3093 21.208 21.507 20.9862L20.3874 19.988ZM2.75 14C2.75 12.2115 2.75143 10.9412 2.87558 9.96763C2.99708 9.01482 3.22599 8.44569 3.61262 8.01204L2.49298 7.01383C1.82681 7.76105 1.52932 8.66673 1.38762 9.77788C1.24857 10.8683 1.25 12.2511 1.25 14H2.75ZM3.14263 6.40232C2.90811 6.58753 2.69068 6.79208 2.49298 7.01383L3.61262 8.01204C3.7517 7.85604 3.90545 7.71125 4.07229 7.57949L3.14263 6.40232ZM22.75 14C22.75 13.7408 22.7504 13.4871 22.75 13.2441L21.25 13.2467C21.2504 13.4882 21.25 13.7372 21.25 14H22.75ZM9.05734 5.25258C7.64978 5.26054 6.50411 5.29296 5.56558 5.44108C4.61301 5.59141 3.81862 5.86846 3.14263 6.40232L4.07229 7.57949C4.47956 7.25785 5.00124 7.04871 5.79942 6.92274C6.61164 6.79455 7.65139 6.76055 9.06582 6.75255L9.05734 5.25258Z"
                  fill="#141B34"
                />
                <path
                  d="M10 18H11.5"
                  stroke="#141B34"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.5 18L18 18"
                  stroke="#141B34"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.5 11H10"
                  stroke="#141B34"
                  stroke-width="1.5   "
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h5 className="font-bold">My Card</h5>
              <p>Save your bank card to inverst</p>
            </div>
          </div>

          <div className="last_item mx-4 my-4 flex">
            <div className="bg-white px-4 py-2 rounded-xl w-full">
              <svg
                className="px-2 bg-slate-200 rounded-2xl"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 13L17 17.5M12 13L7 17.5M12 13V8"
                  stroke="#141B34"
                  stroke-width="1.5"
                />
                <path
                  d="M14.5008 3.5L11.9996 2L9.50118 3.5L9.5 6.5L11.9996 8L14.5008 6.5V3.5Z"
                  stroke="#141B34"
                  stroke-width="1.5"
                />
                <path
                  d="M7.00083 17.5L4.49965 16L2.00118 17.5L2 20.5L4.49965 22L7.00083 20.5V17.5Z"
                  stroke="#141B34"
                  stroke-width="1.5"
                />
                <path
                  d="M22.0008 17.5L19.4996 16L17.0012 17.5L17 20.5L19.4996 22L22.0008 20.5V17.5Z"
                  stroke="#141B34"
                  stroke-width="1.5"
                />
              </svg>
              <h5 className="font-bold">My Card</h5>
              <p>Save your bank card to inverst</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-fuchsia-500 w-full py-5 px-10 flex justify-between   ">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 22L9.00335 16L15 16V22"
            stroke="#141B34"
            stroke-width="1.5"
          />
          <path
            d="M19.5016 22L22.0017 9L12.0017 2L2 9L4.50161 22H19.5016Z"
            stroke="#141B34"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
        </svg>
          

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 9.5V8.3C18.992 5.49713 18.9051 4.0112 17.967 3.05442C16.9332 2 15.2694 2 11.9416 2L10.0592 2C6.73147 2 5.0676 2 4.0338 3.05442C3 4.10883 3 5.80589 3 9.2L3 13.8C3 17.1941 3 18.8912 4.0338 19.9456C4.95155 20.8816 6.36586 20.9867 9 20.9985"
            stroke="#141B34"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M18.6753 19.6886L21 22M20 16.5C20 14.0147 17.9853 12 15.5 12C13.0147 12 11 14.0147 11 16.5C11 18.9853 13.0147 21 15.5 21C17.9853 21 20 18.9853 20 16.5Z"
            stroke="#141B34"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 7H15"
            stroke="#141B34"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M7 11H10"
            stroke="#141B34"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.9527 2H9.04738V4.58152L7.15473 5.69367L4.95267 4.40192L2 9.59808L4.20152 10.8895L4.20153 13.1106L2.0001 14.4019L4.95277 19.5981L7.15477 18.3064L9.04738 19.4185V22H14.9527V19.4185L16.8453 18.3064L19.0472 19.5981L21.9999 14.4019L19.7986 13.1106L19.7986 10.8894L22 9.59808L19.0473 4.40192L16.8453 5.69363L14.9527 4.58152V2Z"
            stroke="#141B34"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <path
            d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z"
            stroke="#141B34"
            stroke-width="1.5"
          />
        </svg>
      </div>
    </>
  );
};

export default Open;
