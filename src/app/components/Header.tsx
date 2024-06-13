import React from "react";
import Link from "next/link";

import { CloseOutlined} from '@ant-design/icons';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-blue-600">
          <Link href="/" legacyBehavior>
            <a>Web Icon</a>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" legacyBehavior>
            <a className="text-gray-700 hover:text-blue-600">Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="text-gray-700 hover:text-blue-600">About</a>
          </Link>
          <Link href="/services" legacyBehavior>
            <a className="text-gray-700 hover:text-blue-600">Services</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="text-gray-700 hover:text-blue-600">Contact</a>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none focus:text-blue-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div className="md:hidden bg-white border-t border-gray-200">
        <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" legacyBehavior>
            <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">About</a>
          </Link>
          <Link href="/services" legacyBehavior>
            <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Services</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
