import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative px-6 py-6 lg:max-w-7xl lg:mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <img src="/assets/logo.svg" alt="Logo" />
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19">
              <path
                fill="#33323D"
                fill-rule="evenodd"
                d="M17.132.661l.707.707L9.707 9.5l8.132 8.132-.707.707L9 10.207.868 18.34l-.707-.707L8.293 9.5.161 1.368.868.661 9 8.793 17.132.661z"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="13">
              <g fill="#33323D" fill-rule="evenodd">
                <path d="M0 0h24v1H0zM0 6h24v1H0zM0 12h24v1H0z" />
              </g>
            </svg>
          )}
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          <li className="nav-item">
            <Link href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link href="/contact">Contact Me</Link>
          </li>
        </ul>
      </div>

      {open && (
        <div className="w-56 bg-grayDarkBlue p-4 absolute right-8">
          <ul className="space-y-4 text-center uppercase font-public text-sm">
            <li className="text-white">
              <Link href="/">Home</Link>
            </li>
            <li className="text-white">
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className="text-white">
              <Link href="/contact">Contact Me</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
