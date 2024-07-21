import { ChevronDown, CircleUser, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginMenu, setLoginMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onLoginBtnClick = () => {
    setLoginMenu(!loginMenu);
  };

  const onSetMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const LoginMenu = (
    <div className="text-[#d8cdcd] bg-[#4b5563] p-2 pl-4 rounded-xl w-full mt-1 flex flex-col gap-1 absolute z-[100]">
      <ul className="flex flex-col gap-3">
        <li>
          <Link href="/">Signup</Link>
        </li>
        <li>
          <Link href="/">Login</Link>
        </li>
      </ul>
    </div>
  );

  return (
    <header className={`z-50 bg-[#f3f4f6] py-4 left-0 lg:w-full lg:px-16`}>
      <nav
        className={`flex px-6 justify-between items-center text-gray-700 text-base`}
      >
        <div className="font-semibold text-xl hidden lg:block">LOGO</div>

        <div className={`${menuOpen ? "" : "hidden"} lg:block`}>
          <ul className="flex flex-col gap-4 lg:flex-row">
            <li>
              <Link href="/" className="flex gap-1 items-center">
                <span>For Sale</span>
                <ChevronDown size={18} />
              </Link>
            </li>

            <li>
              <Link href="/" className="flex gap-1 items-center">
                <span>To Rent</span>
                <ChevronDown size={18} />
              </Link>
            </li>
            <li>
              <Link href="/">New Developments</Link>
            </li>
            <li>
              <Link href="/">Showdays</Link>
            </li>
            <li>
              <Link href="/">Agencies</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
          </ul>
        </div>

        <div className="self-start">
          <button
            type="button"
            className="flex gap-2 items-center border border-gray-500 py-[10px] px-3 rounded-2xl lg:py-2 lg:px-4"
            aria-label="Login or signup to explore more properties"
            onClick={() => onLoginBtnClick()}
          >
            <span className="text-black">Login</span>
            <CircleUser size={18} />
          </button>
          {loginMenu ? LoginMenu : ""}
        </div>

        <button
          type="button"
          aria-label="Click here to open the menu"
          className="self-start lg:hidden"
          onClick={() => onSetMenuOpen()}
        >
          <Menu />
        </button>
      </nav>
    </header>
  );
};

export default Header;
