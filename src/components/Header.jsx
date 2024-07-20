import { ChevronDown, CircleUser } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const LoginMenu = (
    <div className="text-white bg-[#4b5563] p-2 flex flex-col gap-1">
      <Link href="/">Signup</Link>
      <Link href="/">Login</Link>
    </div>
  );

  const HeaderMenu = (
    <div className="text-white bg-[#4b5563] p-2 flex flex-col gap-1">
      <li>
        <Link href="/">FOR SALE</Link>
      </li>
      <li>
        <Link href="/">TO RENT</Link>
      </li>
      <li>
        <Link href="/">NEW DEVELOPMENTS</Link>
      </li>
      <li>
        <Link href="/">SHOWDAYS</Link>
      </li>
      <li>
        <Link href="/">AGENCIES</Link>
      </li>
      <li>
        <Link href="/">BLOG</Link>
      </li>
    </div>
  );

  return (
    <header className="px-6 py-4 bg-[#f3f4f6] lg:px-16">
      <nav className="flex justify-between items-center text-gray-700 text-base">
        <div className="font-semibold text-xl">LOGO</div>

        <ul className="flex gap-4 invisible lg:visible">
          <li>
            <Link href="/" className="flex gap-1 items-center justify-center">
              <span>For Sale</span>
              <ChevronDown size={18} />
            </Link>
          </li>
          <li>
            <Link href="/" className="flex gap-1 items-center justify-center">
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

      

        <button
          type="button"
          className="flex gap-2 items-center border border-gray-500 py-2 px-4 rounded-2xl"
          aria-label="Login or signup to explore more properties"
        >
          <span className="text-black">Login</span>
          <CircleUser size={18} />
        </button>
      </nav>
    </header>
  );
};

export default Header;
