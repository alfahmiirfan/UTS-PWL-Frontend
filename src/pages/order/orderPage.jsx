/* eslint-disable no-unused-vars */
import React from "react";
import SidebarOrder from "../../Components/SidebarOrder";

const OrderPage = () => (
  <SidebarOrder>
    <div className="flex flex-col ">
      <p className="text-4xl text-order-600 font-bold">Product</p>

      {/* table */}
      <table className="overflow-hidden rounded text-sm text-left text-black w-full  mt-[100px] ">
        <thead className="text-xs text-order-600 uppercase bg-gray-200">
          <tr className="">
            <th scope="col" className="px-4 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Consumen Name
            </th>
            <th scope="col" className="px-6 py-3">
              Total Items
            </th>
            <th scope="col" className="px-6 py-3">
            Total Price
            </th>
            <th scope="col" className="px-8 py-3 text-center">
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
            <td className="px-6 py-4">fahmi</td>
            <td className="px-6 py-4">3</td>
            <td className="px-6 py-4">Rp. 30000</td>
            <td className="px-6 py-4  text-center">
              <a href="#" className="font-medium text-green-600">
                Succes
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </SidebarOrder>
);
export default OrderPage;
