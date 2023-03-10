import React, { useState } from "react";
export default function Header(props) {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
    childSetVar(!toParentVar);
  };
  const [toParentVar, childSetVar] = useState(false);
  props.setChildrenVarFunc(toParentVar);
  return (
    <nav className="bg-white md:py-10 md:pb-0 py-3.5 flex  item-center m-auto">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="font-bold  text-5xl px-5">
          Yuta.
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 mr-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200-gray-400"
          onClick={menuFunction}
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        {openMenu ? (
          <div className="flex-row  md:hidden h-screen container items-center relative ">
            <div>
              <ul className="text-center font-bold translate-y-2/4">
                <li
                  className="border-b-2 p-2 m-6
              "
                >
                  <button>
                    <a href="/#bio" onClick={menuFunction}>
                      Bio
                    </a>
                  </button>
                </li>
                <li
                  className="border-b-2 p-2 m-6
              "
                >
                  <button>
                    <a href="#works" onClick={menuFunction}>
                      Works
                    </a>
                  </button>
                </li>
                <li
                  className="border-b-2 p-2 m-6
              "
                >
                  <button>
                    <a href="#contact" onClick={menuFunction}>
                      Contact
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : undefined}
        <div className="hidden w-full md:block md:w-auto ">
          <ul className="flex font-bold">
            <li className="block py-2 pr-10">
              <button>
                <a href="#bio">Bio</a>
              </button>
            </li>
            <li className="block py-2 pr-10">
              <button>
                <a href="#works">Works</a>
              </button>
            </li>
            <li className="block py-2 pr-10">
              <button>
                <a href="#contact">Contact</a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
