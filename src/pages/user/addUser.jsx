/* eslint-disable no-unused-vars */
import React from "react";
import SidebarUser from "../../Components/SidebarUser";

const AddUserPage = () => (
  <SidebarUser>
    <div className="flex flex-col">
      <p className="text-4xl text-black font-bold">Add User</p>
      {/* form */}
      <div className="wrap mt-[100px] w-full">
        <div className="flex w-full flex-col  justify-center  h-72 border-2 border-orange-600 p-8 rounded-lg">
          <div>
            <div className=" flex gap-x-4">
              <div className="flex flex-col mb-4">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  id="email"
                  className=" border border-orange-600 text-gray-900 text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 h-9 px-2 w-96"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  id="email"
                  className=" border border-orange-600 text-gray-900 text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 h-9 px-2 w-96"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
          </div>

          <div className="">
            <div className=" flex gap-x-4">
              <div className="flex flex-col mb-4">
                <label htmlFor="">Password</label>
                <input
                  type="text"
                  id="email"
                  className=" border border-orange-600 text-gray-900 text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 h-9 px-2 w-96"
                  placeholder="Password"
                  required
                />
              </div>

            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button className="flex justify-center py-2 item-center w-40 h-9 bg-orange-600 text-white rounded-lg  text-sm">
              Add User
            </button>
          </div>
        </div>
      </div>
    </div>
  </SidebarUser>
);
export default AddUserPage;
