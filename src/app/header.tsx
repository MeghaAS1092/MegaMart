"use client";

import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart, FaHeadset, FaChevronDown } from "react-icons/fa";
import { useCart } from "./CartContext";

export default function HeaderComponent() {
  const { count } = useCart();
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-24">
      <ul className="flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <li className="px-4">
            <Link href="/" passHref>
              <Image
                src="/logo.png"
                alt="App logo"
                width={200}
                height={80}
                className="!h-[90px] w-auto"
              />
            </Link>
          </li>
          {/* Shop with dropdown */}
          <li className="relative group px-4 py-6 flex items-center space-x-1">
            <Link href="/shop">Shop</Link>
            <FaChevronDown className="text-gray-600 h-4 w-4" />
            {/* Dropdown */}
            <ul
              className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg 
               opacity-0 scale-y-0 transform origin-top 
               transition-all duration-300 ease-in-out 
               group-hover:opacity-100 group-hover:scale-y-100"
            >
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/shop/electronics">Electronics</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/shop/jewelery">Jewelery</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/shop/menShopping">Men</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/shop/womenShopping">Women</Link>
              </li>
            </ul>
          </li>
          <li className="px-4 py-6">
            <Link href="/products">All Products</Link>
          </li>
          <li className="px-4 py-6">
            <Link href="/deals">Deals</Link>
          </li>
        </div>
        {/* Push everything after this point to the right */}
        <div className="flex items-center space-x-6 ml-auto">
          <li className="flex px-4 py-6 items-center space-x-2">
            <FaHeadset className="text-gray-700" />
            <Link href="/support">Help & Support</Link>
          </li>
          <li className="flex px-4 py-6 items-center space-x-2">
            <FaShoppingCart className="text-gray-700" />
            <span className="bg-red-600 text-white text-xs px-1 py-1 rounded-full leading-none">
              {count}{" "}
            </span>
            <Link href="/cart">Cart</Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
