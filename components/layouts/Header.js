import React, { useState } from "react";
export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };
  return (
    <nav class="bg-white py-8 flex px-3 item-center m-auto">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" class="font-bold  text-5xl px-5">
          Yuta.
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 mr-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200-gray-400"
          onClick={menuFunction}
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        {openMenu ? (
          <div className="flex-row  md:hidden h-screen container items-center ">
            <ul className="text-center  font-bold block">
              <li
                className="border-b-2 p-2 m-6
              "
              >
                Bio
              </li>
              <li
                className="border-b-2 p-2 m-6
              "
              >
                Skills
              </li>
              <li
                className="border-b-2 p-2 m-6
              "
              >
                Works
              </li>
              <li
                className="border-b-2 p-2 m-6
              "
              >
                Contact
              </li>
            </ul>
          </div>
        ) : undefined}
        <div className="hidden w-full md:block md:w-auto ">
          <ul class="flex font-bold">
            <li>
              <a href="#" class="block py-2  pr-10">
                Bio
              </a>
            </li>
            <li>
              <a href="#" class="block py-2  pr-10">
                Skills
              </a>
            </li>
            <li>
              <a href="#" class="block py-2  pr-10">
                Works
              </a>
            </li>
            <li>
              <a href="#" class="block py-2  pr-10">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
