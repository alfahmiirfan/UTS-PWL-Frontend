/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React from "react";

const SidebarUser = ({ children }) => {
  return (
    <div className="">
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 "
        aria-label="Sidebar"
      >
        <div className="h-full px-4 py-4 overflow-y-auto bg-primary bg-[#E5C3A6]">
          <div className="flex items-center justify-center text-5xl text-black p-2">
            Kedai Alfahmi
          </div>
          <div className="flex items-center justify-center m-auto -mt-5">
            <ul className="flex-col gap-10">
              <li className="absolute flex items-center justify-center inset-x-0 mt-16">
                <a href="/product/product-page"
                  type="button" 
                  className="w-[80%] p-3 flex gap-4 text-start justify-start items-center text-sm font-medium text-black"
                >
                    
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0H28.69V28.69H0V0Z"
                      fill="white"
                      fill-opacity="0.01"
                    />
                    <path
                      d="M2.38926 8.36781L1.85466 7.29857C1.44967 7.50108 1.19385 7.91505 1.19385 8.36781H2.38926ZM14.3434 2.39073L14.878 1.32152C14.5415 1.15324 14.1454 1.15324 13.8088 1.32152L14.3434 2.39073ZM26.2976 8.36781H27.493C27.493 7.91505 27.2372 7.50108 26.8322 7.29857L26.2976 8.36781ZM26.2976 20.322L26.8322 21.3912C27.2372 21.1887 27.493 20.7748 27.493 20.322H26.2976ZM14.3434 26.2991L13.8088 27.3683C14.1454 27.5366 14.5415 27.5366 14.878 27.3683L14.3434 26.2991ZM2.38926 20.322H1.19385C1.19385 20.7748 1.44967 21.1887 1.85466 21.3912L2.38926 20.322ZM2.92387 9.43705L14.878 3.45994L13.8088 1.32152L1.85466 7.29857L2.92387 9.43705ZM25.1022 8.36781V20.322H27.493V8.36781H25.1022ZM25.763 19.2527L13.8088 25.2298L14.878 27.3683L26.8322 21.3912L25.763 19.2527ZM14.878 25.2298L2.92387 19.2527L1.85466 21.3912L13.8088 27.3683L14.878 25.2298ZM3.58468 20.322V8.36781H1.19385V20.322H3.58468ZM26.8322 7.29857L14.878 1.32152L13.8088 3.45994L25.763 9.43705L26.8322 7.29857Z"
                      fill="white"
                    />
                    <path
                      d="M2.3916 8.36816L14.3458 14.3453"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.345 26.2989V14.3447"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M25.9962 8.20117L14.042 14.1783"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.8561 6.44851C21.4466 6.15324 21.6859 5.43517 21.3907 4.84466C21.0954 4.25416 20.3774 4.0148 19.7869 4.31006L20.8561 6.44851ZM7.83272 10.2871C7.24219 10.5824 7.00286 11.3005 7.29807 11.8909C7.59334 12.4815 8.31143 12.7208 8.9019 12.4256L7.83272 10.2871ZM19.7869 4.31006L7.83272 10.2871L8.9019 12.4256L20.8561 6.44851L19.7869 4.31006Z"
                      fill="white"
                    />
                  </svg>
                  Product
                </a>
              </li>
              <li className="absolute flex items-center justify-center inset-x-0 mt-[135px] ">
                <a
                href="/order/order-page"
                  type="button"
                  className="w-[80%] p-3 flex gap-4 text-start justify-start items-center text-sm font-medium rounded-lg  
                  text-black"
                >
                  <svg
                    width="29"
                    height="30"
                    viewBox="0 0 29 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.07593 7.30296V6.25332C0.9286 6.25331 0.782836 6.28283 0.647675 6.34004C0.512514 6.39725 0.390838 6.48093 0.290187 6.5859C0.189537 6.69087 0.112058 6.81489 0.0625524 6.95027C0.0130473 7.08565 -0.0074286 7.22951 0.00239358 7.37293L1.07593 7.30296ZM27.6141 7.30296L28.6876 7.37293C28.6974 7.22951 28.677 7.08565 28.6274 6.95027C28.5779 6.81489 28.5005 6.69087 28.3998 6.5859C28.2992 6.48093 28.1775 6.39725 28.0423 6.34004C27.9072 6.28283 27.7614 6.25331 27.6141 6.25332V7.30296ZM3.40537 25.6129L2.14947 7.23316L0.00239358 7.37276L1.25847 25.7525L3.40537 25.6129ZM27.4315 25.7525L28.6876 7.37276L26.5405 7.23316L25.2846 25.6129L27.4315 25.7525ZM25.2846 25.6129C25.2544 26.0558 25.0527 26.4709 24.7205 26.7741C24.3883 27.0773 23.9504 27.246 23.4955 27.246V29.3453C25.5722 29.3453 27.2935 27.7743 27.4315 25.7525L25.2846 25.6129ZM1.25847 25.7525C1.39654 27.7743 3.11776 29.3453 5.19436 29.3453V27.246C4.73947 27.246 4.30159 27.0773 3.96942 26.774C3.63725 26.4708 3.43562 26.0558 3.40537 25.6129L1.25847 25.7525ZM10.4001 6.6032C10.4001 4.47769 12.1664 2.75454 14.345 2.75454V0.655273C10.9779 0.655273 8.2484 3.3182 8.2484 6.6032H10.4001ZM14.345 2.75454C16.5236 2.75454 18.2899 4.47769 18.2899 6.6032H20.4416C20.4416 3.3182 17.7121 0.655273 14.345 0.655273V2.75454ZM1.07593 8.35259H27.6141V6.25332H1.07593V8.35259ZM5.19454 29.3453H23.4953V27.246H5.19454V29.3453Z"
                      fill="white"
                    />
                    <path
                      d="M17.5724 12.9004H12.9103C11.5238 12.9004 10.3999 13.9969 10.3999 15.3495C10.3999 16.7022 11.5238 17.7987 12.9103 17.7987H13.6275M13.2689 17.7987H15.7793C17.1657 17.7987 18.2896 18.8952 18.2896 20.2478C18.2896 21.6005 17.1657 22.697 15.7793 22.697H11.1171"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                  Order
                </a>
              </li>
              <li className="absolute flex items-center justify-center inset-x-0 mt-[205px] ">
                <button
                  type="button"
                  className="w-[80%] p-3 flex gap-4 text-start justify-start items-center text-sm font-medium rounded-lg  text-primary bg-white  "
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 30.345V28.5519C2 21.6197 8.42248 16 16.345 16C24.2675 16 30.69 21.6197 30.69 28.5519V30.345"
                      stroke="purple"
                      stroke-width="2.66"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.3433 16.0003C20.8703 16.0003 24.5404 12.789 24.5404 8.82777C24.5404 4.86651 20.8703 1.65527 16.3433 1.65527C11.8161 1.65527 8.14612 4.86651 8.14612 8.82777C8.14612 12.789 11.8161 16.0003 16.3433 16.0003Z"
                      stroke="purple"
                      stroke-width="2.66"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  User
                </button>
              </li>

              <li className="absolute w-full -inset-x-1 bottom-0">
                <button
                  type="button"
                  id="logOut"
                  className="gap-3 w-52 py-1 mb-5 flex items-center justify-center m-auto rounded-md bg-[#950000] hover:bg-[#F02016] text-white p-2 pt-2 pb-2"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <div className=" pl-[280px] h-screen p-5 ">
        <div className="bg-slate-50 p-4 rounded shadow-lg h-full">{children}</div>
      </div>
    </div>
  );
};

export default SidebarUser;
