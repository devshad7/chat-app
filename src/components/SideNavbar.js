'use client'

import React from "react";
import { Disclosure } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";

const SideNavbar = () => {
  return (
    <Disclosure as="nav">
      {/* Hamburger Menu Button */}
      <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
        <GiHamburgerMenu className="block md:hidden h-6 w-6" aria-hidden="true" />
      </Disclosure.Button>

      {/* Sidebar */}
      <Disclosure.Panel className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60 peer-focus:left-0 transition-all duration-200">
        <div className="flex flex-col justify-start items-center">
          <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
            Virtual Dashboard
          </h1>

          {/* Menu Items */}
          <div className="my-4 border-b border-gray-100 pb-4">
            {[
              { Icon: MdOutlineSpaceDashboard, label: "Dashboard" },
              { Icon: CgProfile, label: "Profile" },
              { Icon: FaRegComments, label: "Comments" },
              { Icon: MdOutlineAnalytics, label: "Analytics" },
              { Icon: BiMessageSquareDots, label: "Messages" },
              { Icon: MdOutlineIntegrationInstructions, label: "Integration" },
            ].map(({ Icon, label }) => (
              <div key={label} className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <Icon className="text-2xl text-gray-600 group-hover:text-white" />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                  {label}
                </h3>
              </div>
            ))}
          </div>

          {/* Settings */}
          <div className="my-4 border-b border-gray-100 pb-4">
            {[
              { Icon: MdOutlineSettings, label: "Settings" },
              { Icon: MdOutlineMoreHoriz, label: "More" },
            ].map(({ Icon, label }) => (
              <div key={label} className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <Icon className="text-2xl text-gray-600 group-hover:text-white" />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                  {label}
                </h3>
              </div>
            ))}
          </div>

          {/* Logout */}
          <div className="my-4">
            <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white" />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                Logout
              </h3>
            </div>
          </div>
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
};

export default SideNavbar;
