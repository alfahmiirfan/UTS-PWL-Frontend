// import * as React from "react";
// eslint-disable-next-line no-unused-vars
import React, { ReactNode } from "react";
// import AdminMenu from "./AdminMenu";

// eslint-disable-next-line react/prop-types
const Table = () => (
  <div className="flex justify-center items-center">
    <table className="w-11/12 text-sm text-left text-black ">
      <thead className="text-xs text-purple-600 uppercase bg-gray-200">
        <tr className="">
          <th scope="col" className="px-4 py-3">
            No
          </th>
          <th scope="col" className="px-6 py-3">
            Name Product
          </th>
          <th scope="col" className="px-6 py-3">
            Price
          </th>
          <th scope="col" className="px-6 py-3">
            Stock
          </th>
          <th scope="col" className="px-8 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b ">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
          >
            1
          </th>
          <td className="px-6 py-4">Ayam Geprek</td>
          <td className="px-6 py-4">Rp 10.000</td>
          <td className="px-6 py-4">66</td>
          <td className="px-6 py-4">
            <a
              href="#"
              className="font-medium text-[#FFA724] dark:text-blue-500"
            >
              Edit
            </a>
            <a
              href="#"
              className="font-medium text-red-600 dark:text-blue-500 ml-6 "
            >
              Delete
            </a>
          </td>
        </tr>
        <tr className="bg-white border-b ">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
          >
            1
          </th>
          <td className="px-6 py-4">Ayam Geprek</td>
          <td className="px-6 py-4">Rp 10.000</td>
          <td className="px-6 py-4">66</td>
          <td className="px-6 py-4">
            <a
              href="#"
              className="font-medium text-[#FFA724] dark:text-blue-500"
            >
              Edit
            </a>
            <a
              href="#"
              className="font-medium text-red-600 dark:text-blue-500 ml-6 "
            >
              Delete
            </a>
          </td>
        </tr>
        <tr className="bg-white border-b ">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
          >
            1
          </th>
          <td className="px-6 py-4">Ayam Geprek</td>
          <td className="px-6 py-4">Rp 10.000</td>
          <td className="px-6 py-4">66</td>
          <td className="px-6 py-4">
            <a
              href="#"
              className="font-medium text-[#FFA724] dark:text-blue-500"
            >
              Edit
            </a>
            <a
              href="#"
              className="font-medium text-red-600 dark:text-blue-500 ml-6 "
            >
              Delete
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Table;
