import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: "#110B4D" }}>
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div>
            <a
              className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover dark:hover:text-gray-300"
              href="#"
              style={{ color: "#C39D5B" }}
            >
              <Image
                src="/archrudge-logo.jpeg"
                alt="Arch Rudge Logo"
                width={50}
                height={50}
              />
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
              onClick={() => setOpen(!open)}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className={`items-center md:flex ${open ? "block" : "hidden"}`}>
          <div className="flex flex-col md:flex-row md:mx-6">
            <a
              className="my-1 text-sm font-medium transition-colors duration-200 transform md:mx-4 md:my-0"
              href="#"
              style={{ color: "#C39D5B" }}
            >
              Home
            </a>
            <a
              className="my-1 text-sm font-medium transition-colors duration-200 transform md:mx-4 md:my-0"
              href="#"
              style={{ color: "#C39D5B" }}
            >
              Shop
            </a>
            <a
              className="my-1 text-sm font-medium transition-colors duration-200 transform md:mx-4 md:my-0"
              href="#"
              style={{ color: "#C39D5B" }}
            >
              Contact
            </a>
            <a
              className="my-1 text-sm font-medium transition-colors duration-200 transform md:mx-4 md:my-0"
              href="#"
              style={{ color: "#C39D5B" }}
            >
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
