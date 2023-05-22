
import Link from "next/link";
import Image from "next/image";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Disclosure } from "@headlessui/react";
import { CgProfile } from "react-icons/cg";

export default function Nav() {
const {user,error,isLoading}=useUser();
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  
  return (
    <>
      <div className="w-full ">
        <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
          {/* Logo  */}
          <Disclosure>
            {({ open }) => (
              <>
                <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                  <Link
                    href="/"
                    className="flex items-center space-x-2 text-2xl font-medium text-indigo-600"
                  >
                    <Image
                      src="/assets/logo.png"
                      alt="logo"
                      width={65}
                      height={65}
                    />
                  </Link>

                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-600 focus:text-indigo-600 focus:bg-indigo-100 focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>

                  <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                    <>
                      
                        <Link
                
                          href="/"
                          className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md  hover:text-indigo-600 focus:text-indigo-600 focus:bg-indigo-100 focus:outline-none  font-inter font-semibold"
                        >
                          Home
                        </Link>
                        <Link
                
                          href="#services"
                          className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md  hover:text-indigo-600 focus:text-indigo-600 focus:bg-indigo-100 focus:outline-none  font-inter font-semibold"
                        >
                          Services
                        </Link>
                        <Link
                
                          href="#features"
                          className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md  hover:text-indigo-600 focus:text-indigo-600 focus:bg-indigo-100 focus:outline-none  font-inter font-semibold"
                        >
                          Features
                        </Link>
                        <Link
                
                          href="#about"
                          className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md  hover:text-indigo-600 focus:text-indigo-600 focus:bg-indigo-100 focus:outline-none  font-inter font-semibold"
                        >
                          About Us
                        </Link>
                        <Link
                
                          href="#faq"
                          className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md  hover:text-indigo-600 focus:text-indigo-600 focus:bg-indigo-100 focus:outline-none  font-inter font-semibold"
                        >
                          FAQ
                        </Link>
                        <Link
                
                          href="#contact"
                          className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md  hover:text-indigo-600 focus:text-indigo-600 focus:bg-indigo-100 focus:outline-none  font-inter font-semibold"
                        >
                          Contact Us
                        </Link>
                     
                        {user?
                       ( <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <div>
                          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md  2 text-sm font-semibold  ring-1 ring-inset ring-gray-300  px-6 py-2 mt-3 text-center text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                          <CgProfile className="text-white mt-1 mr-1"/>{`${user.nickname}`}
                            <ChevronDownIcon
                              className="-mr-1 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute left-1 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    href="/Dashboard"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    Dashboard
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    href="/api/auth/logout"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    SignOut
                                  </Link>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>): ( 
                        <Link
                        href="/api/auth/login"
                        className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-md lg:ml-5"
                      >
                        SignIn
                      </Link> 
                           
               
             )}
                    </>
                  </Disclosure.Panel>
                </div>
              </>
            )}
          </Disclosure>

          {/* menu  */}
          <div className="hidden text-center lg:flex lg:items-center">
            <ul className="items-center justify-end flex-1 pt-6 lg:pt-0 list-reset lg:flex">
             
                <li className="mr-3 nav__item">
                  <Link
                    href="/"
                    className="inline-block px-4 py-2 text-md font-inter text-gray-800 no-underline rounded-md  hover:text-indigo-600 focus:text-indigo-600 focus:bg-indigo-100 focus:outline-none font-semibold"
                  >
                    Home
                  </Link>
                </li>
                <li className="mr-3 nav__item">
                  <Link
                    href="#services"
                    className="inline-block px-4 py-2 text-md font-inter text-gray-800 no-underline rounded-md  hover:text-indigo-600 focus:text-indigo-600 focus:bg-indigo-100 focus:outline-none font-semibold"
                  >
                    Services
                  </Link>
                </li>
                <li className="mr-3 nav__item">
                  <Link
                    href="#features"
                    className="inline-block px-4 py-2 text-md font-inter text-gray-800 no-underline rounded-md  hover:text-indigo-600 focus:text-indigo-600 focus:bg-indigo-100 focus:outline-none font-semibold"
                  >
                    Features
                  </Link>
                </li>
                <li className="mr-3 nav__item">
                  <Link
                    href="#about"
                    className="inline-block px-4 py-2 text-md font-inter text-gray-800 no-underline rounded-md = hover:text-indigo-600 focus:text-indigo-600 focus:bg-indigo-100 focus:outline-none font-semibold"
                  >
                    About Us
                  </Link>
                </li>
                <li className="mr-3 nav__item">
                  <Link
                    href="#faq"
                    className="inline-block px-4 py-2 text-md font-inter text-gray-800 no-underline rounded-md  hover:text-indigo-600 focus:text-indigo-600 focus:bg-indigo-100 focus:outline-none font-semibold"
                  >
                    FAQ
                  </Link>
                </li>
                <li className="mr-3 nav__item">
                  <Link
                    href="#contact"
                    className="inline-block px-4 py-2 text-md font-inter text-gray-800 no-underline rounded-md  
                    hover:text-indigo-600 focus:text-indigo-600 focus:bg-indigo-100 focus:outline-none font-semibold"
                  >
                    Contact Us
                  </Link>
                </li>
       
            </ul>
          </div>
          <div className="hidden mr-1 lg:flex nav__item">
          
           {user?
                       ( <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <div>
                          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md  2 text-sm font-normal ring-1 ring-inset ring-gray-300  px-6 py-2  text-center text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        <CgProfile className="text-white mt-1 mr-1"/>{`${user.nickname}`}
                            <ChevronDownIcon
                              className="-mr-1 h-6 w-5 text-gray-100"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute left-1 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    href="/Dashboard"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    Dashboard
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    href="/api/auth/logout"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    SignOut
                                  </Link>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>): ( 

                      <Link
                        href="/api/auth/login"
                        className="w-full px-6 py-2 text-center text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-md lg:ml-5"
                      >
                        SignIn
                      </Link> 
                           
               
             )}
              </div>
          
        </nav>
       
      </div>
    </>
  );
}
