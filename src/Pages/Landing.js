import React from "react";
import { IoMdNotifications } from "react-icons/io";

function Landing() {
  return (
    <div className="flex justify-around items-center h-screen">
      <div className="flex flex-col">
        <button className="bg-[#123799] w-44 h-9 rounded-md text-white font-normal text-md my-4 flex justify-center items-center">
          Seller Dashboard
        </button>

        <button className="bg-[#123799] w-44 h-9 rounded-md text-white font-normal text-md my-4">
          Buyer Dashboard
        </button>
        <IoMdNotifications className="w-6 h-6" />
      </div>
      <div>
        <form>
          <h1 className="text-sm font-bold">I'am Looking for:</h1>
          <input className="w-72 h-6 bg-[#F5F5F5] shadow-[0_3px_10px_rgb(0,0,0,0.2)] my-3" />

          <div class="flex my-2">
            <h1 className="text-sm font-bold mr-6">It's a</h1>

            <div class="flex items-center me-4">
              <input
                id="inline-radio"
                type="radio"
                value=""
                name="inline-radio-group"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
              />
              <label
                for="inline-radio"
                class="ms-2 text-sm font-medium text-gray-900 "
              >
                Product
              </label>
            </div>
            <div class="flex items-center me-4">
              <input
                id="inline-2-radio"
                type="radio"
                value=""
                name="inline-radio-group"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
              />
              <label
                for="inline-2-radio"
                class="ms-2 text-sm font-medium text-gray-900 "
              >
                Service
              </label>
            </div>
          </div>

          <div className="flex">
            <h1 className="text-sm font-bold my-3">I'am Looking at:</h1>
            <input className="w-44 h-6 ml-1 bg-[#F5F5F5] shadow-[0_3px_10px_rgb(0,0,0,0.2)] my-3" />
          </div>
          <div className="flex">
            <h1 className="text-sm font-bold my-3">It's comes under</h1>
            <input className="w-44 h-6 ml-1 bg-[#F5F5F5] shadow-[0_3px_10px_rgb(0,0,0,0.2)] my-3" />
          </div>

          <div class="flex my-3">
            <h1 className="text-sm font-bold mr-6">Condition</h1>

            <div class="flex items-center me-4">
              <input
                id="inline-radio"
                type="radio"
                value=""
                name="inline-radio-group"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
              />
              <label
                for="inline-radio"
                class="ms-2 text-sm font-medium text-gray-900 "
              >
                New
              </label>
            </div>
            <div class="flex items-center me-4">
              <input
                id="inline-2-radio"
                type="radio"
                value=""
                name="inline-radio-group"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
              />
              <label
                for="inline-2-radio"
                class="ms-2 text-sm font-medium text-gray-900 "
              >
                Used
              </label>
            </div>
          </div>
          <div className="flex my-3">
            <h1 className="text-sm font-bold mr-5">Here is some references</h1>
            <button className="bg-[#123799] w-28 h-5 rounded-md text-white font-light text-sm">
              Add Attachment
            </button>
          </div>
          <div className="my-4">
            <h1 className="text-sm font-bold mr-6">Additional Notes:</h1>
            <textarea className="w-72 h-20 bg-[#F5F5F5] shadow-[0_3px_10px_rgb(0,0,0,0.2)] my-2" />
          </div>
          <div className="flex justify-center">
          <button className="bg-[#123799] w-24 h-7 rounded-md text-white font-normal text-md">
            Submit
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Landing;
