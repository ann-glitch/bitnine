import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user } = useContext(UserContext);
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between fixed top-0 left-0 bg-white z-2 bg-transparent text-gray-600">
      <Link to={"/"} className="flex items-center justify-start">
        <img
          src="https://mma.prnewswire.com/media/1504544/Bitnine_Logo.jpg?p=facebook"
          alt="bitnine logo"
          className="w-32 md:w-48 lg:w-60"
        />
      </Link>
      <ul className="hidden flex-1 lg:flex items-center justify-end list-none md:hidden">
        <li>
          <a href="#products" className="hover:text-yellow-500">
            PRODUCTS
          </a>
        </li>
        <li>
          <a href="#usecases" className="hover:text-yellow-500">
            USE CASES
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-yellow-500">
            SERVICES
          </a>
        </li>
        <li>
          <a href="#resources" className="hover:text-yellow-500">
            RESOURCES
          </a>
        </li>
        <li>
          <a href="#blog" className="hover:text-yellow-500">
            BLOG
          </a>
        </li>
        <li>
          <a href="#company" className="hover:text-yellow-500">
            COMPANY
          </a>
        </li>
        <li>
          <a href="#ir" className="hover:text-yellow-500">
            IR
          </a>
        </li>
        <li>
          <Link
            to={user ? "/account" : "/login"}
            className="hover:text-yellow-500 border bg-primary p-2 text-white rounded-md">
            {user ? "PROFILE" : "SIGN IN"}
          </Link>
        </li>
      </ul>
      <div className="w-9 h-9 rounded-2xl relative flex items-center justify-center">
        <HiMenuAlt4
          onClick={() => setToggle(true)}
          className="w-9 h-9 mr-4 mt-6 lg:hidden"
        />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="fixed top-0 right-0 bottom-0 z-5 w-2/4 h-full flex justify-end items-end flex-col bg-gray-200">
            <HiX
              onClick={() => setToggle(false)}
              className="w-9 h-9 mx-2 my-2"
            />
            <ul className="mr-2 p-0 h-full w-full flex justify-start items-start flex-col m-4 gap-6">
              <li>
                <a
                  href="#products"
                  className="hover:text-yellow-500"
                  onClick={() => setToggle(false)}>
                  PRODUCTS
                </a>
              </li>
              <li>
                <a
                  href="#usecases"
                  className="hover:text-yellow-500"
                  onClick={() => setToggle(false)}>
                  USE CASES
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-yellow-500"
                  onClick={() => setToggle(false)}>
                  SERVICES
                </a>
              </li>
              <li>
                <a
                  href="#resources"
                  className="hover:text-yellow-500"
                  onClick={() => setToggle(false)}>
                  RESOURCES
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="hover:text-yellow-500"
                  onClick={() => setToggle(false)}>
                  BLOG
                </a>
              </li>
              <li>
                <a
                  href="#company"
                  className="hover:text-yellow-500"
                  onClick={() => setToggle(false)}>
                  COMPANY
                </a>
              </li>
              <li>
                <a
                  href="#ir"
                  className="hover:text-yellow-500"
                  onClick={() => setToggle(false)}>
                  IR
                </a>
              </li>
              <li>
                {!!user && (
                  <Link
                    to={user ? "/account" : "/login"}
                    className="hover:text-yellow-500 border bg-primary p-2 text-white"
                    onClick={() => setToggle(false)}>
                    SIGN IN
                  </Link>
                )}
              </li>
            </ul>
          </motion.div>
        )}
      </div>
      {/* <Link
        to={user ? "/account" : "/login"}
        className="flex items-center gap-2 border border-gray-200 rounded-full py-2 px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <div className="bg-gray-500 text-white rounded-full border border-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 top-1">
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {!!user && <div>{user.name}</div>}
      </Link> */}
    </nav>
  );
};

export default Navbar;
