/* eslint-disable no-unused-vars */
import React from "react";

const EditUser = () => (
  <div className="flex flex-col  justify-center  w-3/4 h-60 border-2 border-purple-600 p-8 rounded-lg">
    <div>
      <div className=" flex gap-x-4">
        <div className="flex flex-col mb-4">
          <label htmlFor="">Name Product</label>
          <input
            type="text"
            id="email"
            className=" border border-purple-600 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 h-9 px-2 w-96"
            placeholder="Name Product"
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="">Price</label>
          <input
            type="text"
            id="email"
            className=" border border-purple-600 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 h-9 px-2 w-96"
            placeholder="Price"
            required
          />
        </div>
      </div>
    </div>

    <div className="">
      <div className=" flex gap-x-4">
        <div className="flex flex-col mb-4">
          <label htmlFor="">Stock</label>
          <input
            type="text"
            id="email"
            className=" border border-purple-600 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 h-9 px-2 w-96"
            placeholder="Email Address"
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="">Add Image</label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-transparent dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            id="user_avatar"
            type="file"
          />
        </div>
      </div>
    </div>

    <div className="flex justify-end mt-4">
      <button className="flex justify-center py-2 item-center w-40 h-9 bg-purple-600 text-white rounded-lg  text-sm">
        Add Product
      </button>
    </div>
  </div>
);
export default EditUser;
